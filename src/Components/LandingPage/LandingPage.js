import React from 'react'
import { Link } from 'react-router-dom'
import "../LandingPage/LandingPage.css"
function LandingPage() {
  return (
    <>
      <div className='Landing-Page'>
        <div className='Landing-image'>
          <img src={require("../../images/lens-1418954@2x.png")} alt="df"/>
        </div>
        <div className='Landing-Actions'>
            <div>
            <h1>10x Team</h1>
            <Link to="/PostView">
              <button>Enter</button>
            </Link>
            </div>         
        </div>
      </div>
    </>
    
  )
}

export default LandingPage