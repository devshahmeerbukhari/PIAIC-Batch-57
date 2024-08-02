import React from 'react'

function BlogDetails({ params }:{params:{slug:string}}) {
    console.log("Params: ", params)
  return (
    <div>
        blog details
    </div>
  )
}

export default BlogDetails
