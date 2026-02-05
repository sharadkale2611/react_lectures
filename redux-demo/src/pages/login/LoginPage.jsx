import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

function LoginPage() {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('@@@');   // local username

  const setLogin = (newValue)=>{
    dispatch(login(newValue))
  }

  return (
    <div style={{background:'#008c8eae', width:'96%', padding:'30px'}}>
      Login page
      <input 
        type='text'
        placeholder='Username'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <br /><br />
      <button type='button' onClick={setLogin(inputValue)} >Login</button>
      <button type='button' >Logout</button>
    </div>
  )
}

export default LoginPage
