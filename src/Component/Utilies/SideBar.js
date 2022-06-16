import React,{useState,useEffect} from 'react'
import './SideBar.css'
import aboutimg from '../../Images/aboutme.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

import axios from 'axios'
import { Link } from 'react-router-dom';
const SideBar = () => {
  const [categories,setCategories]  = useState([]);
  const fetchCategories = async()=>{
    await axios.get('/api/category').then((res)=>{
      // console.log(res)
      setCategories(res.data)
    })
  }
  
  useEffect(()=>{
    fetchCategories()
  },[])
  if(!categories){
    return <div></div>
  }
  return (
    <div className='slidebar'>
      <div className='slidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={aboutimg} alt='About' className='sidebarImg' width='250'></img>

        <p className='sidebarP'>With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements</p>
      </div>
      <div className='sidebarItem'>
      </div>
      <span className='sidebarTitle'>CATEGORIES
      </span>
      <ul className='sidebarList'>
        
       
        {
          categories.map((item,key)=>{
            // console.log(item.name)
            return <>
            <Link className='link'  to={`?category=${item.name}`}>
            <li className='sidebarListItem' key={key}>{item.name}</li>
            </Link>
            </>
          })
        }

      </ul>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='sidebarSocial'>
      
      <FacebookIcon className='sidebarIcon'></FacebookIcon>
      <TwitterIcon className='sidebarIcon'></TwitterIcon>
      <GoogleIcon className='sidebarIcon'></GoogleIcon>
      <InstagramIcon className='sidebarIcon'></InstagramIcon>
      </div>

    </div>
  )
}

export default SideBar