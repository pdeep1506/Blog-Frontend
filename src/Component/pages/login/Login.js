import React,{useContext, useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {Context} from '../../../context/Context'
import axios from 'axios'
const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const {user,dispatch,isFetching} = useContext(Context)
  const [error, seterror] = useState(false)
  const [errorType, seterrorType] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault();
    dispatch({type:'LOGIN_STAER'});
    try{
      const res = await axios.post('/api/auth/login',{ username: username,password:password})
      // console.log(res.data)
      dispatch({type:'LOGIN_SUCCESS',payload:res.data})
      
    }
    catch(err){
      dispatch({type:'LOGIN_FAILURE',payload:err})
      // console.log(err.request.response)
      seterror(true)
      seterrorType(err.request.response)
    }
  }
  // console.log(user,isFetching)
  return (
    <div className='login'>
        <label className='loginLable'>Login</label>
        <form className='loginForm' onSubmit={(e)=> handleSubmit(e)}>
            <label>Username</label>
            <input type='string' placeholder='Username' onChange={(e)=> setusername(e.target.value)}></input>
            <label>Password</label>
            <input type='password' placeholder='Password' onChange={(e)=> setpassword(e.target.value)}></input>

            <button className='loginButton' type='submit'>Login</button>
            <button className='loginButton'><Link to='/register' style={{textDecoration:'none',color:'inherit'}}>
            Register
            </Link>
            </button>
            {error && (
              <span
                style={{ color: "red", textAlign: "center", marginTop: "20px" }}
              >
                {errorType}
              </span>
            )}
        </form>
    </div>
  )
}

export default Login