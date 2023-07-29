'use client'
import { useState, useEffect } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>Timer: {count}</p>
      <button
        className="mt-6 text-center text-red-500"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
