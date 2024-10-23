'use client'
import React, { useState } from 'react';
import { z } from 'zod';
import userSchema from '../schemas/userSchema';

function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [errors, setErrors] = useState<any>({});
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validation = userSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = validation.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
    } else {
      setErrors({});
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="flex flex-col justify-center items-center min-h-[93vh]" onSubmit={handleSubmit}>
      <div className="bg-gray-200 flex flex-col items-center p-32 border rounded-3xl shadow-2xl">
        {/* Username Input */}
        <div className="mb-4">
          <label className="mr-5">Name:</label>
          <input
            className="p-1 border rounded-full border-black w-[300px] focus:outline-none focus:border-2 focus:border-green-300" // Fixed width added
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {/* Fixed height to keep error space consistent */}
          <div style={{ minHeight: '24px' }}>  
            {errors.username && <p style={{ color: 'red' }}>{errors.username[0]}</p>}
          </div>
        </div>

        {/* Email Input */}
        <div className="mt-5">
          <label className="mr-5">Email:</label>
          <input
            className="p-1 border rounded-full border-black w-[300px] focus:outline-none focus:border-2 focus:border-green-300" // Fixed width added
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* Fixed height to keep error space consistent */}
          <div style={{ minHeight: '24px' }}>  
            {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button className="mt-5 p-2 border rounded-full bg-green-400 w-[150px] hover:bg-black hover:text-white hover:shadow-2xl" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
