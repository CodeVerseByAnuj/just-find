'use client'

import React, { Component } from 'react'

/**
 * Error Boundary component to catch JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    this.setState({
      error,
      errorInfo,
    })

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // In production, you would send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // this.logErrorToService(error, errorInfo)
    }
  }

  logErrorToService = (error, errorInfo) => {
    // Implement error logging service integration here
    // For example, Sentry, LogRocket, Bugsnag, etc.
    console.log('Logging error to service:', { error, errorInfo })
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    })
  }

  handleRefresh = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <div className="mx-auto h-24 w-24 text-red-500 mb-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">
                We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={this.handleRefresh}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Refresh Page
              </button>
            </div>

            {/* Development-only error details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="bg-red-50 border border-red-200 rounded-md p-4 space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold text-red-800">Error:</h4>
                    <pre className="text-xs text-red-700 whitespace-pre-wrap">
                      {this.state.error && this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <h4 className="text-sm font-semibold text-red-800">Component Stack:</h4>
                      <pre className="text-xs text-red-700 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * Higher-order component for wrapping components with error boundary
 * @param {React.Component} Component - Component to wrap
 * @param {React.ReactNode} fallback - Custom fallback UI
 * @param {Function} onError - Error handler function
 * @returns {React.Component} - Wrapped component
 */
export function withErrorBoundary(Component, fallback, onError) {
  function WrappedComponent(props) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

/**
 * Error fallback component for specific use cases
 * @param {Object} props - Component props
 * @param {Error} props.error - Error object
 * @param {Function} props.resetError - Function to reset error state
 * @param {string} props.title - Error title
 * @param {string} props.message - Error message
 * @returns {React.ReactElement} - Error fallback UI
 */
export function ErrorFallback({
  error,
  resetError,
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  className = '',
}) {
  return (
    <div className={`min-h-[200px] flex items-center justify-center p-6 ${className}`}>
      <div className="text-center space-y-4 max-w-md">
        <div className="mx-auto h-16 w-16 text-red-500">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{message}</p>
        </div>
        
        {resetError && (
          <button
            onClick={resetError}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Try again
          </button>
        )}
        
        {/* Development error details */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left mt-4">
            <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-red-600 mt-2 p-3 bg-red-50 border border-red-200 rounded overflow-auto max-h-32">
              {error.toString()}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

/**
 * Hook for error handling in functional components
 * @returns {Function} - Error throwing function
 */
export function useErrorHandler() {
  return (error, errorInfo) => {
    console.error('useErrorHandler:', error, errorInfo)
    
    // In production, log to error service
    if (process.env.NODE_ENV === 'production') {
      // logErrorToService(error, errorInfo)
    }
    
    // Re-throw to be caught by error boundary
    throw error
  }
}

export default ErrorBoundary