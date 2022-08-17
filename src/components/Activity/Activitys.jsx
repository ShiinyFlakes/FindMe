import React, { useEffect, useState } from "react";
import "./Activity.css";
import axios from "axios";
import Activity from "./Activity";
import { AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import { NavLink } from "react-router-dom";
import Freunde from "../../images/Freunde.jpg";


const URL = "http://localhost:3000/activitys";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Activitys = () => {
  const [value, setValue] = useState();

  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

  const [activitys, setActivitys] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setActivitys(data.activitys));
  }, []);
  console.log(activitys);
  return (
    <div style={{ backgroundImage: `url(${Freunde})`,
    backgroundPosition: "center", backgroundSize:"cover" }}>
      <nav className="navbar">
              <a style={{textDecoration: "none"}} href="/"><h1>FindMe</h1></a>
              <button className="white_btn" onClick={handleLogout}>
              Abmelden
              </button>
          </nav>
          <AppBar sx={{ backgroundColor: "#3bb19b"}} position="sticky">
        <Toolbar >
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"  
            value={1}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Aktivität erstellen" />
            <Tab LinkComponent={NavLink} to="/activitys" label="Aktivitäten" />
            <Tab LinkComponent={NavLink} to="/about" label="Über uns" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <ul>
        {activitys &&
          activitys.map((activity, i) => (
            <li key={i}>
              <Activity activity={activity} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Activitys;


