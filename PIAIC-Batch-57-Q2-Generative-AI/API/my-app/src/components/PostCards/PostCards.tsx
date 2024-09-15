import React from 'react'

function PostCards({Title, Body}: {
    Title: string
    Body: string
}) {
  return (
    <div className='flex justify-center items-center h-[50vh]'>
        <div className="m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="http://via.placeholder.com/400x200" alt="This is an image" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Body}</p>
            </div>
        </div>
    </div>
  )
}

export default PostCards;