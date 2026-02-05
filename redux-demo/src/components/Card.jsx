import React from 'react'
import { useSelector } from 'react-redux'

function Card() {
  const username = useSelector((state) => state.auth.username)

  return (
      <div style={{ background:'#eee', width:'200px',  height:'150px', padding:'10px', borderRadius:'10px'}}>
          <p style={{ color: 'red' }}>Card Component</p>
      <p style={{ background: '#000', padding: '5px', color: '#fff', borderRadius: '10px' }}>Hello {username}</p>
    </div>
  )
}

export default Card
