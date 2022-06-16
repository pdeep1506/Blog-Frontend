import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

// import treeImg from '../../../Images/tree.jpg'
import moment from 'moment'
const Post = ({post}) => {
  // console.log(post)
  return (
    <div className='post'>
    {
      post.photo && (

        <img className='postImg' src={post.photo} alt='postImage'></img>
      )
    }
      <div className='postInfo'>
        <div className='postCategories'>
        
          { post.categories &&(
            post.categories.map((i,key)=>{
              return <span className='postCat' key={key}>{i} </span>
            }))
          }
          <Link to={`/post/${post.nid}`} className='link'>
          <div className='postTitle'>{post.title}</div>
          </Link>
          <hr></hr>
          <span className='postDate'>{moment(post.createdAt).fromNow()}</span>
          <hr></hr>
          <p className='postDesc'>{post.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Post