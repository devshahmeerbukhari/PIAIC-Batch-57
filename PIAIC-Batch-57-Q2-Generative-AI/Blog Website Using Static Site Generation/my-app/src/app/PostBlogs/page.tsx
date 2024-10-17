import React from 'react'

type Post = {
    title: string,
    body: string
}
function PostBlog({title, body}:Post) {
  return (
    <div className='mt-10 w-auto w-[90%]'>
        <img src="https://i.pinimg.com/originals/1d/4d/81/1d4d81ba7dca6b2cfac9ab6b01b31764.jpg" alt="Mola ALi" />
        <h1 className='mt-3'><span className='font-bold'>Title:</span> {title}</h1>
        <p className='mr-5'><span className='font-bold'>Body:</span> {body}</p>
    </div>
  )
}

export default PostBlog
