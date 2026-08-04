import React, { useEffect } from 'react';
import { PageId } from '../types';

interface SEOHeadProps {
  activePage: PageId;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
}

const META_MAP: Record<PageId, PageMeta> = {
  home: {
    title: 'MJV Construction | Custom Home Builders Portland OR & Luxury Remodeling',
    description: 'MJV Construction is Portland Oregon’s premier custom home builder and architectural remodeling contractor. Over 20 years of precision craftsmanship, luxury homes, and custom builds.',
    keywords: 'Custom home builder Portland OR, luxury home contractor Portland, architectural renovation Oregon, residential general contractor Lake Oswego, high end home remodeling Portland',
    canonical: 'https://mjvconstruction.com/',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  services: {
    title: 'Custom Home Building & Architectural Services | Portland, OR | MJV Construction',
    description: 'Explore our full spectrum of residential construction services in Portland OR: custom home builds, whole-home renovations, luxury kitchen/bath remodels, and architectural design-build.',
    keywords: 'Custom home building services Portland, whole home remodeling Oregon, luxury kitchen remodel Lake Oswego, architectural design build West Linn, residential general contracting',
    canonical: 'https://mjvconstruction.com/services',
    ogImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  projects: {
    title: 'Custom Home Portfolio & Remodeling Showcase | Portland, OR | MJV Construction',
    description: 'Browse MJV Construction’s portfolio of award-winning custom home builds, modern luxury estates, and masterwork renovations in Portland, Lake Oswego, and West Linn.',
    keywords: 'Portland custom home portfolio, luxury home showcase Oregon, architectural remodeling gallery, Lake Oswego custom residence photos',
    canonical: 'https://mjvconstruction.com/projects',
    ogImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  contact: {
    title: 'Contact MJV Construction | Portland Custom Home Builders | (503) 555-0147',
    description: 'Schedule your complimentary custom home consultation with MJV Construction in Portland, OR. Contact our master builders to discuss your architectural vision.',
    keywords: 'Contact custom home builder Portland, schedule home construction consultation Oregon, MJV Construction phone number, general contractor Portland OR address',
    canonical: 'https://mjvconstruction.com/contact',
    ogImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ activePage }) => {
  const meta = META_MAP[activePage] || META_MAP.home;

  useEffect(() => {
    // 1. Update Document Title
    document.title = meta.title;

    // Helper to update or create meta tag
    const setMetaTag = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords);
    setMetaTag('name', 'author', 'MJV Construction');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow');

    // Geo Local SEO Meta Tags
    setMetaTag('name', 'geo.region', 'US-OR');
    setMetaTag('name', 'geo.placename', 'Portland');
    setMetaTag('name', 'geo.position', '45.5152;-122.6784');
    setMetaTag('name', 'ICBM', '45.5152, -122.6784');

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', meta.canonical);
    setMetaTag('property', 'og:image', meta.ogImage);
    setMetaTag('property', 'og:site_name', 'MJV Construction');
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', meta.ogImage);

    // 5. Canonical Link
    setLinkTag('canonical', meta.canonical);

    // 6. JSON-LD Structured Data (LocalBusiness + Organization + Services + FAQ)
    let jsonLdScript = document.querySelector('#seo-json-ld');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-json-ld';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HomeAndConstructionBusiness',
          '@id': 'https://mjvconstruction.com/#organization',
          'name': 'MJV Construction',
          'url': 'https://mjvconstruction.com',
          'logo': 'https://mjvconstruction.com/assets/logo.png',
          'image': meta.ogImage,
          'telephone': '+1-503-555-0147',
          'email': 'info@mjvconstruction.com',
          'priceRange': '$$$$',
          'description': 'MJV Construction is Portland Oregon’s premier custom home builder and architectural remodeling contractor, delivering luxury residential builds for over 20 years.',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '4820 SW Macadam Ave, Suite 200',
            'addressLocality': 'Portland',
            'addressRegion': 'OR',
            'postalCode': '97239',
            'addressCountry': 'US'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 45.4878,
            'longitude': -122.6729
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              'opens': '07:30',
              'closes': '17:30'
            }
          ],
          'areaServed': [
            { '@type': 'City', 'name': 'Portland', 'sameAs': 'https://en.wikipedia.org/wiki/Portland,_Oregon' },
            { '@type': 'City', 'name': 'Lake Oswego', 'sameAs': 'https://en.wikipedia.org/wiki/Lake_Oswego,_Oregon' },
            { '@type': 'City', 'name': 'West Linn', 'sameAs': 'https://en.wikipedia.org/wiki/West_Linn,_Oregon' },
            { '@type': 'City', 'name': 'Beaverton', 'sameAs': 'https://en.wikipedia.org/wiki/Beaverton,_Oregon' },
            { '@type': 'City', 'name': 'Hillsboro', 'sameAs': 'https://en.wikipedia.org/wiki/Hillsboro,_Oregon' }
          ],
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '48',
            'bestRating': '5',
            'worstRating': '1'
          },
          'sameAs': [
            'https://instagram.com',
            'https://linkedin.com',
            'https://facebook.com'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://mjvconstruction.com/#website',
          'url': 'https://mjvconstruction.com',
          'name': 'MJV Construction',
          'description': 'Built with Precision. Trusted for Generations.',
          'publisher': { '@id': 'https://mjvconstruction.com/#organization' }
        },
        {
          '@type': 'Service',
          'name': 'Custom Home Building',
          'serviceType': 'Custom Home Construction',
          'provider': { '@id': 'https://mjvconstruction.com/#organization' },
          'areaServed': 'Portland, OR',
          'description': 'End-to-end custom home construction built to highest architectural specifications in Portland, Lake Oswego, and West Linn.'
        },
        {
          '@type': 'Service',
          'name': 'Whole Home Remodeling & Additions',
          'serviceType': 'Residential Renovation',
          'provider': { '@id': 'https://mjvconstruction.com/#organization' },
          'areaServed': 'Portland, OR',
          'description': 'Comprehensive luxury home structural remodels, historic renovations, and architectural additions.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What geographic areas does MJV Construction serve in Oregon?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'MJV Construction serves the greater Portland metropolitan area including Portland, Lake Oswego, West Linn, Beaverton, Hillsboro, and Dunthorpe.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How long does a typical custom home build take in Portland?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Most custom home builds take between 10 to 18 months depending on site prep, architectural complexity, and municipal permitting timelines.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Does MJV Construction manage permitting and architectural design?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. We offer complete design-build and general contracting services including full permitting, architectural coordination, engineering, and site construction management.'
              }
            }
          ]
        }
      ]
    };

    jsonLdScript.textContent = JSON.stringify(localBusinessSchema);

  }, [activePage, meta]);

  return null;
};
