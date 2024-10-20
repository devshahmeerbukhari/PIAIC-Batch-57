'use client';

import { useState } from 'react';
import { z } from 'zod';
import { formSchema, FormSchemaType } from '../schemas/formSchema';

export default function FormComponent() {
  // State to store form data
  const [formData, setFormData] = useState<FormSchemaType>({
    name: '',
    email: '',
    age: 0,
  });

  // State to store validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form data using Zod
    const validation = formSchema.safeParse(formData);

    if (!validation.success) {
      const errorMessages = validation.error.format();
      setErrors({
        name: errorMessages.name?._errors[0] || '',
        email: errorMessages.email?._errors[0] || '',
        age: errorMessages.age?._errors[0] || '',
      });
    } else {
      // Clear errors and process the valid data
      setErrors({});
      console.log('Form submitted successfully!', validation.data);
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'age' ? Number(value) : value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.age && <p className="mt-2 text-sm text-red-600">{errors.age}</p>}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
