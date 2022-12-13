import React from 'react'
import './Header.css';
function Header() {
  return (
    <>
        <nav className='header'>
            <section className='logo'>
            <img src={require('../../images/icon@2x.png')} alt='Logo'/>
            </section>
            <section className='Text'>
               <h1>Instaclone</h1>
            </section>

            <section className='camera-icon'>
                <img src={require('../../images/camera@2x.png')} alt='Camera'/>
            </section>
        </nav>
    </>
  )
}

export default Header