import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Alert, Typography, AppBar, Toolbar } from "@mui/material";
import SignIn from "./SignInModal";
import SignUp from "./SignUpModal";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
    setShowSuccessAlert(true);
    const lastVisitedUrl = -1;
    lastVisitedUrl === -1 ? window.location.reload() : navigate(lastVisitedUrl);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 2000);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 0 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            MVAuth
          </Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Link
            to="/publicroute1"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Public Route 1
          </Link>
          <Link
            to="/publicroute2"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Public Route 2
          </Link>
          <Link
            to="/secureroute1"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Secure Route 1
          </Link>
          <Link
            to="/secureroute2"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Secure Route 2
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          {isAuthenticated() ? (
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <>
              <SignIn type="text" text="Login" />
              <SignUp type="text" text="Register" />
            </>
          )}
        </Box>
      </Toolbar>
      {showSuccessAlert && (
        <Alert
          severity="success"
          onClose={() => setShowSuccessAlert(false)}
          sx={{ backgroundColor: "#43a047" }}
        >
          You have successfully signed out.
        </Alert>
      )}
    </AppBar>
  );
};

export default Navbar;
