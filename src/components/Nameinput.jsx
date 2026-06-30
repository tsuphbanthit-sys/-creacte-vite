import React, { useState } from 'react'

const Nameinput = () => {
  const [name, setName] = useState('')

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Name Input</h2>
      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Your name is: {name}</p>
    </div>
  )
}

export default Nameinput