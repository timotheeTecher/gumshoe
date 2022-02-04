//Libraries
import React from "react";
import routes from "../../../config/routes";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

//Components from MUI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const Navigation = () => {
  return(
    <AppBar
      component={"nav"}
      position="static"
      color="primary"
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            position: "relative",
            height: "60px",
            display: "flex",
            listStyle: "none"
          }}
          component={"ul"}
        >
          <Box 
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flex: "1"
            }}
          >
            <NavigationItem to={routes.HOME}>Home</NavigationItem>
            <NavigationItem to={routes.SHOP}>Shop</NavigationItem>
            <NavigationItem to={routes.EVENTS}>Events</NavigationItem>
          </Box>

          <Box
            sx={{
              width: "220px",
              marginTop: "90px"
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}/>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flex: "1"
            }}
          >
            <NavigationItem to={routes.BLOG}>Blog</NavigationItem>
            <NavigationItem to={routes.ABOUT}>About us</NavigationItem>
            <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
          </Box>

        </Toolbar>
        </Container>
    </AppBar>
  );
}

export default Navigation;