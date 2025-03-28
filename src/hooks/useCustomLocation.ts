import { useEffect, useState } from 'react'

export default function useCustomLocation() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('pushstate', handleLocationChange)
    window.addEventListener('replacestate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('pushstate', handleLocationChange)
      window.removeEventListener('replacestate', handleLocationChange)
    }
  }, [])

  return path
}
