//Libraries
import React from "react";
import { theme } from "../../Theme/theme";

//Components from MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const AboutSection = () => {
  return (
    <Box
      sx={{
        pt: "100px",
        pb: "200px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theme.palette.secondary.main
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `url('${process.env.PUBLIC_URL}/assets/images/gumshoe-model.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "top"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "-120px",
            bottom: "-120px",
            width: "300px",
            height: "300px",
            p: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            bgcolor: theme.palette.third.main
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/gumshoe-pink.png`}
          />
        </Box>
      </Box>
      
      <Box
        sx={{
          width: "500px",
          height: "500px",
          pt: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        <Typography
          sx={{
            mb: "25px"
          }}
          variant="h4"
          color={"common.white"}
        >
          About our shoes
        </Typography>

        <Typography
          sx={{
            mb: "25px"
          }}
          variant="body1"
          textAlign={"justify"}
          color={"common.white"}
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.     
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          
        </Typography>

        <Button
            sx={{
              width: "170px",
              color: theme.palette.common.white,
              boxShadow: 0
            }}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIos/>}
          >
            Learn more
          </Button>
      </Box>
    </Box>
  );
}

export default AboutSection;