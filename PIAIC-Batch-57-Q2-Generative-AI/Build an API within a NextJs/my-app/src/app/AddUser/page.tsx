'use client'
import React, { useState } from 'react'
import { User } from '../types/user';


function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async () =>{
        const userObject: User = {
            name: name,
            email: email
        }
        const requestBackend = await fetch("http://localhost:3000/api/users",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userObject)
        })
        console.log("Request Backend: ", requestBackend)
    }
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Add User</h1>
      <div className="flex justify-center mt-5">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-semibold text-gray-700">Name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              onChange={handleName}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold text-gray-700">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              onChange={handleEmail}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button 
              type="submit" 
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUser
