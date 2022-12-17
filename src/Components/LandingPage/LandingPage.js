import React from 'react'
import { Link } from 'react-router-dom'
import "../LandingPage/LandingPage.css"
function LandingPage() {
  return (
    <div className='BackGroung-Img'>
      <div className='Landing-Page'>
        <div className='Landing-image'>
          <img src={require("../../images/lens-1418954@2x.png")} alt="df"/>
        </div>
       
        <div className='Landing-Actions'>
        
            <div>
            <div className='insta'>
            <img src={require('../../images/Instagram-Icon.png')} alt='Logo'/>
            <span className='insta-2'>
            <img src={require('../../images/NL0hPV-L09m.png')} alt='Logo'/>
            </span>
        </div>
            <h1>10x Team</h1>
            <Link to="/PostView">
            <div>
              <button>Enter</button>
            </div>
            </Link>
            </div>         
        </div>
      </div>
    </div>
    
  )
}

export default LandingPage