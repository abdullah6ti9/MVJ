export type PageId = 'home' | 'services' | 'projects' | 'contact';

export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  category: 'Custom Homes' | 'Renovations' | 'Commercial';
  style: 'Modern' | 'Traditional';
  mainImage: string;
  gallery: string[];
  sqft: string;
  duration: string;
  bedrooms?: number;
  bathrooms?: number;
  materials: string[];
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  features: string[];
  timeline: string;
  startingPrice: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  project: string;
  location: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  preferredTimeline: string;
  projectLocation: string;
  message: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
