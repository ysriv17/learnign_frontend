import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess, updateUser } from "../features/auth/authSlice";

const UserProfileEditor = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    givenName: user?.given_name || "",
    familyName: user?.family_name || "",
    email: user?.email || "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/user/details/update/${user.sub}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const newuser = response.data.updatedUser;
      console.log(newuser);
      if (newuser.name.givenName !== user?.firstName) {
        dispatch(
          updateUser({
            firstName: `${newuser.name.givenName}`,
          })
        );
      }

      if (newuser.name.familyName !== user?.lastName) {
        dispatch(
          updateUser({
            lastName: `${newuser.name.familyName}`,
          })
        );
      }


      if (newuser.emails[0].value !== user?.email) {
        dispatch(
          updateUser({
            email: `${newuser.emails[0].value}`,
          })
        );
      }
      //   (user.sub = response.data.updatedUser.id,
      //   user.given_name = response.data.updatedUser.name.givenName,
      //     user.family_name = response.data.updatedUser.name.familyNameName,
      // user)

      setSnackbar({
        open: true,
        message: "Profile updated successfully!",
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Update failed. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="h-[80px]">
        <Navbar />
      </div>
      <div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(to right, #e0f7fa, #e0e7ff, #ede9fe)",
            px: 2,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 5,
              borderRadius: 6,
              width: "100%",
              maxWidth: 420,
              background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={4}
            >
              <Avatar
                sx={{
                  bgcolor: "#7c3aed",
                  width: 72,
                  height: 72,
                  mb: 1.5,
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.4)",
                }}
              >
                <EditIcon fontSize="large" />
              </Avatar>
              <Typography
                variant="h4"
                fontWeight={800}
                color="primary"
                gutterBottom
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
                Edit Profile
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Update your personal info below.
              </Typography>
            </Box>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="First Name"
                name="givenName"
                value={formData.givenName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
              <TextField
                label="Last Name"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  textTransform: "none",
                  borderRadius: 2,
                  background: "linear-gradient(to right, #6366f1, #7c3aed)",
                  boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(to right, #5b5bd6, #6d28d9)",
                  },
                }}
                onClick={handleUpdate}
              >
                Save Changes
              </Button>
            </Box>

            <Snackbar
              open={snackbar.open}
              autoHideDuration={3000}
              onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
              <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default UserProfileEditor;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { loginSuccess } from "../features/auth/authSlice";
// import {
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   Paper,
//   Grid,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";

// function UserProfileEditor() {
//   const user = useSelector((state) => state.auth.user);
//   const token = useSelector((state) => state.auth.token);
//   const dispatch = useDispatch();

//   // Note: email is assumed to be an array (SCIM style), adjust as needed
//   const [formData, setFormData] = useState({
//     name: {
//       givenName: user?.name?.givenName || "",
//       familyName: user?.name?.familyName || "",
//     },
//     userName: user?.username || "",
//     email: user?.email || "",
//   });

//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "givenName" || name === "familyName") {
//       setFormData((prev) => ({
//         ...prev,
//         name: {
//           ...prev.name,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleUpdate = async () => {
//     const patchOps = [];

//     // Compare and add patch ops for name fields
//     if (formData.name.givenName !== user?.name?.givenName) {
//       patchOps.push({
//         op: "replace",
//         path: "name.givenName",
//         value: formData.name.givenName,
//       });
//     }
//     if (formData.name.familyName !== user?.name?.familyName) {
//       patchOps.push({
//         op: "replace",
//         path: "name.familyName",
//         value: formData.name.familyName,
//       });
//     }
//     if (formData.userName !== user?.userName) {
//       patchOps.push({
//         op: "replace",
//         path: "userName",
//         value: formData.userName,
//       });
//     }
//     if (formData.email !== user?.email?.[0]) {
//       patchOps.push({
//         op: "replace",
//         path: "emails[0]",
//         value: [formData.email],
//       });
//     }

//     if (patchOps.length === 0) {
//       setSnackbar({
//         open: true,
//         message: "No changes made.",
//         severity: "info",
//       });
//       return;
//     }

//     try {
//       const response = await axios.patch(
//         `http://localhost:3001/user/details/update/${user.sub}`,
//         { patchOps },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       dispatch(loginSuccess({ user: response.data.updatedUser, token }));
//       setSnackbar({
//         open: true,
//         message: "Profile updated successfully!",
//         severity: "success",
//       });
//     } catch (err) {
//       setSnackbar({
//         open: true,
//         message: "Update failed. Please try again.",
//         severity: "error",
//       });
//     }
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       sx={{ minHeight: "80vh" }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 5,
//           borderRadius: 4,
//           minWidth: 350,
//           maxWidth: 400,
//           background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
//         }}
//       >
//         <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
//           <Avatar sx={{ bgcolor: "#6366f1", width: 64, height: 64, mb: 1 }}>
//             <EditIcon fontSize="large" />
//           </Avatar>
//           <Typography
//             variant="h5"
//             fontWeight={700}
//             color="primary"
//             gutterBottom
//           >
//             Edit Profile
//           </Typography>
//         </Box>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             label="First Name"
//             name="givenName"
//             value={formData.name.givenName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Last Name"
//             name="familyName"
//             value={formData.name.familyName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Username"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 3, py: 1.5, fontWeight: 600, fontSize: "1.1rem" }}
//             onClick={handleUpdate}
//           >
//             Save Changes
//           </Button>
//         </Box>
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={3000}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//         >
//           <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Paper>
//     </Grid>
//   );
// }

// export default UserProfileEditor;
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { loginSuccess ,updateUser } from "../features/auth/authSlice";
// import {
//   Box,
//   TextField,
//   Button,
//   Avatar,
//   Typography,
//   Paper,
//   Grid,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";

// function UserProfileEditor() {
//   const user = useSelector((state) => state.auth.user);
//   const token = useSelector((state) => state.auth.token);
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     givenName: user?.given_name || "",
//     familyName: user?.family_name || "",
//     userName: user?.username || "",
//     email: user?.email || "",
//   });

//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {

//     try {
//       const response = await axios.patch(
//         `http://localhost:3001/user/details/update/${user.sub}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const newuser = response.data.updatedUser;
//       console.log(newuser)
//       if (newuser.name.givenName !== user?.firstName) {
//         dispatch(
//           updateUser({
//             firstName: `${newuser.name.givenName}`,
//           })
//         );
//       }

//       if (newuser.name.familyName !== user?.lastName) {
//         dispatch(
//           updateUser({
//             lastName: `${newuser.name.familyName}`,
//           })
//         );
//       }

//       if (newuser.userName !== user?.userName) {
//         dispatch(
//           updateUser({
//             userName: `${newuser.userName}`,
//           })
//         );
//       }

//       if (newuser.emails[0].value !== user?.email) {
//         dispatch(
//           updateUser({
//             email: `${newuser.emails[0].value}`,
//           })
//         );
//       }
//   console.log(user)
//           //   (user.sub = response.data.updatedUser.id,
//           //   user.given_name = response.data.updatedUser.name.givenName,
//           //     user.family_name = response.data.updatedUser.name.familyNameName,
//           // user)

//       setSnackbar({
//         open: true,
//         message: "Profile updated successfully!",
//         severity: "success",
//       });
//     } catch (err) {
//       setSnackbar({
//         open: true,
//         message: "Update failed. Please try again.",
//         severity: "error",
//       });
//     }
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       sx={{ minHeight: "80vh" }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 5,
//           borderRadius: 4,
//           minWidth: 350,
//           maxWidth: 400,
//           background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
//         }}
//       >
//         <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
//           <Avatar sx={{ bgcolor: "#6366f1", width: 64, height: 64, mb: 1 }}>
//             <EditIcon fontSize="large" />
//           </Avatar>
//           <Typography
//             variant="h5"
//             fontWeight={700}
//             color="primary"
//             gutterBottom
//           >
//             Edit Profile
//           </Typography>
//         </Box>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             label="First Name"
//             name="givenName"
//             value={formData.givenName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Last Name"
//             name="familyName"
//             value={formData.familyName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Username"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 3, py: 1.5, fontWeight: 600, fontSize: "1.1rem" }}
//             onClick={handleUpdate}
//           >
//             Save Changes
//           </Button>
//         </Box>
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={3000}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//         >
//           <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Paper>
//     </Grid>
//   );
// }

// export default UserProfileEditor;
