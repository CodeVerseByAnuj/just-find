/**
 * Environment configuration
 */

const requiredEnvVars = ['NODE_ENV']

const optionalEnvVars = [
  'NEXT_PUBLIC_APP_URL',
  'NEXT_PUBLIC_API_URL',
  'DATABASE_URL',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
  'GOOGLE_MAPS_API_KEY',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
]

function createEnvConfig() {
  const config = {}

  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar]
    if (!value) {
      throw new Error(`Missing required environment variable: ${envVar}`)
    }
    config[envVar] = value
  }

  // Add optional environment variables with defaults
  for (const envVar of optionalEnvVars) {
    config[envVar] = process.env[envVar]
  }

  return {
    NODE_ENV: config.NODE_ENV,
    NEXT_PUBLIC_APP_URL: config.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_API_URL: config.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    DATABASE_URL: config.DATABASE_URL,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    NEXTAUTH_URL: config.NEXTAUTH_URL,
    GOOGLE_MAPS_API_KEY: config.GOOGLE_MAPS_API_KEY,
    SMTP_HOST: config.SMTP_HOST,
    SMTP_PORT: config.SMTP_PORT,
    SMTP_USER: config.SMTP_USER,
    SMTP_PASS: config.SMTP_PASS,
  }
}

export const env = createEnvConfig()

export const isDevelopment = env.NODE_ENV === 'development'
export const isProduction = env.NODE_ENV === 'production'
export const isTest = env.NODE_ENV === 'test'

// Feature flags
export const features = {
  enableAuth: !!env.NEXTAUTH_SECRET,
  enableDatabase: !!env.DATABASE_URL,
  enableMaps: !!env.GOOGLE_MAPS_API_KEY,
  enableEmail: !!(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS),
}