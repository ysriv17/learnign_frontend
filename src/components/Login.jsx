import { Box, Typography } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import apna from "../assets/login.jpeg";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { BsArrowLeft, BsGoogle, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar"
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const [showPassword, setShowPassword] = useState(false);
  // const Navigate = useNavigate();



  const redirectToLogin = async () => {
    const clientId = "Khc2TE4I3odlbzuVw91ChKy0f6wa";
    const redirectUri = encodeURIComponent(
      "https://yash.centroxy:5173/auth/callback"
    );
    const scope = "openid address email groups phone profile roles";
    const state = "some-random-state"; // Optional for CSRF protection

    const authUrl = `https://login.cnxy.in/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
   window.open(authUrl);
  };
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-200 py-16 px-8">
        <div className="flex flex-col lg:flex-row  justify-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="flex justify-center lg:w-1/2 w-full animate__animated animate__fadeIn">
            <img
              loading="lazy"
              src={`${apna}`}
              alt="apna"
              className="w-full max-w-[800px] h-auto rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-2"
            />
          </div>

          {/* Content Section */}
          <div className="bg-white p-10 rounded-3xl shadow-xl w-full lg:w-1/2">
            <h2 className="text-5xl font-extrabold text-center text-purple-700 mb-8 transition-all duration-300 hover:text-indigo-600">
              Welcome to FormsDunia
            </h2>

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-6 w-full">
                <Link
                  to="/signup"
                  className="flex-1 text-center py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all hover:scale-105 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform"
                >
                  Register
                </Link>
              </div>
              <div className="flex gap-6 w-full">
                <Link
                  to="/login"
                  className="flex-1 text-center py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold text-lg transition-all hover:scale-105 hover:from-blue-700 hover:to-teal-700 shadow-lg transform"
                >
                  Login
                </Link>
              </div>

              <form onSubmit={redirectToLogin} className="w-full mt-8">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 text-lg shadow-xl transition-all transform hover:scale-105"
                >
                  Log In with WSO2 Server
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
