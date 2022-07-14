import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const ActivityDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:3000/activitys/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.activity));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:3000/activitys/${id}`, {
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
      sendRequest().then(() => history("/activitys"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.reload();
  };
    return (
      <div>
        <nav className="navbar">
            <a style={{textDecoration: "none"}} href="/">
                <h1>FindMe</h1></a>
                <button className="white_btn" onClick={handleLogout}>
                Abmelden
                </button>
            </nav>
        {inputs && (
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
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
  
              <Button style={{backgroundColor: "#3bb19b"}} variant="contained" type="submit">
                Aktivität aktualisieren
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default ActivityDetail;
  