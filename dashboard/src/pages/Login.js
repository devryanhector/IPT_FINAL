import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import cmLogo from "./images/logo_04.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/login", {
        email,
        password,
      });
      setMessage(response.data.message);

      if (response.data.success) {
        window.location.href = "/menu";
      }
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Error logging in"
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            fontFamily={"Poetson"}
            fontWeight={"700"}
          >
            Admin Login
          </Typography>
          <Container
            fixed
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "10vh",
                width: "80px",
                backgroundImage: `url(${cmLogo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            />
          </Container>

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "30%",
                bgcolor: "#30120B",
                "&:hover": {
                  bgcolor: "#89522F",
                },
              }}
            >
              Login
            </Button>
          </form>
          {message && (
            <Typography
              color="error"
              variant="body1"
              align="center"
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              width: "30%",
              mt: 1,
              bgcolor: "#30120B",
              "&:hover": {
                bgcolor: "#89522F",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Login;
