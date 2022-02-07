//Libraries
import React from "react";
import classes from "./ShopSection.module.scss";
import { theme } from "../../Theme/theme";

//Components from MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopSection = () => {
  return (
    <Box
      sx={{
        py: "70px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <Box
       sx={{
         width: "500px",
         height: "500px",
         pt: "80px"
       }} 
      >
        <Typography
          sx={{
            mb: "25px"
          }}
          variant="h4"
        >
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography
          sx={{
            mb: "25px"
          }}
          variant="body1"
          textAlign={"justify"}
          >
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
              color: "white",
              boxShadow: 0
            }}
            variant="contained"
            color="secondary"
            size="medium"
            endIcon={<ArrowForwardIosIcon/>}
          >
            Buy
          </Button>
      </Box>

      <Box
        sx={{
          width: "500px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          borderRadius: "50%",
          bgcolor: theme.palette.primary.main
        }}
      >
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/gumshoe_black.png`} 
            className={classes.blackShoe}
          />
      </Box>
    </Box>
  );
}

export default ShopSection;