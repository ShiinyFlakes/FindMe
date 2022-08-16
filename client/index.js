import "../Main/styles.css";
import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import Freunde from "../../images/Freunde.jpg";

const Main = () => {
  const [value, setValue] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="main_container">
      <nav className="navbar">
        <a style={{ textDecoration: "none" }} href="/">
          <h1>FindMe</h1>
        </a>
        <button className="white_btn" onClick={handleLogout}>
          Abmelden
        </button>
      </nav>
      <div className="content">
        <AppBar
          style={{
            backgroundImage: `url(${Freunde})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          position="sticky"
        >
          <Toolbar>
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="white"
              value={1}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                LinkComponent={NavLink}
                to="/add"
                label="Aktivität erstellen"
              />
              <Tab
                LinkComponent={NavLink}
                to="/activitys"
                label="Aktivitäten"
              />
              <Tab LinkComponent={NavLink} to="/about" label="Über uns" />
            </Tabs>
          </Toolbar>
          <div className="transparent">
            <h4 style={{ textAlign: "center" }}>Willkommen auf FindMe</h4>
          </div>
          <Button
            LinkComponent={Link}
            to="/activitys"
            sx={{ background: "#55f1d4" }}
            variant="contained"
          >
            <Typography variant="h3">Zu den Aktivitäten</Typography>
          </Button>
        </AppBar>
      </div>
    </div>
  );
};

export default Main;
