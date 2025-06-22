import React from "react";

import ProfilePngMain from "../img/Profile-PNG_Main.png"
import { FaCamera } from "react-icons/fa";

const LogInToWebS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#feae00] to-[#ff5900]
                    flex flex-col items-center justify-center">

      {/* Main Container */}
      <div className="min-h-screen sm:min-h-[85vh] w-full max-w-md bg-white shadow-lg p-8 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-8 w-full flex flex-col items-center">
          <h1 className="text-[48px] font-[750] text-[#ff8000] mb-4 w-full">Pun Cafe</h1>
          <p style={{ fontFamily: "'Noto Sans Lao', sans-serif" }} className="text-[#c2c2c2] mt-[-20px]"> ປັນຄາເຟ່ ເປິດໃຫ້ບໍລິການແລ້ວ! </p>
          
          <div className="mb-4 flex justify-center w-full">
            <div className="relative mb-4">
                <img 
                    src={ProfilePngMain}
                    alt="ProfilePngMain"
                    className="rounded-full border-7 border-[#edebeb] border-solid drop-shadow-[0_0_13px_rgba(0,0,0,0.35)] 
                               object-cover w-[150px] h-[150px] mx-auto bg-white p-1 mt-[30px]"
                />

                <a href="#" className="absolute bottom-2 right-1 p-2 rounded-full bg-white"> 
                    <FaCamera className="text-[20px] text-[#ff8000]" /> 
                </a>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-amber-600 hover:text-amber-800">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Placeholder */}
        <div className="flex justify-center space-x-4 mb-6">
          {/* Social icons would go here */}
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center">
          <select className="text-sm text-gray-600 bg-transparent border-none focus:ring-0">
            <option>Choose language</option>
            <option>English</option>
            <option>ไทย</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LogInToWebS;