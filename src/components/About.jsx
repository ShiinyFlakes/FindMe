import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./about.css";
import Freunde from "../../src/images/Freunde.jpg";


const About = () => {
  const [value, setValue] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

  return (
    <div style={{ backgroundImage: `url(${Freunde})`,
    backgroundPosition: "center", backgroundSize:"cover" }}>
    <div>
      <nav  className="navbar">
      <a style={{textDecoration: "none"}} href="/">
      <h1>FindMe</h1></a>
                <button className="white_btn" onClick={handleLogout}>
                Abmelden
                </button>
            </nav>
            <AppBar sx={{ backgroundColor: "#3bb19b"}} position="sticky">
        <Toolbar  >
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="white"
            value={1}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Aktivität erstellen" />
            <Tab LinkComponent={NavLink} to="/activitys" label="Aktivitäten" />
            <Tab LinkComponent={NavLink} to="/about" label="Über uns" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box  display="flex" flexDirection="column" alignItems="center">
        <Typography  sx={{ fontFamily: "fantasy", color: "#3bb19b" }} variant="h2">
          Full-Stack MERN Application
          By Kawan Osei Mago
        </Typography>
        <Button
          LinkComponent={Link}
          to="/activitys"
          sx={{ marginTop: 15, background: "#3bb19b" }}
          variant="primary"
        >
          <Typography variant="h3">Zu den Aktivitäten</Typography>
        </Button>
      </Box>
    </div>
    </div>
  );
};

export default About;
