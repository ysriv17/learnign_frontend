import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice.js";
import axios from "axios";

function AuthCallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");

    if (code) {
      // Send auth code to backend
      axios
        .post("http://localhost:3001/user/wso2/get-token", { code })
        .then((response) => {
          const userlog = response.data;
          console.log(userlog)
          dispatch(loginSuccess({
            user: {
            firstName: `${userlog.user.given_name}`,
            lastName: `${userlog.user.family_name}`,
            sub: `${userlog.user.sub}`,
            userName: `${userlog.user.username}`,
            email: `${userlog.user.email}`,
          },
            token: `${userlog.token}`,
            isAuthenticated: true }
          ));
          navigate("/home");
        })
        .catch((err) => {
          console.error("Token exchange failed", err);
          navigate("/login");
        });
    } else () => navigate("/login");
  }, [navigate]);

  return <div>Authenticating...</div>;
}

export default AuthCallback;
