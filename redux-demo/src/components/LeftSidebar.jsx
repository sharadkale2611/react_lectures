import React from 'react'
import { useSelector } from 'react-redux'

function LeftSidebar() {

  const username = useSelector((state) => state.auth.username)

  return (
      <div style={{ background:'#e0e0e0', height:'75vh', padding:'5px' }}>
          <p style={{ color: 'red' }}>Left Sidebar</p>
      <p style={{ background: '#000', padding: '5px', color: '#fff', borderRadius: '10px' }}>Hello {username}</p>
        <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
              <li>Menu 4</li>
        </ul>
    </div>
  )
}

export default LeftSidebar