import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Footer from "./components/Footer";
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'

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
    success:'green',
    error:'red',
    fili:'purple'
  },
});
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}
    >
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />

        <App />

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
