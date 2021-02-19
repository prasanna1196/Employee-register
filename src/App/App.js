import React, { Fragment } from "react";
import SideMenu from "../Components/SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

import Header from "../Components/Header";
import Employees from "../pages/Employees";

// Theme customization
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  // Global changes
  overrides: {
    MuiAppBar: {
      root: {
        // For searchbar shadow
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      //disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
