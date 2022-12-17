import React, { useEffect, useState } from 'react'
import Card from '../../card'
import Header from '../Header/Header'
import './PostView.css'

const PostView=()=> {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch("https://instclonefrontend.onrender.com/posts").then((res)=>res.json()).then((data)=>{
            setPosts(data)
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    }, [])
  return (
    <div className='PostView'>
        <Header/>
        <div>
            {posts.map((post, i)=> {
                return(
                    <Card post={post} key={i}/>
                )
            })}
        </div>
    </div>
  )
}

export default PostView