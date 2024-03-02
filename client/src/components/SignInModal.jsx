import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "../styles/home.css";
import { usePost } from "../api/user-authentication";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useValidation from "../api/input-validation";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import CloseIcon from "@mui/icons-material/Close";
import SignUp from "./SignUpModal";

export const OpenSigninModal = () => {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
};
export default function SignIn({ type, text, style, fullWidthDirection }) {
  const { open, setOpen } = OpenSigninModal();

  const { validate, errors: validationErrors } = useValidation();
  const [loginMsgBox, setLoginMsgBox] = useState(false);
  const [responseMsg, setResponseMsg] = useState({
    messageRes: "",
    type: "",
    icon: "",
  });
  const { isPending, mutateAsync } = usePost();
  const signInContext = useSignIn();
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const userData = {
      email: dataForm.get("email"),
      password: dataForm.get("password"),
    };

    const emailValidation = validate("email", userData.email);
    const passwordValidation = validate("password", userData.password);

    if (emailValidation && passwordValidation) {
      setLoginMsgBox(true);
      setResponseMsg({
        responseMsg: "",
        type: "",
        icon: "",
      });

      mutateAsync({ postData: userData, url: "login" }).then((res) => {
        console.log(res.data.type);
        signInContext({
          expireIn: res.data.expiresIn,
          userState: {
            email: userData.email,
          },
          auth: {
            token: res.data.token,
            type: "Bearer",
          },
        });
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
        setTimeout(() => {
          setResponseMsg(false);
          setOpen(false);
          setLoginMsgBox(false);
        }, 1500);
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
  const handleCloseAll = () => {
    setLoginMsgBox(false);
    setOpen(false);
    setResponseMsg({
      responseMsg: "",
      type: "",
      icon: "",
    });
  };
  return (
    <Box
      sx={{
        paddingRight: "10px",
        margin: "0px",
        textAlign: "start",
      }}
    >
      <Button
        variant={type}
        onClick={handleToggle}
        sx={{
          ...style,
        }}
        fullWidth={fullWidthDirection}
      >
        {text}
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
            <Button
              onClick={handleCloseAll}
              style={{
                position: "fixed",
                top: 25,
                right: 25,
                padding: 0,
                minWidth: 0,
                margin: 0,
              }}
            >
              <CloseIcon />
            </Button>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
              <br />
              <br />
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <a onClick={handleCloseAll}>
                    <SignUp
                      type="text"
                      text={"Don't have an account? Sign Up"}
                      style={{ fontSize: "12px" }}
                    />
                  </a>
                </Grid>
              </Grid>
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
    </Box>
  );
}
