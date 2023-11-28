import React from 'react';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
  return (

    <div className="flex justify-center items-center min-h-screen bg-orange-100">
      

      <div className="w-1/4 bg-white p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center text-black-700">
          Sign up
        </h1>
        <form className="mt-6" action="https://beout-backend.onrender.com/register" method="post">
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              name="firstName"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            
            <button type='submit'  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
