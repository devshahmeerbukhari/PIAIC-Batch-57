import React from 'react'
import Link from 'next/link'

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <div className='bg-blue-500 w-100 flex gap-10 p-5'>
            <Link href='/settingss'>Main Settings</Link>
            <Link href='/settings1'>Settings 1</Link>
            <Link href='/settings2'>Settings 2</Link>
            <Link href='/settings3'>Settings 3</Link>
        </div>
        <div>{children}</div>
    </div>
    
  )
}

export default Layout