import {Button, Checkbox, FormControlLabel, FormLabel, TextField} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import { NavLink } from "react-router-dom";
  
  const AddActivity = () => {
    const [value, setValue] = useState();
   
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      kategorie: "",
      ort: "",
      personen: "",
      beschreibung: "",
      available: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:3000/activitys", {
          kategorie: String(inputs.kategorie),
          ort: String(inputs.ort),
          personen: Number(inputs.personen),
          beschreibung: String(inputs.beschreibung),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/activitys"));
    };
    
   const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
  };
    return (
      <div>
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
      <h1 style={{textAlign:"center",
    color:"#3bb19b"}}>Erstelle eine Aktivität!</h1>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Kategorie</FormLabel>
          <TextField
            value={inputs.kategorie}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="kategorie"
          />
          <FormLabel>Ort</FormLabel>
          <TextField
            value={inputs.ort}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="ort"
          />
          <FormLabel>Personen</FormLabel>
          <TextField
            value={inputs.personen}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="personen"
          />
          <FormLabel>Beschreibung</FormLabel>
          <TextField
            value={inputs.beschreibung}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="beschreibung"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Aktiv"
          />
  
          <Button style={{backgroundColor: "#3bb19b"}} variant="contained" type="submit">
            Aktivität erstellen
          </Button>
        </Box>
      </form>
      </div>
    );
  };
  
  export default AddActivity;




  