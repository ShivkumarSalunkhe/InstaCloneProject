import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
 
  return (
    <>
        <nav className='header'>
            <section className='logo'>
            <img src={require('../../images/Instagram-Icon.png')} alt='Logo'/>
            </section>
            <section className='Text'>
            <img src={require('../../images/NL0hPV-L09m.png')} alt='Logo'/>
            </section>
           
            <section className='camera-icon'>
            <Link to="/PostView/Form">
                <img  src={require('../../images/1280px-Line-style-icons-camera.svg.png')} alt='Camera'/>
            </Link>
            </section>
            
            
        </nav>
    </>
  )
}

export default Header