import React,{useContext,useState} from 'react'
import './SinglePost.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import treeimg from '../../../Images/tree.jpg'
import moment from 'moment';
import { Link } from 'react-router-dom';
import {Context} from '../../../context/Context'
import axios from 'axios'
const SinglePost = ({post}) => {
  const [updatemode, setupdatemode] = useState(false)
  const {user} = useContext(Context)
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [postId,setPostId] = useState('');

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
  const updateButton = async()=>{
    // console.log(title,desc,postId)
    try{
      await axios.patch(`/api/post/${postId}`,{
        username: user.username,title:title,desc:desc
      })
      setupdatemode(false)
      setPostId(null)
    }
    catch(err){

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
        {
          updatemode ? <input type='text' className='singlePostTitleInput' placeholder={post[0].title}  onChange={(e)=>settitle(e.target.value)}></input>:(<div>
            
            <h1 className='singlePostTitle'>{post[0].title}</h1>
            <div className='singlePostIcon'>
                <EditIcon className='singlePostIcons' onClick={()=>{ setupdatemode(true); setPostId(post[0].nid)}}></EditIcon>
                <DeleteIcon className='singlePostIcons' onClick={()=> deletePost(post[0].nid)}></DeleteIcon>
            </div>
            </div>)
        }
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>
                <Link to={`/?username=${post[0].username}`} className='link'>
                {post[0].username}
                </Link>
                </b>
                </span>

                <span className='singlePostTime'>{moment(post[0].createdAt).fromNow()}</span>
            </div>
            {
              updatemode ? <textarea className='singlePostDescInput' onChange={(e)=> setdesc(e.target.value)} placeholder={post[0].desc} rows='5' cols='85'></textarea>:
              <div>
              
              <div>
              <p className='singlePostDesc'>{
                post[0].desc
              }
              </p>
              </div>
              </div>
            }
            {updatemode && (
              <button className="singlePostButton" onClick={()=>updateButton()}>
                Update
              </button>
            )}
            </div>
    
    
    
    </div>
  )
}

export default SinglePost