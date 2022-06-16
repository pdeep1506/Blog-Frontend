import React,{useState,useContext} from 'react'
import SideBar from '../../Utilies/SideBar'
import './Settings.css'
import treeImg from '../../../Images/tree.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Context } from '../../../context/Context';
import axios from 'axios';
const Settings = () => {
  const {user,dispatch} = useContext(Context)
  const [username, setusername] = useState(user.username)
  const [email, setemail] = useState(user.email)
  const [password, setpassword] = useState(user.password)
  const [success, setsuccess] = useState(false)
  const updateUser = async(e)=>{
    e.preventDefault();
    // console.log(username,email,password)
    try{

      const updateUser =await axios.patch(`/api/user/${user._id}`,{userId:user._id,username:username,email:email,password:password})
      dispatch({type:'UPDATE_SUCCESS',payload:updateUser.data})
      setsuccess(true)
      window.location.replace('/')
    }
    catch(err){
      console.log(err)
      dispatch({type:'UPDATE_FAILURE'})
    }
  }
  return (
    
    <div className='settings'>
    <div className='settingsWrapper'>
    <div className='settingsUpdateForm'>
    <div className='settingsTitle'>
    <span className='settingsUpdateTitle'>Update Your Account</span>
   
    </div>

    </div>
    <form className='settingsForm' onSubmit={(e)=> updateUser(e)}>
    <label>Profile Picture</label>
          <div className='settingsPP'>
          <img alt='profile Pic' src={treeImg}></img>
            <label htmlFor='fileInput'>
            <AccountCircleIcon className='settingsPPIcon'></AccountCircleIcon>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}></input>
          </div>
          <lable>Username</lable>
          <input type='text' placeholder={user.username} onChange={(e)=> setusername(e.target.value)}></input>
          <lable>Email</lable>
          <input type='email' placeholder={user.email} onChange={(e)=> setemail(e.target.value)}></input>
          <lable>Password</lable>
          <input type='password' placeholder='Password' onChange={(e)=> setpassword(e.target.value)}></input>
          <button className='settingsButton' type='submit'>Update</button>

          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
          </form>
          </div>
          <SideBar></SideBar>
          
          
          </div>
          )
          
}

export default Settings