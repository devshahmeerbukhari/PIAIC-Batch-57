import React from 'react'
import Link from 'next/link'
import { BlogsDetails } from '@/constants'

function Blogs() {
    return(
        <div className='bg-red-200 flex gap-20 p-7 mt-10'>
            {BlogsDetails.map((item, index) => (
                <Link key={item.id} href={`/blogs/${item.id}`}>{`Blog${item.id}`}</Link>
            ))}
        </div>
    )
  /*return (
    <div className='bg-blue-200 p-7 flex gap-10 mt-10'>
      <Link href='\blogs\blogs1'>Blogs 1</Link>
      <Link href='\blogs\blogs2'>Blogs 2</Link>
      <Link href='\blogs\blogs3'>Blogs 3</Link>
      <Link href='\blogs\blogs4'>Blogs 4</Link>
      <Link href='\blogs\blogs5'>Blogs 5</Link>
    </div>
  )*/
}

export default Blogs
