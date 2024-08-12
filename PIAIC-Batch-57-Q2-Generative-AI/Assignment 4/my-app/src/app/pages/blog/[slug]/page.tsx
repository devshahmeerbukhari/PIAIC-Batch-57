import React from 'react'

function DynamicBlogPage({params}: {params:{slug: string}}) {
  return (
    <div>
      This is the dunamic page of {params.slug}, and this is routed using useRoute Hook
    </div>
  )
}

export default DynamicBlogPage
