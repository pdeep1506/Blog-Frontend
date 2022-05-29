import React from 'react'
import SideBar from '../../Utilies/SideBar'
import './Settings.css'
import treeImg from '../../../Images/tree.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Settings = () => {
  return (
    
    <div className='settings'>
    <div className='settingsWrapper'>
    <div className='settingsUpdateForm'>
    <div className='settingsTitle'>
    <span className='settingsUpdateTitle'>Update Your Account</span>
    <span className='settingsDeleteTitle'>Delete Account</span>
    </div>

    </div>
    <form className='settingsForm'>
    <label>Profile Picture</label>
          <div className='settingsPP'>
          <img alt='profile Pic' src={treeImg}></img>
            <label htmlFor='fileInput'>
            <AccountCircleIcon className='settingsPPIcon'></AccountCircleIcon>
            </label>
            <input type='file' id='fileInput' style={{display:'none'}}></input>
          </div>
          <lable>Username</lable>
          <input type='text' placeholder='messi'></input>
          <lable>Email</lable>
          <input type='email' placeholder='messi@xyz.com'></input>
          <lable>Password</lable>
          <input type='password' placeholder='Password'></input>
          <button className='settingsButton'>Update</button>
          </form>
          </div>
          <SideBar></SideBar>
          
          
          </div>
          )
          
}

export default Settings