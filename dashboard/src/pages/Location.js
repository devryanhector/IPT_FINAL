import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./Location.css";

function Location() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminID");

    // If there's an adminID and not on the admin page, redirect to admin
    if (storedAdmin && window.location.pathname !== "/admin") {
      navigate("/admin");
    }
  }, [navigate]);

  const googleMapLink =
    "https://www.google.com/maps/place/Max's+Restaurant/@16.4917995,121.1629445,14.77z/data=!4m14!1m7!3m6!1s0x3390457cad9da29f:0xc5d3f47c591ea7b4!2sMax's+Restaurant!8m2!3d16.4925!4d121.1629!16s%2Fg%2F11m_gw4rmc!3m5!1s0x3390457cad9da29f:0xc5d3f47c591ea7b4!8m2!3d16.4925!4d121.1629!16s%2Fg%2F11m_gw4rmc?entry=ttu";

  return (
    <div className="main">
      <Navigation />
      <h3>Location</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/place/Max's+Restaurant/@16.4917995,121.1629445,14.77z/data=!4m14!1m7!3m6!1s0x3390457cad9da29f:0xc5d3f47c591ea7b4!2sMax's+Restaurant!8m2!3d16.4925!4d121.1629!16s%2Fg%2F11m_gw4rmc!3m5!1s0x3390457cad9da29f:0xc5d3f47c591ea7b4!8m2!3d16.4925!4d121.1629!16s%2Fg%2F11m_gw4rmc?entry=ttu"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
          title="Max's Restaurant Location"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
      <Link to={googleMapLink} className="link">
        <div>
          <LocationOnIcon sx={{ fontSize: 30, marginRight: 1 }} />
          <span>
            National Highway, Bgy. Sta.Rosa, Bayombong Nueva Vizcaya,
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Location;