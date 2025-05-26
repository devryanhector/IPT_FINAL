import React, { useState } from "react";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import { Link as MuiLink } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import cmLogo from "./images/logo_04.png";
import "./Dashboard.css";

import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";


import { CardMedia } from "@mui/material";
import menu1 from "./images/max-s.jpg";
import menu2 from "./images/max.jpg";

const Dashboard = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(5);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <>

      <div className="background-container">
        <Navigation />
        <div className="container-wrapper">
          <Container
            fixed
            sx={{
              position: "absolute",
              top: 20,
              right: 40,
              zIndex: 2,
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{ marginBottom: "10px", width: "15%", color: "#ffffff" }}
              >
                National Highway, Bgy. Sta.Rosa, Bayombong Nueva Vizcaya,
                <button onClick={toggleReadMore} id="readMoreBtn">
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </Typography>
              {expanded && (
                <Typography
                  sx={{ marginBottom: "10px", width: "15%", color: "#ffffff" }}
                >
                  Menu boasts gourmet delights. Locally sourced ingredients.
                  Culinary masterpieces crafted. Signature chicken blends.
                  Artisanal pastries, desserts.
                </Typography>
              )}

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </Container>
        </div>

        <div className="background-img">
          <img src={cmLogo} alt="Restaurant Logo" />
        </div>

        <div className="fab">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
              position: "relative",
              zIndex: 2,
            }}
          >
            <Fab
              variant="extended"
              size="small"
              color="primary"
              onClick={() => setShowLinks(!showLinks)}
            >
              <EmailIcon sx={{ mr: 1 }} />
              Social
            </Fab>
            {showLinks && (
              <Box className="fab-links">
                <MuiLink
                  href="https://www.facebook.com/maxsrestaurant/"
                  target="_blank"
                  sx={{ mb: 1 }}
                >
                  <FacebookIcon fontSize="large" />
                </MuiLink>
                <MuiLink
                  href="https://www.instagram.com/maxschicken/?hl=en"
                  target="_blank"
                  sx={{ mb: 1 }}
                >
                  <InstagramIcon fontSize="large" />
                </MuiLink>
              </Box>
            )}
          </Box>
        </div>
      </div>

      <div className="menu" style={{ width: "100%" }}>
        <Container
          sx={{
            padding: 4,
            width: "100%",
            height: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* first card */}
          <Card
            variant="outlined"
            sx={{
              minHeight: "280px",
              width: "100%",
              backgroundColor: "#0A0908",
              borderColor: "#000",
            }}
          >
            <Typography
              level="h2"
              fontSize="20px"
              fontWeight={900}
              textColor="#89522F"
              fontFamily={"Poppins"}
            ></Typography>
            <CardCover
              sx={{
                position: "relative",
                background: "#89522F",

                border: "1px solid",
                borderColor: "#777",
                backdropFilter: "blur(1px)",
              }}
            >
              <Typography
                level="h2"
                fontSize="40px"
                color="#ffffff"
                fontFamily={"Poetson"}
                fontWeight={"900"}
              >
                OUR MENU
              </Typography>
            </CardCover>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                component="img"
                image={menu1}
                alt="Cafe Manna"
                sx={{
                  width: "50%",
                  height: "100vh",
                }}
              />
              <CardMedia
                component="img"
                image={menu2}
                alt="Cafe Manna"
                sx={{
                  width: "50%",
                  height: "100vh",
                }}
              />
            </div>
          </Card>
        </Container>
      </div>


    </>
  );
};

export default Dashboard;
