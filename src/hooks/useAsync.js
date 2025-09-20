import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for handling async operations
 * @param {Function} asyncFunction - The async function to execute
 * @param {boolean} immediate - Whether to execute immediately
 * @returns {Object} - { execute, loading, data, error }
 */
function useAsync(asyncFunction, immediate = true) {
  const [loading, setLoading] = useState(immediate)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...params) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await asyncFunction(...params)
      setData(result)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return {
    execute,
    loading,
    data,
    error,
    reset: () => {
      setData(null)
      setError(null)
      setLoading(false)
    }
  }
}

export default useAsync