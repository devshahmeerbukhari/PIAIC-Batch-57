import React from 'react'
import Link from 'next/link'

function TopNav() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-500">Home</Link>
          <Link href="/Blog" className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-500">Post</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 focus:outline-none">
            {/* Mobile Menu Button */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNav
