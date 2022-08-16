import { Button, Checkbox, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Activity.css";
const Activity = (props) => {
  const history = useNavigate();

  const { _id, kategorie, ort, personen, beschreibung, available} = props.activity;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3000/activitys/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/activitys"));
  };

  return (
    <div className="card" style={{ color:"white" }}>
      <article>In {ort}</article>
      <h3>Kategorie {kategorie}</h3>
      <h3>Beschreibung:</h3> <p>{beschreibung}</p>
      <h3>Anzahl Personen: {personen}</h3>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Löschen
      </Button>
      <Button LinkComponent={Link} to={`/activitys/${_id}`} sx={{ mt: "auto", background: "#157c69" }} variant="primary">
        Aktualisieren
      </Button>
      <Button
          //onClick={Aktivität ins Profil pushen}
          sx={{background: "#3bb19b" }}
          variant="primary"
        >
          <Typography variant="h6">Jetzt teilnehmen!</Typography>
        </Button>
    </div>
  );
};

export default Activity;
