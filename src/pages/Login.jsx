import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  return (
    // Hero section set to 60% of the viewport height
    <div className="flex items-center mt-5 justify-center h-[60vh] bg-gray-100">
      <div className="w-full max-w-md bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border-2 border-indigo-300 mx-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Login to Your Account
        </h2>
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="mt-2 block w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute right-3 top-10 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <Link
              to="/signup"
              className="text-sm sm:text-lg text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Create Account
            </Link>
          </div>
          <div className="mt-2">
            <button
              onClick={() => nav("/dashboard")}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
