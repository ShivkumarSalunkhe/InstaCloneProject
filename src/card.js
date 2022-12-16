import React from 'react'
import '../src/card.css'

function Card({ post }) {
  return (

    <>
      <section className='card'>
        <section className='card-header'>
          <div>
            <div className='card-header__name'>{post.name}</div>
            <div className='card-header__place'>{post.location}</div>
          </div>
          <span>
            <img src={require("../src/images/more_icon@2x.png")} alt="df" />
          </span>
        </section>
        <section className='card-img'>
          <img src={post.PostImage} alt="kk" />
        </section>

        <section className='card-actions'>
          <span className='shiv'>
            <img src={require("../src/images/heart@2x.png")} alt="df" />
          </span>
          <span className='shiv'>
            <img src={require("../src/images/share@2x.png")} alt="df" />
          </span>
          <span id='date'>
            {post.date}
          </span>
        </section><br />

        <section className='likes'>
          {post.likes} likes
        </section>
        <section className='description'>
          {post.Description}
        </section>
      </section>
    </>
  )
}

export default Card