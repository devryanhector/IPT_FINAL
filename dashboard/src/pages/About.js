import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Container, CardMedia } from "@mui/material";
import Navigation from "./Navigation";

import barista from "./images/max.jpg";
import pastry1 from "./images/max-s.jpg";

const About = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontSize={35}
            fontFamily={"Poppins"}
            color="#000"
          >
            About Max's
          </Typography>
          <Typography variant="body2" paragraph>
            `Max's Restaurant's beginnings started in 1945, after World War II. Maximo Gimenez, a Stanford - educated teacher, befriended the American occupation troops stationed at Quezon City.
            Because of this friendship, the soldiers regularly visited Maximo's nearby home for a drink or two.
            Later on, the troops insisted that they pay for their drinks. This prompted Maximo to open a cafe, where the troops could enjoy food and drinks
          </Typography>

          <Card>
            <CardMedia
              component="img"
              height="'30%'"
              src={barista}
              alt="Restaurant Logo"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                `The cafe initially served chicken, steak and drinks. Maximo's niece, Ruby, who managed the kitchen, created a special recipe for chicken that became an instant favorite for the GIs.
                Soon, the Filipino public heard about the delicious chicken-tender, juicy and crispy-and they came too! Max's Restaurant was born.`
              </Typography>
            </CardContent>
          </Card>

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontSize={35}
            fontFamily={"Poppins"}
            color="#000"
          >
            Delicacies
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: '100%',
              height: '70vh',
              position: 'flex'

            }


            }
          >
            <Container
              sx={{
                padding: 2,
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },

                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1,
                "&:hover": {
                  "& > div": {
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                  },
                },
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
                >
                  chicken
                </Typography>
                <CardCover
                  sx={{
                    position: "relative",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) '30%'px)",
                    border: "1px solid",
                    borderColor: "#777",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <Typography level="h2" fontSize="lg" textColor="#fff">
                    The Best
                  </Typography>
                </CardCover>
                <CardContent
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                    border: "1px solid",
                    borderColor: "#000",
                    backdropFilter: "blur(1px)",
                  }}
                >
                </CardContent>
              </Card>
            </Container>

            <Container
              sx={{
                padding: 2,
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1,
                "&:hover": {
                  "& > div": {
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                  },
                },
              }}
            >
              {/* second card */}

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
                >
                  Pastry
                </Typography>
                <CardCover
                  sx={{
                    position: "relative",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) '30%'px)",
                    border: "1px solid",
                    borderColor: "#777",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <Typography level="h2" fontSize="lg" textColor="#fff">
                    People's Choice
                  </Typography>
                </CardCover>
                <CardContent
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                    border: "1px solid",
                    borderColor: "#000",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={pastry1}
                    alt="Cafe Manna"
                    sx={{
                      width: "100%",
                      height: "30vh",
                    }}
                  />
                </CardContent>
              </Card>
            </Container>

            <Container
              sx={{
                padding: 2,
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1,
                "&:hover": {
                  "& > div": {
                    transform: "scale(1.05)",
                    transition: "transform 0.4s ease-in-out",
                  },
                },
              }}
            >
              {/* third card */}

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
                >
                  Americano
                </Typography>
                <CardCover
                  sx={{
                    position: "relative",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) '30%'px)",
                    border: "1px solid",
                    borderColor: "#777",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <Typography level="h2" fontSize="lg" textColor="#fff">
                    Max's Special
                  </Typography>
                </CardCover>
                <CardContent
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                    border: "1px solid",
                    borderColor: "#000",
                    backdropFilter: "blur(1px)",
                  }}
                >
                </CardContent>
              </Card>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
