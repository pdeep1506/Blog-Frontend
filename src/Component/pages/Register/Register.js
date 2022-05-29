import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
        <label className='registerLable'>Register</label>
        <form className='registerForm'>
            <label>User Name</label>
            <input type='text' placeholder='User Name'></input>
            <label>Email</label>
            <input type='email' placeholder='Email'></input>
            <label>Password</label>
            <input type='password' placeholder='Password'></input>

            <button className='registerButton'>Register</button>
            <button className='registerButton'><Link to='/login' style={{textDecoration:'none',color:'inherit'}}>
            Login
            </Link></button>
        </form>
    </div>
  )
}

export default Register