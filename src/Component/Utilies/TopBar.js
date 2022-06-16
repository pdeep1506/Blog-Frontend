import React, { useContext } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './TopBar.css'
import { Context } from '../../context/Context';

const TopBar = () => {
    const {user,dispatch} = useContext(Context);
    const handleLogout = ()=>{
        dispatch({type:'LOGOUT'})
    }
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
                <li className='topListItem'>
                <Link to='/' style={{textDecoration:'none',color:'inherit'}}>HOME</Link></li>
                <li className='topListItem'><Link to='/about' style={{textDecoration:'none',color:'inherit'}}>ABOUT</Link></li>
                <li className='topListItem'><Link to='' style={{textDecoration:'none',color:'inherit'}}>CONTACT</Link></li>
                <li className='topListItem'><Link to='/write' style={{textDecoration:'none',color:'inherit'}}>WRITE</Link></li>
                
                {
                    !user?
                    <>
                    <li className='topListItem'><Link to='/register' style={{textDecoration:'none',color:'inherit'}}>REGISTER</Link></li><li className='topListItem'><Link to='/login' style={{textDecoration:'none',color:'inherit'}}>LOGIN</Link></li>
                    </>
                    
                    :<>
                    
                    <li className='topListItem'><Link to='' style={{textDecoration:'none',color:'inherit'}} onClick={()=>handleLogout()}>LOGOUT</Link></li>
                    </>
                }
              
            </ul>
                </div>
        <div className='topright'>
            <div className='accountIcon'>
           { user && <AccountCircleIcon></AccountCircleIcon>}
            </div>
            <div className='searchIcon'>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    
    </div>
  )
}

export default TopBar