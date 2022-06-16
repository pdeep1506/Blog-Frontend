import React,{useState,useEffect} from 'react'
import './Register.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { display } from '@mui/system'

const Register = () => {
  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [errorText,seterrorText] = useState();
  const onSubmitButton = async(e)=>{
    e.preventDefault()
    const data = {
      username:username,email:email,password:password
    }
    // console.log(data)
    await axios.post('/api/auth/register',data).then((res)=>{
      // console.log(res)
      window.location.replace('/login')
    }).catch((err)=>{
      console.log('err',err.response)
      if(err.response.status ===401){
          seterrorText(err.response.data)
      }

    })
  }
  return (
    <div className='register'>
        <label className='registerLable'>Register</label>
        <label className='registerLable' style={{fontSize:15,color:'black'}}>{errorText}</label>
        <form className='registerForm' onSubmit={(e)=>onSubmitButton(e)}>
            <label>User Name</label>
            <input type='text' placeholder='User Name' name='username' onChange={(e)=>{setusername(e.target.value);seterrorText('')}}></input>
            <label>Email</label>
            <input type='email' placeholder='Email' name='email' onChange={(e)=>{setemail(e.target.value);seterrorText('')}}></input>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' onChange={(e)=>setpassword(e.target.value)}></input>

            <button className='registerButton' type='submit'>Register</button>
            <button className='registerButton'><Link to='/login' style={{textDecoration:'none',color:'inherit'}}>
            Login
            </Link></button>
        </form>
    </div>
  )
}

export default Register