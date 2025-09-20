/**
 * Application constants
 */

export const APP_CONFIG = {
  name: 'JustFind',
  description: 'Find businesses and services in your area',
  version: '1.0.0',
  author: 'CodeVerseByAnuj',
  keywords: ['business', 'directory', 'services', 'local'],
}

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  retryAttempts: 3,
}

export const UI_CONFIG = {
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
}

export const FORM_CONFIG = {
  validation: {
    email: {
      required: 'Email is required',
      invalid: 'Please enter a valid email address',
    },
    phone: {
      required: 'Phone number is required',
      invalid: 'Please enter a valid phone number',
    },
    name: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters',
    },
    message: {
      required: 'Message is required',
      minLength: 'Message must be at least 10 characters',
    },
  },
  limits: {
    nameMaxLength: 50,
    messageMaxLength: 500,
    phoneMaxLength: 15,
  },
}

export const BUSINESS_CATEGORIES = [
  'Restaurants',
  'Shopping',
  'Healthcare',
  'Education',
  'Entertainment',
  'Services',
  'Technology',
  'Real Estate',
  'Automotive',
  'Beauty & Wellness',
  'Sports & Recreation',
  'Professional Services',
]

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'JustFind helped me discover amazing local businesses I never knew existed!',
    rating: 5,
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Customer',
    content: 'The best platform for finding reliable services in my area.',
    rating: 5,
    avatar: '/avatars/mike.jpg',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Service Provider',
    content: 'Great way to connect with potential customers in my community.',
    rating: 4,
    avatar: '/avatars/emily.jpg',
  },
]

export const FAQ_DATA = [
  {
    id: 1,
    question: 'How do I list my business?',
    answer: 'You can list your business by clicking on the "Add Business" button and filling out the required information.',
  },
  {
    id: 2,
    question: 'Is JustFind free to use?',
    answer: 'Yes, JustFind is completely free for both businesses and customers.',
  },
  {
    id: 3,
    question: 'How do I contact a business?',
    answer: 'Each business listing includes contact information such as phone number, email, and website.',
  },
  {
    id: 4,
    question: 'Can I leave reviews?',
    answer: 'Yes, you can leave reviews and ratings for businesses you have visited.',
  },
]

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/justfind',
  twitter: 'https://twitter.com/justfind',
  instagram: 'https://instagram.com/justfind',
  linkedin: 'https://linkedin.com/company/justfind',
}

export const CONTACT_INFO = {
  email: 'hello@justfind.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business St, City, State 12345',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
}