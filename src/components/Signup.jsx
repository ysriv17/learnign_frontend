// // import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import apna from "../assets/login.jpeg";
// import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { BsArrowLeft, BsGoogle, BsLinkedin } from "react-icons/bs";
// import { useState } from "react";
// import Axios from "axios";
// import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";



// const SigninScreen = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [repassword, setRepassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const emailchecker = (em) => {
//   //   const emailcheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
//   //   if (emailcheck.test(em)) {
//   //     return true;
//   //   } else {
//   //     window.alert("invailed email");
//   //     return false;
//   //   }
//   // };
//   // const passwordchecker = (pass) => {
//   //   const number = /[0-9]/g;
//   //   const specialcharacter = /[$&+,:;=?@#|'<>.-^*()%!]/g;
//   //   const uppercase = /[A-Z]/g;
//   //   const lowercase = /[a-z]/g;
//   //   if (
//   //     number.test(pass) &&
//   //     specialcharacter.test(pass) &&
//   //     uppercase.test(pass) &&
//   //     lowercase.test(pass)
//   //   ) {
//   //     return true;
//   //   } else {
//   //     window.alert("invailed password");
//   //     return false;
//   //   }
//   // };
//   // const validate = async (em, pass) => {
//   //   emailchecker(em);
//   //   passwordchecker(pass);

//   //   if (emailchecker(em) && passwordchecker(pass)) {
     
//     // }
//     // return;
//   };
//   const handelform = async (e) => {
//     e.preventDefault();
//     // validate(email, password);
//      const data = {
//        firstName: `YashTEst17`,
//        lastName: `YAshtest17`,
//        email: `${email}`,
//        password: `${password}`,
//        username: `${name}`,
//      };
//      console.log(data, "is ready to be passed to backend");
//      await Axios.post("http://localhost:3001/user/wso2/signup", data, {
//        headers: {
//          "Content-Type": "application/json",
         
//        },
//      })
//        .then(function (response) {
//          console.log(response.data, "PPPPPPPPPPPPPPPPPPPPPPPPPPP");
//          window.alert("user created");

//          return response.data;
//        })
//        .catch((err) => {
//          window.alert("user created");
//          console.log(err, "error in sending");
//          window.alert(err);
//          return Promise.reject(err);
//        });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
  

