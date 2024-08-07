import React from 'react'
import { BlogsDetails } from '@/constants'


const findDetails = (id: number) => {
    return BlogsDetails.find((item)=>{
        return item.id == id
    })
}
function Blogs({params}: {params: {slug: string}}) {
    const Blog = findDetails(Number(params.slug))
  return (
    <div className='bg-red-100 mt-10 p-3'>
        <h1>{`Author: ${Blog?.Author}`}</h1>
        <p>{`Title: ${Blog?.Title}`}</p>
        <p>{`Content: ${Blog?.Content}`}</p>
    </div>
  )
}

export default Blogs
