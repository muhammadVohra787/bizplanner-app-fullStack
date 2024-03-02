import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Modal,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SignUpApi } from "../api/user-authentication";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useValidation from "../api/input-validation";

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const { validate, errors: validationErrors } = useValidation();
  const [loginMsgBox, setLoginMsgBox] = useState(false);
  const [responseMsg, setResponseMsg] = useState({
    messageRes: "",
    type: "",
    icon: "",
  });
  const { isPending, mutateAsync } = SignUpApi();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const userData = {
      email: dataForm.get("email"),
      password: dataForm.get("password"),
      name: dataForm.get("firstName") + " " + dataForm.get("lastName"),
    };
  
    const nameValidation = validate("name", userData.name);
    const emailValidation = validate("email", userData.email);
    const passwordValidation = validate("password", userData.password);

    if (nameValidation && emailValidation && passwordValidation) {
      setLoginMsgBox(true);
      setResponseMsg({
        responseMsg: "",
        type: "",
        icon: "",
      });

      mutateAsync(userData).then((res) => {
        setLoginMsgBox(true);
        setResponseMsg({
          messageRes: res.data.message,
          type: res.data.type ? "success" : "error",
          icon: res.data.type ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
              }}
            >
              <CheckCircleOutlineIcon
                color="success"
                sx={{
                  fontSize: "5.2rem",
                }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
              }}
            >
              <CancelOutlinedIcon
                color="error"
                sx={{
                  fontSize: "5.2rem",
                }}
              />
            </Box>
          ),
        });
      });
    }
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleMsgBoxClose = () => {
    setLoginMsgBox(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Button variant="contained" color="primary" onClick={handleToggle}>
        Register
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={!!validationErrors.name}
                    helperText={validationErrors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    error={!!validationErrors.name}
                    helperText={validationErrors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={!!validationErrors.email}
                    helperText={validationErrors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={!!validationErrors.password}
                    helperText={validationErrors.password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={loginMsgBox}
        onClose={handleMsgBoxClose}
        aria-labelledby="message-modal-title"
        aria-describedby="message-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
          }}
          variant="contained"
        >
          {isPending ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <>
              {responseMsg.icon}
              <Typography
                sx={{ textAlign: "center" }}
                variant="subtitle1"
                color={`${responseMsg.type}.main`}
              >
                {responseMsg.messageRes}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
