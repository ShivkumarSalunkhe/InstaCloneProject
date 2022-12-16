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

    const config ={
      headers: {
        "content-type": "multipart/form-data"
      }
    }
    // const handleChange=(event)=>{
    //     const {name, value} = event.target
    //     setInput(prvInput=>{
    //         return{
    //             ...prvInput,
    //             [name]: value

    //         }
    //     })
    //   }


    const handleClick=(event)=>{
        event.preventDefault()
        const newPost={
            PostImage:input.PostImage,
            name:input.name,
            location:input.location,
            Description:input.Description
        }
      
        axios.post("/create", newPost, config)
          console.log(newPost)
          
    }
    
  return ( 
    <>
    <Header/>
    <form className='Form'>
    
    <div>
        <input onChange={(event)=>{setInput({...input, PostImage: event.target.files[0]})}} type="file" name="PostImage" placeholder="Upload File Here"/>
    </div>
    <div className='name-location'>
    
        <input onChange={(event)=>{setInput({...input, name: event.target.value})}} type="text" name="name" placeholder="Name" />
    
        <input onChange={(event)=>{setInput({...input, location: event.target.value})}} type="text" name="location" placeholder="location"/>
    </div>
        <textarea onChange={(event)=>{setInput({...input, Description: event.target.value})}} type="text" name="Description" placeholder="Describe yourself here" />
    <div>
        <button onClick={handleClick}>Upload</button>
    </div>
    
    </form>
    </>
    
    
  )
}

export default Form