'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  businesses: [],
  categories: [],
  searchFilters: {
    query: '',
    category: '',
    location: '',
    rating: 0,
    isOpen: false,
  },
  favorites: [],
  notifications: [],
  loading: {
    businesses: false,
    user: false,
    general: false,
  },
  errors: {},
}

// Action types
export const ACTION_TYPES = {
  // User actions
  SET_USER: 'SET_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  
  // Business actions
  SET_BUSINESSES: 'SET_BUSINESSES',
  ADD_BUSINESS: 'ADD_BUSINESS',
  UPDATE_BUSINESS: 'UPDATE_BUSINESS',
  DELETE_BUSINESS: 'DELETE_BUSINESS',
  
  // Category actions
  SET_CATEGORIES: 'SET_CATEGORIES',
  
  // Search actions
  UPDATE_SEARCH_FILTERS: 'UPDATE_SEARCH_FILTERS',
  CLEAR_SEARCH_FILTERS: 'CLEAR_SEARCH_FILTERS',
  
  // Favorites actions
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  SET_FAVORITES: 'SET_FAVORITES',
  
  // Notification actions
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
  
  // Loading actions
  SET_LOADING: 'SET_LOADING',
  
  // Error actions
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
}

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      }
    
    case ACTION_TYPES.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        favorites: [],
      }
    
    case ACTION_TYPES.SET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
      }
    
    case ACTION_TYPES.ADD_BUSINESS:
      return {
        ...state,
        businesses: [...state.businesses, action.payload],
      }
    
    case ACTION_TYPES.UPDATE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.map(business =>
          business.id === action.payload.id ? action.payload : business
        ),
      }
    
    case ACTION_TYPES.DELETE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.filter(
          business => business.id !== action.payload
        ),
      }
    
    case ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    
    case ACTION_TYPES.UPDATE_SEARCH_FILTERS:
      return {
        ...state,
        searchFilters: {
          ...state.searchFilters,
          ...action.payload,
        },
      }
    
    case ACTION_TYPES.CLEAR_SEARCH_FILTERS:
      return {
        ...state,
        searchFilters: initialState.searchFilters,
      }
    
    case ACTION_TYPES.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    
    case ACTION_TYPES.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload),
      }
    
    case ACTION_TYPES.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      }
    
    case ACTION_TYPES.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      }
    
    case ACTION_TYPES.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        ),
      }
    
    case ACTION_TYPES.CLEAR_NOTIFICATIONS:
      return {
        ...state,
        notifications: [],
      }
    
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          ...action.payload,
        },
      }
    
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: action.payload.error,
        },
      }
    
    case ACTION_TYPES.CLEAR_ERROR:
      const newErrors = { ...state.errors }
      delete newErrors[action.payload]
      return {
        ...state,
        errors: newErrors,
      }
    
    case ACTION_TYPES.CLEAR_ALL_ERRORS:
      return {
        ...state,
        errors: {},
      }
    
    default:
      return state
  }
}

// Create context
const AppContext = createContext()

// Context provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Action creators
  const actions = {
    // User actions
    setUser: (user) => dispatch({ type: ACTION_TYPES.SET_USER, payload: user }),
    logoutUser: () => dispatch({ type: ACTION_TYPES.LOGOUT_USER }),
    
    // Business actions
    setBusinesses: (businesses) => dispatch({ type: ACTION_TYPES.SET_BUSINESSES, payload: businesses }),
    addBusiness: (business) => dispatch({ type: ACTION_TYPES.ADD_BUSINESS, payload: business }),
    updateBusiness: (business) => dispatch({ type: ACTION_TYPES.UPDATE_BUSINESS, payload: business }),
    deleteBusiness: (businessId) => dispatch({ type: ACTION_TYPES.DELETE_BUSINESS, payload: businessId }),
    
    // Category actions
    setCategories: (categories) => dispatch({ type: ACTION_TYPES.SET_CATEGORIES, payload: categories }),
    
    // Search actions
    updateSearchFilters: (filters) => dispatch({ type: ACTION_TYPES.UPDATE_SEARCH_FILTERS, payload: filters }),
    clearSearchFilters: () => dispatch({ type: ACTION_TYPES.CLEAR_SEARCH_FILTERS }),
    
    // Favorites actions
    addFavorite: (businessId) => dispatch({ type: ACTION_TYPES.ADD_FAVORITE, payload: businessId }),
    removeFavorite: (businessId) => dispatch({ type: ACTION_TYPES.REMOVE_FAVORITE, payload: businessId }),
    setFavorites: (favorites) => dispatch({ type: ACTION_TYPES.SET_FAVORITES, payload: favorites }),
    
    // Notification actions
    addNotification: (notification) => {
      const notificationWithId = {
        ...notification,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date(),
      }
      dispatch({ type: ACTION_TYPES.ADD_NOTIFICATION, payload: notificationWithId })
      
      // Auto-remove notification after duration
      if (notification.duration !== 0) {
        setTimeout(() => {
          dispatch({ type: ACTION_TYPES.REMOVE_NOTIFICATION, payload: notificationWithId.id })
        }, notification.duration || 5000)
      }
    },
    removeNotification: (notificationId) => dispatch({ type: ACTION_TYPES.REMOVE_NOTIFICATION, payload: notificationId }),
    clearNotifications: () => dispatch({ type: ACTION_TYPES.CLEAR_NOTIFICATIONS }),
    
    // Loading actions
    setLoading: (loadingState) => dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loadingState }),
    
    // Error actions
    setError: (key, error) => dispatch({ type: ACTION_TYPES.SET_ERROR, payload: { key, error } }),
    clearError: (key) => dispatch({ type: ACTION_TYPES.CLEAR_ERROR, payload: key }),
    clearAllErrors: () => dispatch({ type: ACTION_TYPES.CLEAR_ALL_ERRORS }),
  }

  // Load initial data
  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('justfind-favorites')
    if (savedFavorites) {
      try {
        const favorites = JSON.parse(savedFavorites)
        actions.setFavorites(favorites)
      } catch (error) {
        console.error('Error loading favorites:', error)
      }
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('justfind-favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  const value = {
    state,
    actions,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the app context
export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export default AppContext