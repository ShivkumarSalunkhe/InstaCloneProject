import React, { useState } from 'react'
import Header from '../Header/Header'
import "./Form.css"
import axios from 'axios';

function Form() {
    const [input, setInput]= useState({
        PostImage:"",
        name:"",
        location:"",
        Description:""

    })
    const handleChange=(event)=>{
        const {name, value} = event.target
        setInput(prvInput=>{
            return{
                ...prvInput,
                [name]: value

            }
        })
    }

    const handleClick=(event)=>{
        event.preventDefault()
        const newPost={
            PostImage:input.PostImage,
            name:input.name,
            location:input.location,
            Description:input.Description
        }
      
        axios.post("/create", newPost)
          console.log(newPost)
    }

  return ( 
    <>
    <Header/>
    <form className='Form'>
    
    <div>
        <input onChange={handleChange} type="file" name="PostImage" placeholder="Upload File Here"/>
    </div>
    <div className='name-location'>
    
        <input onChange={handleChange} value={input.name} type="text" name="name" placeholder="Name" />
    
        <input onChange={handleChange} value={input.location} type="text" name="location" placeholder="location"/>
    </div>
        <textarea onChange={handleChange} value={input.Description} type="text" name="Description" placeholder="Describe yourself here" />
    <div>
        <button onClick={handleClick}>Upload</button>
    </div>
    
    </form>
    </>
    
    
  )
}

export default Form