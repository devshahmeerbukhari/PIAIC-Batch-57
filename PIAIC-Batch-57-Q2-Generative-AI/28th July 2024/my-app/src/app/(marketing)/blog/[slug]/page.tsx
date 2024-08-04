import React from 'react'
import { Blogs } from '@/constants'

const findBlogDetails = (id: number) => {
  return Blogs.find((item) => {
    return item.id == id
  })
}
function BlogDetails({ params }:{params:{slug:string}}) {
    const blog = findBlogDetails(Number(params.slug))
  return (
    <div>
        Blog Detail
        <h1>{`Title: ${blog?.title}`}</h1>
        <p>{`Title: ${blog?.author}`}</p>
        <p>{`Title: ${blog?.content}`}</p>
    </div>
  )
}

export default BlogDetails
