import React from 'react'
import './Write.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
const Write = () => {
  return (
    <div className='write'>
    <img className='writeImg' alt='File'></img>
        <form className='writeForm'>
            <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
                <UploadFileIcon className='writeIcon'></UploadFileIcon>
            </label>
                <input type='file' id='fileInput' style={{display:'none'}}></input>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell Your Story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    
    </div>
  )
}

export default Write