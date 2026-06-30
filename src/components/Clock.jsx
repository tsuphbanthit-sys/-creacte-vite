import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Current Time</h2>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{time}</p>
    </div>
  )
}

export default Clock