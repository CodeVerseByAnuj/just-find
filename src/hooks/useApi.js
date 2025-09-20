import { useState, useCallback } from 'react'
import { API_CONFIG } from '../constants'

/**
 * Custom hook for API calls with error handling and loading states
 * @returns {Object} - API methods and state
 */
function useApi() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeRequest = useCallback(async (url, options = {}) => {
    setLoading(true)
    setError(null)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout)

      const response = await fetch(`${API_CONFIG.baseUrl}${url}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        signal: controller.signal,
        ...options,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (err) {
      if (err.name === 'AbortError') {
        throw new Error('Request timeout')
      }
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const get = useCallback((url, options = {}) => {
    return makeRequest(url, { method: 'GET', ...options })
  }, [makeRequest])

  const post = useCallback((url, data, options = {}) => {
    return makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    })
  }, [makeRequest])

  const put = useCallback((url, data, options = {}) => {
    return makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    })
  }, [makeRequest])

  const del = useCallback((url, options = {}) => {
    return makeRequest(url, { method: 'DELETE', ...options })
  }, [makeRequest])

  const patch = useCallback((url, data, options = {}) => {
    return makeRequest(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    })
  }, [makeRequest])

  return {
    loading,
    error,
    get,
    post,
    put,
    delete: del,
    patch,
    clearError: () => setError(null),
  }
}

export default useApi