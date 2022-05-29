import React from 'react'
import SideBar from '../../Utilies/SideBar'
import Home from '../home/Home'
import SinglePost from '../SinglePost/SinglePost'
import './Single.css'
const Single = () => {
  return (
    <div className='single'>
    
    <SinglePost></SinglePost>
    <SideBar></SideBar> 
    </div>
  )
}

export default Single