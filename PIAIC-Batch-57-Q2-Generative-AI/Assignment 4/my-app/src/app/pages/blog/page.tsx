'use client'
import React from 'react'
import Link from 'next/link'
import { Blogs } from '@/constants'
import { useRouter } from 'next/navigation'

function blog() {
  const router = useRouter();
  return (
    <div className='flex gap-10 cursor-pointer'>
      This is the Blog Page
      <div onClick={()=> router.push('/pages/blog/blog1')}>Blog 1</div>
      <div onClick={()=> router.push('/pages/blog/blog2')}>Blog 2</div>
      <div onClick={()=> router.push('/pages/blog/blog3')}>Blog 3</div>
      <div onClick={()=> router.push('/pages/blog/blog4')}>Blog 4</div>
      <div onClick={()=> router.push('/pages/blog/blog5')}>Blog 5</div>
      <div onClick={()=> router.push('/pages/blog/blog6')}>Blog 6</div>
      <div onClick={()=> router.push('/pages/blog/blog7')}>Blog 7</div>
      <div onClick={()=> router.push('/pages/blog/blog8')}>Blog 8</div>
      <div onClick={()=> router.push('/pages/blog/blog9')}>Blog 9</div>
      <div onClick={()=> router.push('/pages/blog/blog10')}>Blog 10</div>
    </div>
  )
}

export default blog