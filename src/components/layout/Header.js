import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <h1 style={headerStyle}>TodoList</h1>
      </header>
    </div>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}