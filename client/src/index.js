import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, red } from "@mui/material/colors";
import "./style.css";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  palette: {
    primary: {
      main: "#080a45",
    },
    secondary: {
      main: "#f1ddd9",
    },
  },
  typography: {
    fontFamily: "Urbanist",
    fontWeightRegular: 400,
    fontWeightBold: 900,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    pFF: ["Inter"],
    sFF: ["Bricolage Grotesque"],
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container maxWidth="xl">
          <App />
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
