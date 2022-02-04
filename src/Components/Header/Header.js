//Libraries
import React from "react";
import classes from "./Header.module.scss";

//Components
import Navigation from "./Navigation/Navigation";

//Components from MUI
import Typography from "@mui/material/Typography"; 

const Header = () => {
  return (
    <header className={classes.Header}>
      <Navigation />
      <Typography
        sx={{
          marginTop: "210px",
          fontSize: "clamp(7rem, 1.6154rem + 3.0769vw, 10rem)"
        }}
        variant="h1"
        align="center"
        color={"common.white"}
        typography={"typography.fontFamily"}
      >
        You'll never be so happy.<br/>To step on a gum.
      </Typography>
    </header>
  );
}

export default Header;