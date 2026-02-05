import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

  const username = useSelector((state) => state.auth.username)

  return (
      <div style={{ background: '#72727783', margin: '1px', padding: '2px' }}>
      <p 
        style={{ background: '#000', padding: '5px', color: '#fff', borderRadius: '10px', maxWidth: '150px', position: 'relative', float: 'right' }}>
        Hello {username}
      </p>
          <p style={{ color: 'red' }}>Header</p>

    </div>
  )
}

export default Header
