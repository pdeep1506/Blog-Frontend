import React from 'react'
import './Register.css'
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
            <button className='registerButton'>Login</button>
        </form>
    </div>
  )
}

export default Register