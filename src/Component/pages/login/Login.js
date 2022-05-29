import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
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
            <button className='loginButton'><Link to='/register' style={{textDecoration:'none',color:'inherit'}}>
            Register
            </Link>
            </button>
        </form>
    </div>
  )
}

export default Login