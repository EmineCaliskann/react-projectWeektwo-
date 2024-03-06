import React from 'react'
import { posts } from '../assets/data/data';
import { Link, useParams } from 'react-router-dom';
import '../assets/styles/blogDetay.scss'

const BlogDetay = () => {
    const params = useParams()//pathdeki parametreyi obje olarak yakalar

    //console.log(params);
    const bID=params.blogID;
    //console.log(bID)
    return (
      <div className='blog-detay'>
        <div className='esb'>
        <img src={posts[bID-1].url} alt="photo" />
        <span>{posts[bID-1].date}</span>
        </div>
        <h3>{posts[bID-1].title}</h3>
        <p>{posts[bID-1].content}</p>
      </div>
    );
  }
  
  export default BlogDetay;
