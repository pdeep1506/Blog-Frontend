import React,{useContext} from 'react'
import './SinglePost.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import treeimg from '../../../Images/tree.jpg'
import moment from 'moment';
import { Link } from 'react-router-dom';
import {Context} from '../../../context/Context'
import axios from 'axios'
const SinglePost = ({post}) => {
  // console.log('post',post)
  const {user} = useContext(Context)
  const deletePost = async(id)=>{
    try{
      // console.log(id,user.username)
        await axios.delete(`/api/post/${id}`,{ data:{ username: user.username}})
        window.location.replace('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
        {
          post[0].photo && (

            <img src={post[0].photo} className='singlePostImg' alt='post img'></img>
          )
        }
            <h1 className='singlePostTitle'>{post[0].title}</h1>
            <div className='singlePostIcon'>
                <EditIcon className='singlePostIcons'></EditIcon>
                <DeleteIcon className='singlePostIcons' onClick={()=> deletePost(post[0].nid)}></DeleteIcon>
            </div>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>
                <Link to={`/?username=${post[0].username}`} className='link'>
                {post[0].username}
                </Link>
                </b>
                </span>

                <span className='singlePostTime'>{moment(post[0].createdAt).fromNow()}</span>
            </div>
            <div>
            <p className='singlePostDesc'>{
              post[0].desc
            }
            </p>
            </div>
            </div>
    
    
    
    </div>
  )
}

export default SinglePost