import { Project, ServiceDetail, Testimonial, ProcessStep, FAQItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'oakridge-residence',
    name: 'The Oakridge Residence',
    location: 'Portland, OR',
    year: '2024',
    category: 'Custom Homes',
    style: 'Modern',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '6,400 sq ft',
    duration: '14 Months',
    bedrooms: 5,
    bathrooms: 6,
    materials: ['Sustainably Sourced Cedar', 'Burnished Copper Accents', 'Board-Formed Concrete', 'Triple-Pane Low-E Glass'],
    description: 'A masterpiece of pacific northwest modernism, featuring floor-to-ceiling glass walls, custom copper exterior reveals, and an integrated infinity pool that seamlessly connects indoor luxury with nature.',
    testimonial: {
      quote: 'MJV Construction transformed our complex architectural vision into an effortlessly breathtaking home. Their precision with cedar joinery and metal fabrication was extraordinary.',
      author: 'Sarah & Michael Chen',
      role: 'Homeowners'
    }
  },
  {
    id: 'lakeside-modern',
    name: 'Lakeside Modern Estate',
    location: 'Lake Oswego, OR',
    year: '2023',
    category: 'Custom Homes',
    style: 'Modern',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '7,800 sq ft',
    duration: '16 Months',
    bedrooms: 6,
    bathrooms: 7,
    materials: ['Natural Oregon Slate', 'Custom Steel Beams', 'Hand-rubbed Walnut', 'Architectural Zinc Flashing'],
    description: 'Perched along the shoreline, Lakeside Modern combines heavy timber structural elements with minimalist cantilevered roofs. Built to resist coastal moisture while maximizing natural sunlight.',
    testimonial: {
      quote: 'The level of craftsmanship in the custom walnut cabinetry and steel structural reveals exceeded even our architect’s ambitious specifications.',
      author: 'David & Eline Ross',
      role: 'Property Owners'
    }
  },
  {
    id: 'mercantile-loft-conversion',
    name: 'Mercantile Loft Conversion',
    location: 'Downtown Portland, OR',
    year: '2023',
    category: 'Renovations',
    style: 'Modern',
    mainImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '3,200 sq ft',
    duration: '7 Months',
    bedrooms: 2,
    bathrooms: 3,
    materials: ['Restored Reclaimed Brick', 'Polished Concrete', 'Patinated Copper Fixtures', 'Custom Acoustic Wood Slats'],
    description: 'Full historic renovation of a 1910 timber-and-brick warehouse into an ultra-luxury urban penthouse featuring soundproof thermal insulation, motorized skylights, and bespoke steel staircases.',
    testimonial: {
      quote: 'MJV navigated historical preservation codes flawlessly while injecting modern smart technology into 100-year-old brickwork.',
      author: 'Julian Vance',
      role: 'Developer & Loft Owner'
    }
  },
  {
    id: 'cedar-hill-estate',
    name: 'Cedar Hill Manor',
    location: 'West Hills, OR',
    year: '2022',
    category: 'Custom Homes',
    style: 'Traditional',
    mainImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '8,200 sq ft',
    duration: '18 Months',
    bedrooms: 6,
    bathrooms: 8,
    materials: ['Hand-carved Limestone', 'Copper Roof Gutter Systems', 'Quarter-sawn White Oak', 'Custom Wrought Iron'],
    description: 'An elegant estate blending classical timber architecture with modern geothermal HVAC systems, custom wine cellars, and expansive timber outdoor living pavilions.',
    testimonial: {
      quote: 'Built with the rigor of a heritage estate. Five years later, not a single seam or door frame has shifted.',
      author: 'Harrison & Victoria Sterling',
      role: 'Estate Owners'
    }
  },
  {
    id: 'horizon-view-renovation',
    name: 'Horizon View Master Suite & Wing',
    location: 'Dunthorpe, OR',
    year: '2024',
    category: 'Renovations',
    style: 'Modern',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '2,400 sq ft',
    duration: '5 Months',
    bedrooms: 1,
    bathrooms: 2,
    materials: ['Calacatta Marble', 'Brushed Copper Hardware', 'Radiant Heated Teak Flooring', 'Frameless Glass'],
    description: 'A high-end interior and structural overhaul converting a cramped upper wing into a spa-inspired primary retreat complete with steam room, dual copper soaking tubs, and private outdoor balcony.',
    testimonial: {
      quote: 'They completed the renovation while we resided downstairs with zero disruption, flawless dust barrier protection, and absolute punctuality.',
      author: 'Elena Rostova',
      role: 'Homeowner'
    }
  },
  {
    id: 'overton-design-studio',
    name: 'Overton Creative Headquarters',
    location: 'Pearl District, Portland',
    year: '2023',
    category: 'Commercial',
    style: 'Modern',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80'
    ],
    sqft: '12,500 sq ft',
    duration: '9 Months',
    materials: ['Architectural Steel', 'Acoustic Fiber Panels', 'Burnished Copper Entryway Portal', 'Polished Terrazzo'],
    description: 'A light commercial buildout for a leading architecture firm featuring exposed timber ceilings, modular glass meeting pods, and custom copper brand walls.',
    testimonial: {
      quote: 'As architects ourselves, we have exceptionally high standards. MJV delivered laser-accurate tolerances and immaculate finish work.',
      author: 'Marcus Vance, AIA',
      role: 'Principal Architect'
    }
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'custom-homes',
    title: 'Custom Home Construction',
    category: 'Residential',
    shortDesc: 'Bespoke residences designed around your unique lifestyle and architectural vision.',
    fullDesc: [
      'Building a custom home is the ultimate realization of personal style and architectural ambition. At MJV Construction, we partner with premier architects, interior designers, and homeowners to craft turn-key luxury residences that stand for generations.',
      'From complex hilltop foundation engineering to microscopic interior trim reveals, our dedicated project teams ensure every line on your blueprint is executed with mathematical precision.'
    ],
    features: [
      'Architectural & Engineering Collaboration',
      'Premium & Sustainable Material Sourcing',
      'Zero-Tolerance Precision Framing & Steel Structure',
      'Advanced Energy-Efficient & Net-Zero Building Envelope',
      'Integrated Smart Home Infrastructure & Automation'
    ],
    timeline: '8–14 Months',
    startingPrice: '$1.2M+',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'renovations',
    title: 'Renovations & Additions',
    category: 'Residential',
    shortDesc: 'Transform existing spaces into modern, high-performance luxury sanctuaries.',
    fullDesc: [
      'Whether updating a mid-century architectural gem or adding a multi-story master wing, structural renovations require deep technical finesse to seamlessly blend old and new.',
      'We specialize in occupied home renovations with negative-pressure air filtration, surgical structural integration, and zero compromise on interior luxury.'
    ],
    features: [
      'Whole-Home Structural Overhauls & Modernizations',
      'Second-Story & Master Wing Luxury Additions',
      'Dust Containment & Occupied-Space Protocol',
      'Historical Detail Preservation & Custom Replication',
      'Gourmet Kitchen & Spa-Level Bathroom Architecture'
    ],
    timeline: '3–8 Months',
    startingPrice: '$250k+',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'adus-wing',
    title: 'Accessory Dwelling Units (ADUs) & Guesthouses',
    category: 'Residential',
    shortDesc: 'High-end secondary residences, estate guest houses, and private wellness pavilions.',
    fullDesc: [
      'Maximize your property value and lifestyle options with fully autonomous, custom-crafted guest suites, pool houses, or private creative studios built to the exact standards of your primary residence.'
    ],
    features: [
      'Autonomous Utility & Mechanical Integration',
      'Architectural Matching to Primary Estate',
      'Luxury Compact Spatial Planning & Built-ins',
      'Turn-Key Permitting & Land Use Navigations'
    ],
    timeline: '4–7 Months',
    startingPrice: '$180k+',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'commercial',
    title: 'Light Commercial & Boutique Retail',
    category: 'Commercial',
    shortDesc: 'Refined office spaces, creative studios, and high-end retail developments.',
    fullDesc: [
      'We bring residential-level craftsmanship to commercial construction, creating distinctive headquarters, flagship retail spaces, and boutique hospitality environments that reinforce brand authority.'
    ],
    features: [
      'Boutique Office & Flagship Retail Buildouts',
      'Acoustic Engineering & Specialized Sound Isolation',
      'Custom Architectural Metalwork & Millwork',
      'Accelerated Commercial Permitting & Inspections'
    ],
    timeline: '5–10 Months',
    startingPrice: '$450k+',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-management',
    title: 'Owner Representation & Project Management',
    category: 'Consulting',
    shortDesc: 'Rigorous fiscal oversight, quality audits, and schedule management for complex builds.',
    fullDesc: [
      'For clients who demand complete transparency and flawless execution, our executive project management team provides independent oversight, budget auditing, and contractor management.'
    ],
    features: [
      'Open-Book Budgeting & Material Cost Audits',
      'Critical Path Schedule Tracking & Milestone Verification',
      'Quality Control Inspection Reports at Every Construction Phase',
      'Vendor & Subcontractor Contract Negotiation'
    ],
    timeline: 'Duration of Project',
    startingPrice: 'Retainer / Fee-Based',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pre-construction',
    title: 'Pre-Construction Feasibility & Feasibility Study',
    category: 'Consulting',
    shortDesc: 'De-risk your investment before ground-breaking with site, code, and cost analysis.',
    fullDesc: [
      'Before investing hundreds of thousands into architectural drawings, de-risk your project with our thorough pre-construction analysis covering soil feasibility, local zoning limits, structural engineering challenges, and realistic cost modeling.'
    ],
    features: [
      'Zoning & Municipal Code Audits',
      'Site Topography & Geotechnical Feasibility',
      'Preliminary Value Engineering & Material Cost Options',
      'Comprehensive Permitting Roadmap'
    ],
    timeline: '2–4 Weeks',
    startingPrice: '$15,000 Flat Rate',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "MJV Construction didn't just build our house — they delivered our dream. Every detail was considered, every deadline was met, and the quality is simply unmatched.",
    author: 'Sarah & Michael Chen',
    project: 'Custom Home Build',
    location: 'Portland, OR',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 't2',
    quote: "Their transparent open-book accounting and weekly video updates gave us 100% peace of mind. Not a single budget surprise across 14 months of complex building.",
    author: 'Robert Sterling',
    project: 'Lakeside Modern Estate',
    location: 'Lake Oswego, OR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 't3',
    quote: "As an architect with 25 years of experience, MJV is the contractor I choose for my own family's home. Their wood joinery and copper flashing work is true art.",
    author: 'Elena Vance, AIA',
    project: 'Historic Loft Conversion',
    location: 'Pearl District',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Vision',
    desc: 'We listen to your lifestyle needs, evaluate your site parameters, and establish precise budget guardrails.',
    details: [
      'In-depth architectural review & site walk',
      'Initial budget alignment & financial structuring',
      'Contractor-architect synergy mapping'
    ]
  },
  {
    number: '02',
    title: 'Design & Planning',
    desc: 'Architectural blueprints, 3D material renderings, structural engineering, and municipal permit clearance.',
    details: [
      'Detailed itemized cost breakdown (guaranteed cap)',
      'Subcontractor bidding & material reservations',
      'City zoning & building permit acquisition'
    ]
  },
  {
    number: '03',
    title: 'Precision Construction',
    desc: 'Master craftspeople execute your build with weekly video walkthroughs and dedicated project management.',
    details: [
      'Daily site supervision & safety protocols',
      'Weekly client progress reports & financial ledger access',
      'Independent structural & third-party quality audits'
    ]
  },
  {
    number: '04',
    title: 'Delivery & Warranty',
    desc: 'Flawless white-glove handover, comprehensive owner operation manuals, and written 10-year warranty.',
    details: [
      'Zero-defect final walkthrough & punch list clearance',
      'HVAC & smart home system client training',
      '10-Year structural guarantee backed in writing'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How do I know if my project requires a municipal permit?',
    answer: 'Virtually all structural changes, new construction, second-story additions, and electrical/plumbing overhauls require municipal permits. MJV Construction handles 100% of permit filings, structural engineering sign-offs, and city inspector reviews on your behalf.',
    category: 'General'
  },
  {
    id: 'f2',
    question: 'What is your typical payment and billing schedule?',
    answer: 'We operate on a transparent, milestone-based billing schedule tied directly to verified construction progress. You will receive detailed open-book invoices showing exact material receipts and labor breakdowns before any draw is made.',
    category: 'Billing'
  },
  {
    id: 'f3',
    question: 'Can I live in my home during a major renovation?',
    answer: 'For partial home renovations or master wing additions, yes. We erect sealed thermal dust barriers with negative air pressure systems to isolate construction zones, ensure daily end-of-day site cleanups, and maintain functional utilities for your family.',
    category: 'Construction'
  },
  {
    id: 'f4',
    question: 'How do you handle supply chain or weather delays?',
    answer: 'We mitigate delays through proactive pre-ordering during the 60-day design phase before ground is broken. We lock in material pricing and delivery dates upfront, and maintain dedicated backup suppliers for critical architectural elements.',
    category: 'Timeline'
  },
  {
    id: 'f5',
    question: 'Do you offer a written warranty on your construction work?',
    answer: 'Yes. MJV Construction provides a comprehensive 10-Year Structural Warranty, a 2-Year Mechanical/Electrical System Guarantee, and a 1-Year Craftsmanship Warranty covering all finish work and custom millwork.',
    category: 'Warranty'
  },
  {
    id: 'f6',
    question: 'What geographic areas do you serve?',
    answer: 'We primarily build throughout the Greater Portland Metropolitan area, Lake Oswego, West Hills, Dunthorpe, Bend, and select coastal luxury estates in Oregon and Southern Washington.',
    category: 'General'
  }
];
