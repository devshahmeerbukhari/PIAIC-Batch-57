'use client'
//i am using client side component because, we can not use router hook in server side component, by default our files is of server cide component

import { useRouter } from 'next/navigation'
import React from 'react'

function NamePage() {
    const router = useRouter();
  return (
    <>
        <div>
            Hello from name Page, following button is implementing the router hook
        </div>
        <button className='bg-slate-300 p-1 pl-2 pr-2 rounded-full hover:bg-black hover:text-white' type='button' onClick={()=> router.push('/name/address')}>
            Get Address
        </button>
     </>
  )
}

export default NamePage
