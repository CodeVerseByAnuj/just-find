/**
 * Application configuration
 */

import { env } from './env'

export const appConfig = {
  name: 'JustFind',
  description: 'Find businesses and services in your area',
  url: env.NEXT_PUBLIC_APP_URL,
  version: '1.0.0',
  author: {
    name: 'CodeVerseByAnuj',
    url: 'https://github.com/CodeVerseByAnuj',
  },
  keywords: ['business', 'directory', 'services', 'local', 'nextjs'],
  social: {
    twitter: '@justfind',
    github: 'https://github.com/CodeVerseByAnuj/just-find',
  },
} as const

export const seoConfig = {
  defaultTitle: appConfig.name,
  titleTemplate: `%s | ${appConfig.name}`,
  description: appConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: appConfig.url,
    siteName: appConfig.name,
    images: [
      {
        url: `${appConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: appConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: appConfig.social.twitter,
    creator: appConfig.social.twitter,
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: appConfig.author.name,
    },
    {
      name: 'keywords',
      content: appConfig.keywords.join(', '),
    },
  ],
} as const

export const apiConfig = {
  baseUrl: env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000,
  endpoints: {
    businesses: '/businesses',
    reviews: '/reviews',
    contact: '/contact',
    search: '/search',
  },
} as const

export const uiConfig = {
  theme: {
    defaultTheme: 'light',
    storageKey: 'justfind-theme',
  },
  animations: {
    pageTransition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    modal: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  pagination: {
    defaultPageSize: 12,
    pageSizeOptions: [6, 12, 24, 48],
  },
} as const

export const mapConfig = {
  apiKey: env.GOOGLE_MAPS_API_KEY,
  defaultCenter: {
    lat: 40.7128,
    lng: -74.0060, // New York City
  },
  defaultZoom: 12,
  styles: {
    height: '400px',
    width: '100%',
  },
} as const

export const emailConfig = {
  from: {
    name: appConfig.name,
    address: 'noreply@justfind.com',
  },
  templates: {
    contact: 'contact-form',
    welcome: 'welcome',
    businessApproval: 'business-approval',
  },
} as const

export const validationConfig = {
  business: {
    name: {
      minLength: 2,
      maxLength: 100,
    },
    description: {
      minLength: 10,
      maxLength: 500,
    },
    phone: {
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  review: {
    content: {
      minLength: 10,
      maxLength: 500,
    },
    rating: {
      min: 1,
      max: 5,
    },
  },
  contact: {
    name: {
      minLength: 2,
      maxLength: 50,
    },
    message: {
      minLength: 10,
      maxLength: 500,
    },
  },
} as const