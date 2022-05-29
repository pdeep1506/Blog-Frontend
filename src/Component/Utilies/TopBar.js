import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './TopBar.css'
const TopBar = () => {
  return (
    <div className='top'>
        <div className='topleft'>
        
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <GoogleIcon></GoogleIcon>
        <InstagramIcon></InstagramIcon>
        </div>
        <div className='topcenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topright'>
            <div className='accountIcon'>
            <AccountCircleIcon></AccountCircleIcon>
            </div>
            <div className='searchIcon'>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    
    </div>
  )
}

export default TopBar