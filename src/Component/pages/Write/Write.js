import React,{useState,useContext} from 'react'
import './Write.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Context } from '../../../context/Context';
import axios from 'axios';
const Write = () => {
    const {user} = useContext(Context)
    
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [file, setfile] = useState(null)
    const onSumbitEvent = async(e)=>{
        e.preventDefault();
        console.log(title,desc,file)
        const newPost = {
            title:title,
            desc:desc,
            username:user.username
        }
        if(file){
            // API For file upload
        }
        try{

            const resp = await axios.post('/api/post',newPost)
            window.location.replace('/')
        }
        catch(err){
        }
    }
  return (
    <div className='write'>
    <img className='writeImg' alt='File'></img>
        <form className='writeForm' onSubmit={(e)=> onSumbitEvent(e)}>
            <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <UploadFileIcon className='writeIcon'></UploadFileIcon>
            </label>
                <input type='file' id='fileInput' style={{display:'none'}} onChange={(e)=>{setfile(e.target.files[0])}}></input>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={(e)=> settitle(e.target.value)}></input>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell Your Story...' type='text' className='writeInput writeText' onChange={(e)=>setdesc(e.target.value)}></textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    
    </div>
  )
}

export default Write