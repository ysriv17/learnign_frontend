import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import AuthCallback from "./components/authCallback";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./routes/ProtectedRoutes";
import UserProfileEditor from "./components/updateProfileUser";
import ViewProfile from "./components/viewProfile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userUpdate"
          element={
            <ProtectedRoute>
              <UserProfileEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userView"
          element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </>
  );
}

export default App;
