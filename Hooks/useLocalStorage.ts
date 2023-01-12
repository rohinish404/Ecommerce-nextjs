import { useState,useEffect } from "react"
const hasLocalStorage = typeof localStorage !== 'undefined'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    if (hasLocalStorage) {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue != null && jsonValue !== 'undefined') return JSON.parse(jsonValue)
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    if (hasLocalStorage) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}