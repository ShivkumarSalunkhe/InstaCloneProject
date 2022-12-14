import React, { useEffect, useState } from 'react'
import Card from '../../card'
import Header from '../Header/Header'

const PostView=()=> {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3005/user").then((res)=>res.json()).then((data)=>{
            setPosts(data)
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    }, [])
  return (
    <>
        <Header/>
        <div>
            {posts.map((post, i)=> {
                return(
                    <Card post={post} key={i}/>
                )
            })}
        </div>
    </>
  )
}

export default PostView