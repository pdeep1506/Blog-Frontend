import React from 'react'
import './Header.css'

// import TreeImg from '../../Images/tree.jpg'
import springImg from '../../Images/spring.jpg'
const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={springImg} alt='No img found'></img>
    
    </div>
  )
}

export default Header