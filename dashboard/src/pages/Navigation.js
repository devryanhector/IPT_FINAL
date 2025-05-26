import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import cmnobg from "./images/logo_04.png";

const Navigation = () => {
  const location = useLocation();

  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { color: "#BD8C4C", fontWeight: "bold" }
      : { color: "#30120B" };
  };

  return (
    <nav className="navbar">
      <React.Fragment>
        <CssBaseline />

        <Container
          fixed
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box
            sx={{
              height: "10vh",
              width: "80px",
              backgroundImage: `url(${cmnobg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <RouterLink
            to="/login"
            className="Max's"
            style={{ ...getNavLinkStyle("/login"), color: "#ffffff" }}
          >
            Max's
          </RouterLink>
          <RouterLink
            to="/login"
            className="Restuarant"
            style={{ ...getNavLinkStyle("/login"), color: "#ffffff" }}
          >
            Restaurant
          </RouterLink>
        </Container>
      </React.Fragment>

      <RouterLink to="/" className="nav-link" style={getNavLinkStyle("/")}>
        HOME
      </RouterLink>
      <RouterLink
        to="/about"
        className="nav-link"
        style={getNavLinkStyle("/about")}
      >
        ABOUT
      </RouterLink>
      <RouterLink
        to="/menuuser"
        className="nav-link"
        style={getNavLinkStyle("/menuuser")}
      >
        MENU
      </RouterLink>
      <RouterLink
        to="/location"
        className="nav-link"
        style={getNavLinkStyle("/location")}
      >
        LOCATION
      </RouterLink>

    </nav>
  );
};

export default Navigation;
