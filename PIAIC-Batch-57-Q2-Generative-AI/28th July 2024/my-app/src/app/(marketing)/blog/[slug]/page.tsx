import React from 'react'
import { Blogs } from '@/constants'

const findBlogDetails = (id: number) => {
  return Blogs.find((item) => {
    return item.id == id
  })
}

type paramsDataType = {
  params:{
    slug: string
  }
}
function BlogDetails({ params }: paramsDataType) {
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