'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

// Theme types
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}

// Default theme configuration
const defaultTheme = {
  mode: THEMES.SYSTEM,
  colors: {
    primary: {
      light: '#3B82F6',
      dark: '#60A5FA',
    },
    secondary: {
      light: '#6B7280',
      dark: '#9CA3AF',
    },
    background: {
      light: '#FFFFFF',
      dark: '#111827',
    },
    surface: {
      light: '#F9FAFB',
      dark: '#1F2937',
    },
    text: {
      light: '#111827',
      dark: '#F9FAFB',
    },
    border: {
      light: '#E5E7EB',
      dark: '#374151',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
}

// Create context
const ThemeContext = createContext()

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme)
  const [currentMode, setCurrentMode] = useState(THEMES.LIGHT)

  // Get system theme preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEMES.DARK
        : THEMES.LIGHT
    }
    return THEMES.LIGHT
  }

  // Update theme mode
  const updateThemeMode = (mode) => {
    setTheme(prev => ({
      ...prev,
      mode,
    }))
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('justfind-theme-mode', mode)
    }
  }

  // Get effective theme (resolve system preference)
  const getEffectiveTheme = () => {
    if (theme.mode === THEMES.SYSTEM) {
      return getSystemTheme()
    }
    return theme.mode
  }

  // Update current mode based on effective theme
  useEffect(() => {
    const effectiveTheme = getEffectiveTheme()
    setCurrentMode(effectiveTheme)
    
    // Update CSS custom properties
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      const isDark = effectiveTheme === THEMES.DARK
      
      // Update class for Tailwind dark mode
      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      
      // Update CSS custom properties for components
      root.style.setProperty('--color-primary', theme.colors.primary[effectiveTheme])
      root.style.setProperty('--color-secondary', theme.colors.secondary[effectiveTheme])
      root.style.setProperty('--color-background', theme.colors.background[effectiveTheme])
      root.style.setProperty('--color-surface', theme.colors.surface[effectiveTheme])
      root.style.setProperty('--color-text', theme.colors.text[effectiveTheme])
      root.style.setProperty('--color-border', theme.colors.border[effectiveTheme])
    }
  }, [theme.mode, theme.colors])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined' && theme.mode === THEMES.SYSTEM) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = () => {
        setCurrentMode(getSystemTheme())
      }
      
      mediaQuery.addEventListener('change', handleChange)
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [theme.mode])

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('justfind-theme-mode')
      if (savedMode && Object.values(THEMES).includes(savedMode)) {
        updateThemeMode(savedMode)
      }
    }
  }, [])

  // Theme utilities
  const themeUtils = {
    // Toggle between light and dark
    toggle: () => {
      const newMode = currentMode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
      updateThemeMode(newMode)
    },
    
    // Set specific theme
    setMode: updateThemeMode,
    
    // Check if current theme is dark
    isDark: currentMode === THEMES.DARK,
    
    // Check if current theme is light
    isLight: currentMode === THEMES.LIGHT,
    
    // Get current effective theme
    getCurrentMode: () => currentMode,
    
    // Get theme color
    getColor: (colorPath, fallback = '#000000') => {
      const keys = colorPath.split('.')
      let color = theme.colors
      
      for (const key of keys) {
        if (color && typeof color === 'object' && key in color) {
          color = color[key]
        } else {
          return fallback
        }
      }
      
      if (typeof color === 'object' && currentMode in color) {
        return color[currentMode]
      }
      
      return typeof color === 'string' ? color : fallback
    },
    
    // Update theme colors
    updateColors: (newColors) => {
      setTheme(prev => ({
        ...prev,
        colors: {
          ...prev.colors,
          ...newColors,
        },
      }))
    },
    
    // Reset to default theme
    reset: () => {
      setTheme(defaultTheme)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('justfind-theme-mode')
      }
    },
  }

  const value = {
    theme,
    currentMode,
    utils: themeUtils,
    THEMES,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Higher-order component for theme-aware components
export function withTheme(Component) {
  return function ThemedComponent(props) {
    const theme = useTheme()
    return <Component {...props} theme={theme} />
  }
}

export { THEMES }
export default ThemeContext