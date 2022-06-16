import React from 'react'
import './Posts.css'
import Post from './Post'
const Posts = ({posts}) => {
  return (
    <div className='posts'>
    {
      // console.log('posts',posts)
      posts.map((item,key)=>{
        return <Post post={item} key={key}></Post>
      })
      // posts.map((item)=>{
      //   console.log('item',item)
      //  return <Post Post={item}></Post>
        
      // })

    }
   

    
    </div>
  )
}

export default Posts