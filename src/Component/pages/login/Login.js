import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login'>
        <label className='loginLable'>Login</label>
        <form className='loginForm'>
            <label>Email</label>
            <input type='email' placeholder='Email'></input>
            <label>Password</label>
            <input type='password' placeholder='Password'></input>

            <button className='loginButton'>Login</button>
            <button className='loginButton'>Register</button>
        </form>
    </div>
  )
}

export default Login