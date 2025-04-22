import React, { useState } from 'react'
import Navbar from "./Navbar"
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ChevronDown, User, Pencil } from 'lucide-react';

function Home() {
  const user = useSelector((state) => state.auth.user);
  const firstName = useSelector((state) => state.auth.user.firstName);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <div>
      <div className="h-20vh">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-[90%] max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            👋 Hi,{" "}
            <span className="text-purple-600">{firstName || "Guest"}</span>!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Welcome to your dashboard!
          </p>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
            >
              Profile
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-10">
                
                  <Link
                    to="/userView"
                    className="flex items-center px-4 py-2 hover:bg-purple-50 text-gray-700"
                  >
                    <User className="mr-2 w-4 h-4" />
                    View User
                  </Link>
            
                <Link
                  to="/userUpdate"
                  className="flex items-center px-4 py-2 hover:bg-purple-50 text-gray-700"
                >
                  <Pencil className="mr-2 w-4 h-4" />
                  Edit User
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