//       <div className=" h-screen">
//         <div className="flex justify-center items-center w-screen h-[95vh] max-md:flex-col mt-[10vh]">
//           <div className="flex flex-col text-center justify-center items-center lg:w-5/ xl:w-1/2 max-md:ml-0  max-lg:w-full max-lg:h-auto">
//             <img
//               loading="lazy"
//               src={`${apna}`}
//               className="w-[800px] h-[550px] aspect-[0.52] max-md:mt-5 max-md:max-w-[250px] rounded-3xl"
//               alt="apna"
//             />
//           </div>
//           <div className="p-8 flex flex-col ml-3 lg:w-[40%] max-md:ml-0 max-lg:w-full max-md:pt-0">
//             <div className="mt-1 max-md:max-w-full">
//               <div className="flex gap-5 text-center items-center justify-center max-md:flex-col max-md:gap-0">
//                 <div className="flex flex-col xl:w-[70%] lg:w-[90%] max-md:ml-0 max-md:w-full">
//                   <div className="flex flex-col grow pb-2.5 mt-4 2xl:mt-12 max-md:mt-10">
//                     <div className="self-center text-2xl font-bold leading-10 text-center uppercase text-primary">
//                       Welcome to FormsDunia
//                     </div>
//                     <div className="w-full flex justify-center text-white">
//                       <Typography
//                         component="div"
//                         sx={{
//                           fontSize: "1em",
//                           fontWeight: "600",
//                           marginTop: "4vh",
//                           marginBottom: "1vh",
//                           backgroundColor: "#4e03a9",
//                           padding: "0.75em 1em",
//                           borderRadius: "40px",
//                           width: "80%",
//                           display: "flex",
//                           justifyContent: "space-evenly",
//                         }}
//                       >
//                         <Typography
//                           component="button"
//                           sx={{
//                             fontSize: "1em",
//                             fontWeight: "600",
//                             backgroundColor: "rgba(90, 4, 195, 0.87)",
//                             padding: "0.5em 0.75em",
//                             borderRadius: "20px",
//                             width: "45%",
//                           }}
//                         >
//                           <Link to={"/signup"}> Register </Link>
//                         </Typography>
//                         <Typography
//                           component="button"
//                           sx={{
//                             fontSize: "1em",
//                             fontWeight: "600",
//                             backgroundColor: "#4e03a9",
//                             padding: "0.5em 0.75em",
//                             borderRadius: "20px",
//                             width: "45%",
//                           }}
//                         >
//                           <Link to={"/login"}> Login </Link>
//                         </Typography>
//                       </Typography>{" "}
//                     </div>
//                     <div className="flex flex-col">
//                       <form
//                         encType="multipart/form-data"
//                         onSubmit={handelform}
//                         className="flex flex-col justify-center "
//                       >
//                         <div className="w-full flex font-semibold mb-[-0.5em]  ml-[1.5em] text-[14px]">
//                           Name
//                         </div>
//                         <div className="flex gap-3.5 flex-wrap px-5 py-3 mt-3 2xl:mt-5 text-base bg-white border-[2px] border-solid border-border text-neutral-700 rounded-3xl">
//                           <FaUser className="self-center" />
//                           <input
//                             type="text"
//                             name="username"
//                             value={name}
//                             onChange={(e) => {
//                               setName(e.target.value);
//                             }}
//                             className="flex-auto my-auto outline-none h-[1.5rem] 2xl:h-[2rem] "
//                             placeholder="John doe"
//                           />
//                         </div>
//                         <div className="w-full flex mt-[1.5em] font-semibold mb-[-0.5em]  ml-[1.5em] text-[14px]">
//                           Email
//                         </div>
//                         <div className="flex gap-4 flex-wrap px-5 py-3 mt-3 text-base whitespace-nowrap bg-white border-[2px] border-solid border-border rounded-3xl text-neutral-700">
//                           <FaEnvelope className="self-center" />
//                           <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => {
//                               setEmail(e.target.value);
//                             }}
//                             className="flex-auto my-auto outline-none h-[1.5rem] 2xl:h-[2rem] "
//                             placeholder="doe@gmail.com"
//                           />
//                         </div>
//                         <div className="w-full flex mt-[1.5em] font-semibold mb-[-0.5em] ml-[1.5em] text-[14px]">
//                           Password
//                         </div>
//                         <div className="flex gap-5 flex-wrap justify-between px-5 py-3 mt-3 w-full bg-white border-[2px] border-solid border-border rounded-3xl">
//                           <FaLock className="self-center text-neutral-700" />
//                           <div className="flex gap-4 flex-auto leading-7 items-center max-sm:flex-wrap">
//                             <input
//                               type={showPassword ? "text" : "password"}
//                               name="password"
//                               value={password}
//                               onChange={(e) => {
//                                 setPassword(e.target.value);
//                               }}
//                               className="flex-auto my-auto outline-none h-[1.5rem] 2xl:h-[2rem]"
//                               placeholder="password"
//                             />
//                             <div
//                               className="text-xs cursor-pointer text-right text-neutral-400 flex items-center"
//                               onClick={togglePasswordVisibility}
//                             >
//                               {showPassword ? (
//                                 <FaEyeSlash className="text-xl" />
//                               ) : (
//                                 <FaEye className="text-xl" />
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="w-full flex  justify-center mt-5">
//                           <button
//                             type="submit"
//                             className="flex items-center w-[50%] text-lg font-semibold gap-5 justify-center px-9 py-4 mt-5   leading-7 text-white bg-[#4e03a9] max-md:px-5 cursor-pointer shadow-xl hover:shadow-md rounded-3xl "
//                           >
//                             Register
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SigninScreen;
import { FaArrowRight, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { BsArrowLeft, BsGoogle, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import Axios from "axios";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import apna from "../assets/login.jpeg";

const SigninScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelform = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      username,
    };
    console.log(data, "is ready to be passed to backend");
    await Axios.post("http://localhost:3001/user/wso2/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data, "Response from backend");
        window.alert("User created successfully");
      })
      .catch((err) => {
        console.error(err);
        window.alert("Error creating user");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300 py-8">
      <div className="flex flex-col lg:flex-row justify-center  w-full h-full max-w-7xl mx-auto gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full text-center animate__animated animate__fadeIn mb-6 lg:mb-0">
          <img
            loading="lazy"
            src={apna}
            alt="apna"
            className="w-[80%] max-w-[800px] h-auto rounded-3xl shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:rotate-2"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white rounded-3xl shadow-xl w-full lg:w-[40%] max-md:w-full">
          <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-6 transition-all duration-300 hover:text-indigo-600">
            Welcome to FormsDunia
          </h2>

          {/* Action Buttons */}
          <div className="w-full flex justify-center gap-6 mb-6">
            <Link
              to="/signup"
              className="w-1/2 py-4 text-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="w-1/2 py-4 text-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-teal-700 shadow-lg"
            >
              Login
            </Link>
          </div>

          <form onSubmit={handelform} className="flex flex-col gap-6">
            {/* First Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <div className="flex gap-3 px-5 py-3 mt-2 bg-white border-2 border-gray-300 rounded-full shadow-sm focus-within:border-indigo-600">
                <FaUser className="text-indigo-600" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="flex-auto outline-none"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <div className="flex gap-3 px-5 py-3 mt-2 bg-white border-2 border-gray-300 rounded-full shadow-sm focus-within:border-indigo-600">
                <FaUser className="text-indigo-600" />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="flex-auto outline-none"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="flex gap-3 px-5 py-3 mt-2 bg-white border-2 border-gray-300 rounded-full shadow-sm focus-within:border-indigo-600">
                <FaUser className="text-indigo-600" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="johndoe17"
                  className="flex-auto outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="flex gap-3 px-5 py-3 mt-2 bg-white border-2 border-gray-300 rounded-full shadow-sm focus-within:border-indigo-600">
                <FaEnvelope className="text-indigo-600" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="flex-auto outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex gap-3 px-5 py-3 mt-2 bg-white border-2 border-gray-300 rounded-full shadow-sm focus-within:border-indigo-600">
                <FaLock className="text-indigo-600" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="flex-auto outline-none"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center mt-6">
              <button
                type="submit"
                className="w-[70%] py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-700 to-purple-700 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-800 hover:to-purple-800"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
