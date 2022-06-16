import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../../Utilies/SideBar'
import Home from '../home/Home'
import SinglePost from '../SinglePost/SinglePost'
import './Single.css'
const Single = () => {
  const {id}= useParams();
  const [data,setData] = useState();
  console.log(id)

  const fetchPostData = async()=>{
    await axios.get(`/api/post/${id}`).then((res)=>{
      // console.log(res)
      setData(res.data)
    }).catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    fetchPostData()
  },[]);
  if(!data){
    return <div></div>
  }
  return (
    <div className='single'>
    
    <SinglePost post={data}></SinglePost>
    <SideBar></SideBar> 
    </div>
  )
}

export default Single