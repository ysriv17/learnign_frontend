import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice"; // Update this path as per your project
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { useSelector } from 'react-redux';
function Navbar(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center" });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => {
    
    dispatch(logout());

    // OPTIONAL: Redirect to WSO2 Logout Endpoint for SLO
    const postLogoutRedirectUri = encodeURIComponent(
      "https://yash.centroxy:5173/login"
    );
    const logoutUrl = `https://mysso.cnxy.in/oidc/logout?post_logout_redirect_uri=${postLogoutRedirectUri}`;

    window.open(
      logoutUrl,
      "logoutpage",
      "width=500,height=600,left=100,top=100"
    );
    window.close();
    // Or if you're not using SLO:
    // navigate("/login");
  };

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          background: "black",
          display: "flex",
          flexDirection: "row",
          padding: "1em 3em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <img
            src={Logo}
            alt="Logo"
            style={{ cursor: "pointer", maxWidth: "25em", objectFit: "cover" }}
            onClick={()=> navigate("/home")}
          />
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            width: "40vw",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
            Home
          </Typography>
          <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
            About
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
              Resources
            </Typography>
            <KeyboardArrowUpIcon />
          </Box>
          <Typography sx={{ fontSize: "1em", fontWeight: "600" }}>
            Contact
          </Typography>
          {isAuthenticated ? (<Box
            onClick={handleLogout}
            sx={{
              fontSize: "1em",
              fontWeight: "600",
              backgroundColor: "rgba(90, 4, 195, 0.87)",
              padding: "1em 2em",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Log out
          </Box>) : (
        <></>
          )
            }
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Navbar {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Navbar>
    </React.Fragment>
 </> 
 );
}
