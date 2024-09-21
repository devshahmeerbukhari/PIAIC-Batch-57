import React from 'react'

interface Comments{
    postId: number,
    id: number, 
    name: string,
    email: string,
    body: string
}
function Comments({commentsData}:{
    commentsData: Comments
}) {
  return (
    <div className="bg-gray-100 p-8">
        <div className="max-full mx-auto">
            {/* Commenter Information */}
            <div className="bg-white shadow-md rounded-lg my-4 p-6">
                <div className="flex items-center mb-4">
                    <div className="mr-4">
                        <img
                        className="w-10 h-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${commentsData.name}&background=random`}
                        alt={commentsData.name}
                    />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">${commentsData.email}</p>
                    </div>
                </div>
            {/* Comment Body */}
            <p className="text-gray-700 text-base">{commentsData.body}</p>
            </div>
        </div>
    </div>

  )
}

export default Comments
