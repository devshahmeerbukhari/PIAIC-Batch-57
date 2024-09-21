'use client'

import React, { useEffect, useState } from 'react'
import PostCards from '@/components/PostCards/PostCards'
import Link from 'next/link'

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
                <Link href={`/Blog/${post.id}`}>
                    <PostCards key={post.id} Title={post.title} Body = {post.body}/>
                </Link>
            )
        })}
    </div>
  )
}

export default Blog
