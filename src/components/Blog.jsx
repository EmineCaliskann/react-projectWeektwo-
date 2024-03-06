import React from 'react'
import {posts} from '../assets/data/data'
import '../assets/styles/blog.scss'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog'>
    <h3>Blog Posts</h3>
    
      {
     posts.map(news=>
      <Link key={news.id} to={news.id}className='blog-card' > 
        <img  src={news.url} alt='photo' />
        <div className='blog-card-text'>
          <h4>{news.title}</h4>
          <span> {news.date}</span>

        </div>
        </Link>
        
        )
      }
      
       </div>
 
  )
}

export default Blog
