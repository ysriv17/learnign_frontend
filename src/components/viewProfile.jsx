import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Avatar, Typography, Box, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ViewProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f2fe, #ede9fe)",
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
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar
            sx={{
              bgcolor: "#6366f1",
              width: 72,
              height: 72,
              mb: 1.5,
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
            }}
          >
            <PersonIcon fontSize="large" />
          </Avatar>
          <Typography
            variant="h4"
            fontWeight={800}
            color="primary"
            sx={{ fontFamily: "Poppins, sans-serif" }}
            gutterBottom
          >
            Your Profile
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here’s your stored info
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            First Name:
          </Typography>
          <Typography variant="body1" mb={2}>
            {user.firstName}
          </Typography>

          <Typography variant="subtitle1" fontWeight={600}>
            Last Name:
          </Typography>
          <Typography variant="body1" mb={2}>
            {user.lastName}
          </Typography>

          <Typography variant="subtitle1" fontWeight={600}>
            Username:
          </Typography>
          <Typography variant="body1" mb={2}>
            {user.userName}
          </Typography>

          <Typography variant="subtitle1" fontWeight={600}>
            Email:
          </Typography>
          <Typography variant="body1" mb={2}>
            {user.email}
          </Typography>

          <Typography variant="subtitle1" fontWeight={600}>
            Sub ID:
          </Typography>
          <Typography variant="body1" mb={2}>
            {user.sub}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ViewProfile;
