'use client'

import React, { useEffect, useState } from 'react'
import PostCards from '@/components/PostCards/PostCards'

function Blog() {

    const [postData, setPostData] = useState([])

    useEffect(()=>{
        getAllBlog()
    }, [])
    const getAllBlog = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPostData(data)
    }
  return (
    <div className='flex flex-wrap justify-center'>
        {postData.map((post:any)=> {
            return (
                <PostCards key={post.id} Title={post.title} Body = {post.body}/>
            )
        })}
    </div>
  )
}

export default Blog
