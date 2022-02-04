//Libraries
import React from "react";

//Components
import Navigation from "./Navigation/Navigation";

//Components from MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          height: "100vh",
          background: `url("${process.env.PUBLIC_URL}/assets/images/hero-banner.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <Navigation />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography
            sx={{
              marginBottom: "60px"
            }}
            variant="h1"
            align="center"
            color={"common.white"}
            typography={"typography.fontFamily"}
            fontSize={"clamp(1rem, 0.3rem + 5.6vw, 8rem)"}
            fontWeight={"900"}
          >
            You'll never be so happy.<br/>To step on a gum.
          </Typography>

          <Button
            sx={{
              color: "white"
            }}
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIosIcon/>}
          >
            Discover
          </Button>
        </Box>
      </Box>
    </header>
  );
}

export default Header;