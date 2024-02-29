import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { register } from "swiper/element/bundle";

import App from "./App.jsx";
import "./index.css";
import { PALETTE_COLOR } from "./utils/constant.js";

register();

let theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },

  palette: {
    primary: {
      main: PALETTE_COLOR.red,
      dark: PALETTE_COLOR.darkRed,
      light: PALETTE_COLOR.lightRed,
    },
    secondary: {
      main: PALETTE_COLOR.brown,
      dark: PALETTE_COLOR.darkBrown,
      light: PALETTE_COLOR.lightBrown,
    },
    tertiary: {
      main: PALETTE_COLOR.yellow,
      dark: PALETTE_COLOR.darkYellow,
      light: PALETTE_COLOR.lightYellow,
    },
    gray: {
      main: PALETTE_COLOR.gray,
      dark: PALETTE_COLOR.darkGray,
      light: PALETTE_COLOR.lightGray,
    },
    white: {
      main: PALETTE_COLOR.white,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3.75rem",
      fontWeight: 400,
      [theme.breakpoints.down("md")]: { fontSize: "2.5rem" },
    },

    h2: {
      fontSize: "3rem",
      fontWeight: 400,
      [theme.breakpoints.down("md")]: { fontSize: "2.25rem" },
    },

    h3: {
      fontSize: "2rem",
      [theme.breakpoints.down("md")]: { fontSize: "1.5rem" },
    },

    h4: {
      fontSize: "1.75rem",
      [theme.breakpoints.down("md")]: { fontSize: "1.25rem" },
    },

    h5: {
      [theme.breakpoints.down("md")]: { fontSize: "1.125rem" },
    },

    h6: {
      [theme.breakpoints.down("md")]: { fontSize: "1rem" },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
