'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="m-10 text-center">
      <span className="text-lg">Counter: {count}</span>
      <div className="my-5 flex justify-center">
        <button
          className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
          onClick={() => {
            setCount((prevCount) => prevCount + 1)
          }}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
