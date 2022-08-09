import axios from "axios";
import "../Signup/styles.css";
import {Link} from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        age: "",
        stadt:"",
        email:"",
        password: ""
    });

    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
   

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const url = "http://localhost:3000/api/users";
            const {data:res} = await axios.post(url, data);
            setMsg(res.message);
         

        }catch(error){
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message);
                }

        }
    }


    return ( 
        <div className="login_container">
        <div className="login_form_container">
        <div className="left">
        <h1 className="topic">Gleich geht es los</h1>
        <Link to ="/login">
            <button type="button" className="white_btn">
                Einloggen
            </button>
        </Link>        
        </div>
        <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
                <h1>Registriere dich!</h1>
                <input type="text" placeholder="Vorname"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="input"
                />
                 <input type="text" placeholder="Nachname"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="input"
                />
                <input type="date" placeholder="Alter"
                name="age"
                onChange={handleChange}
                value={data.age}
                required
                className="input"
                />
                <input type="text" placeholder="Stadt"
                name="stadt"
                onChange={handleChange}
                value={data.stadt}
                required
                className="input"
                />
                 <input type="email" placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
                />
                 <input type="password" placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
                />
                {error && <div className="error_msg">{error}</div>}
                {msg && <div className="success_msg">{msg}</div>}
                <button type="submit" className="green_btn">
                    Erstellen
                </button>

            </form>
        </div>
        </div>
        </div>
    )
};

export default Signup;
