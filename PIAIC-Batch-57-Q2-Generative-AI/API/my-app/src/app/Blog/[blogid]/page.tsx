'use client'
import React, { useEffect, useState } from 'react'
import Comments from '@/components/Comments/comments'


interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}
interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
function page({params}: any) {
    const [postData, setPostData] = useState<Post | null>(null)
    const [postComments, setPostComments] = useState<Comment[] | null>(null)


    useEffect(() => {
        getSpecificPost();
    }, [])

    const getSpecificPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}`)
        if(response.ok){
            const data = await response.json();
            setPostData(data);
            const responseComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}/comments`)
            const commentsData = await responseComment.json();
            setPostComments(commentsData)
            console.log(commentsData)
        }

    }
  return (
    <div className='w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6'>
        {/*Post Title*/}
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>{postData?.title || 'Loading...'}</h2>
        {/*Post body*/}
        <p className='text-gray-700 text-base mb-6'>{((postData?.id) || 'Loading...')}</p>
        <p className='text-gray-700 text-base mb-6'>{(postData || {}).body || 'Loading...'}</p>

        {/*Comments*/}
        {postComments?.map(comments => {
            return (
                <Comments key={comments.id} commentsData = {comments}/>
            )
        })}
    </div>
  )
}

export default page
