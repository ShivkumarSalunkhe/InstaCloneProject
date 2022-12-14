import React from 'react'
import Header from '../Header/Header'
import "./Form.css"
function Form() {
  return ( 
    <>
    <Header/>
    <form className='Form'>
    
    <div>
        <input type="file" name="name" placeholder="Describe yourself here"/>
    </div>
    <div className='name-location'>
    
        <input type="text" name="name" placeholder="Name" />
    
        <input type="text" name="location" placeholder="location"/>
    </div>
        <textarea type="text" placeholder="Describe yourself here" />
    <div>
        <button>Upload</button>
    </div>
    
    </form>
    </>
    
    
  )
}

export default Form