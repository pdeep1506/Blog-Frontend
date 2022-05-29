import React from 'react'
import './SinglePost.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import treeimg from '../../../Images/tree.jpg'
const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img src={treeimg} className='singlePostImg' alt='post img'></img>
            <h1 className='singlePostTitle'>Lorem2 djfkb   kbv bjksv </h1>
            <div className='singlePostIcon'>
                <EditIcon className='singlePostIcons'></EditIcon>
                <DeleteIcon className='singlePostIcons'></DeleteIcon>
            </div>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Messi</b></span>
                <span className='singlePostTime'>1 hr ago</span>
            </div>
            <div>
            <p className='singlePostDesc'> fbdkbgduh  bugr erg bj  grerrshbtrbrh trh td thtfr erg 
            Lectus ornare nunc, commodo, cum vivamus tincidunt neque lacus dolor. Libero nostra malesuada scelerisque sem donec, vivamus aenean penatibus duis rhoncus per duis blandit parturient sit purus iaculis imperdiet cum lacinia. Lectus nullam vulputate nullam per curae; interdum semper purus dis, parturient. Sollicitudin erat.
            
            Donec lectus. Interdum per sodales. Diam erat erat tortor neque volutpat. At. Interdum lectus habitant lacus risus dapibus. Adipiscing suscipit viverra posuere felis lacinia fusce mauris iaculis habitasse nibh penatibus, phasellus eu euismod viverra hymenaeos scelerisque. Montes vitae tortor laoreet cursus.
            
            Interdum amet vulputate curabitur Amet donec diam ullamcorper lorem arcu orci leo auctor per nostra.
            </p>
            </div>
            </div>
    
    
    
    </div>
  )
}

export default SinglePost