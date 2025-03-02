// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl shadow-2xl">
      <div className="w-[500px] bg-white p-6 md:p-8 rounded-lg shadow-lg">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700 shadow-xl">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 shadow-xl">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700 shadow-xl">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-base font-medium text-gray-700 shadow-xl ">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              required
              placeholder="Confirm your password"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-lg text-gray-700">Already have an account? </span>
          <Link to="/login" className="text-lg text-indigo-600 hover:text-indigo-500 font-medium">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
