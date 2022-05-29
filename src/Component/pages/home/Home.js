import React from 'react'

import Header from '../../Utilies/Header'
import Posts from '../Post/Posts'
import SlideBar from '../../Utilies/SideBar'
import './Home.css'
const Home = () => {
  return (
    <>
    <Header></Header>
    Home
    <div className='home'>
        <Posts></Posts>
        <SlideBar></SlideBar>
    </div>
    </>
  )
}

export default Home