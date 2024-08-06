import React, { Children } from 'react'
import Link from 'next/link'

function Settings({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className='bg-blue-400 flex gap-10 p-7 mt-10 mb-10'>
        <Link href='/mainsettings'>Main Settings</Link>
        <Link href='/settings1'>Settings1</Link>
        <Link href='/settings2'>Settings2</Link>
        <Link href='/settings3'>Settings3</Link>
        <Link href='/settings4'>Settings4</Link>
        <Link href='/settings5'>Settings5</Link>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default Settings
