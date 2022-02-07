//Libraries
import React from "react";
import { theme } from "../../Theme/theme";

//Components from MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const BlogSection = () => {
  return (
    <Box
      sx={{
        py: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"   
      }}
    >
      <Typography
      sx={{
        mb: "50px"
      }}
        variant="h2"
        textAlign={"center"}
        fontWeight={700}
      >
        Last articles
      </Typography>

      <Box
        sx={{
          width: "100%",
          mb: "60px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <Card sx={{maxWidth: "400px"}}>
          <CardMedia
            component={"img"}
            height="200"
            image={`${process.env.PUBLIC_URL}/assets/images/gumshoe-pink.jpeg`}
          />

          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
            >
              Article 1
            </Typography>

            <Typography
              variant="body2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </Typography>
          </CardContent>

          <CardActions>
            <Button
                sx={{
                  color: theme.palette.primary.main,
                  boxShadow: 0
                }}
                variant="outlined"
                color="primary"
                size="small"
                endIcon={<ArrowForwardIos/>}
              >
                Read more
              </Button>
          </CardActions>
        </Card>

        <Card sx={{maxWidth: "400px"}}>
          <CardMedia
            component={"img"}
            height="200"
            image={`${process.env.PUBLIC_URL}/assets/images/gumshoe-pink.jpeg`}
          />

          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
            >
              Article 2
            </Typography>

            <Typography
              variant="body2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </Typography>
          </CardContent>

          <CardActions>
            <Button
                sx={{
                  color: theme.palette.primary.main,
                  boxShadow: 0
                }}
                variant="outlined"
                color="primary"
                size="small"
                endIcon={<ArrowForwardIos/>}
              >
                Read more
              </Button>
          </CardActions>
        </Card>

        <Card sx={{maxWidth: "400px"}}>
          <CardMedia
            component={"img"}
            height="200"
            image={`${process.env.PUBLIC_URL}/assets/images/gumshoe-pink.jpeg`}
          />

          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
            >
              Article 3
            </Typography>

            <Typography
              variant="body2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </Typography>
          </CardContent>

          <CardActions>
            <Button
                sx={{
                  color: theme.palette.primary.main,
                  boxShadow: 0
                }}
                variant="outlined"
                color="primary"
                size="small"
                endIcon={<ArrowForwardIos/>}
              >
                Read more
              </Button>
          </CardActions>
        </Card>
      </Box>
      <Button
        sx={{
          color: theme.palette.common.white,
          boxShadow: 0
        }}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowForwardIos/>}
      >
        See all
      </Button>
    </Box>
  );
}

export default BlogSection;