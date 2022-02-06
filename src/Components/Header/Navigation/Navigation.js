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
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";

const Navigation = () => {
  return(
    <AppBar
      sx={{
        boxShadow: 0
      }}
      component={"nav"}
      position="fixed"
      color="primary"
    >
      <Toolbar>
        <Container
          sx={{
            width: "100%",
            height: "60px",
            display: "flex",
            alignItems: "center",
          }}
          maxWidth="lg"
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
              marginTop: "100px"
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
        </Container>

        <AccountCircleOutlined
          sx={{
            cursor: "pointer"
          }}
          fontSize="large"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;