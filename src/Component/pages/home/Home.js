import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../../Utilies/Header'
import Posts from '../Post/Posts'
import SlideBar from '../../Utilies/SideBar'
import './Home.css'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const [posts,setPosts] = useState()
  const { search } = useLocation();
  // console.log(search)
  const fetchPost = async()=>{
    await axios.get(`/api/post/${search}`).then((res)=>{
      // console.log(res)
      setPosts(res.data)
    }).catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    fetchPost()
  },[search])
  if(!posts){
    return <div></div>
  }
  return (
    <>
    <Header></Header>
    
    <div className='home'>
        <Posts posts={posts}></Posts>
        <SlideBar></SlideBar>
    </div>
    </>
  )
}

export default Home