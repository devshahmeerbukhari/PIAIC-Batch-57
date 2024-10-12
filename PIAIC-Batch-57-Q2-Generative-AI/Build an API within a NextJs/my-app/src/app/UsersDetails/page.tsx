'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import AddUser from '../AddUser/page'
import { User } from '../types/user'


function UserDetails() {
    const [userDetails, setUserDetails] = useState([])

    useEffect(()=>{
        getUserDetails()
    },[])
    
    const getUserDetails = async () => {
        const response = await fetch("http://localhost:3000/api/users");
        const userData = await response.json();
        setUserDetails(userData)
        //console.log("User Data in component: ", userData);
    }
  return (
    <>
        <AddUser/>
        <div className="flex justify-center mt-10">
            <div className="overflow-x-auto">
                {userDetails.length > 0 && ( // Conditionally render the table if userDetails is not empty
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {userDetails.map((user: User, index: number) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{user.name}</td>
                                    <td className="py-3 px-6 text-left">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {userDetails.length === 0 && (
                    <div className="text-center text-gray-500 mt-4">Loading data...</div>
                )}
            </div>
        </div>
    </>
  )
}

export default UserDetails
