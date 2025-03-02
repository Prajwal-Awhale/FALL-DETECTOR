import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Signup successful!");
      // Perform signup logic here
    }
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100 rounded-2xl shadow-2xl">
      <div className="w-[500px] bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
              />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center">
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-base font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xl"
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-3 flex items-center">
                {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200 shadow-xl"
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
