import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const abortController = new AbortController()
    fetch(url)
      .then(response => {
        console.log('response', response)
        if (!response.ok) {
          setError(error)
          throw Error('response error!')
        }
        return response.json()
      })
      .then(json => {
        console.log('json', json)
        setData(json)
        setIsLoading(false)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          console.log('error', error)
        }
        setIsLoading(false)
        setError(error)
      })
    return () => abortController.abort()
  }, [url])
  return { data, isLoading, error }
}

export default useFetch
