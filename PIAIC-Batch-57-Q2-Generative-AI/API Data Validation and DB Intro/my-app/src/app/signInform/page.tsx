'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { LoginSchema } from '@/lib/validation/schema';


type UserLogin = {
    email: string,
    password: string,
}

function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState<any>({})


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const validation = LoginSchema.safeParse(formData);
        if(!validation.success){
            const fieldErrors = validation.error.formErrors.fieldErrors;
            setError(fieldErrors);
        } else{

            const userLogin: UserLogin = {
                email: formData.email,
                password: formData.password,
            }
            const requestBackend = await fetch("http://localhost:3000/api/loginAPI", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(userLogin)
            })
            console.log(requestBackend)
            setError({});
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-gray-300 rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-700">Login</h1>
        <div className="w-full mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <div className='text-red-600 h-5'>{error.email}</div> 
        </div>
        <div className="w-full mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            value={formData.password}
            className="w-full px-4 py-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <div className='text-red-600 h-5'>{error.password}</div>
        </div>
        <p className="mb-4 text-sm text-gray-600">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Register</a></p>
        <Button onClick={handleSubmit} className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Sign In</Button>
      </div>
    </div>
  );
}

export default SignInForm;
