'use client'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getPosts()
  },[])
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Data: ", data)
  }
  return (
    <>
      <div className="text-center p-5 bg-slate-400 font-bold">
        Static Site Generation with Next Js
      </div>
      
    </>
  );
}