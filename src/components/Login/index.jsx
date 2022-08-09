import axios from "axios";
import "../Login/styles.css";
import {Link} from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        email:"",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const url = "http://localhost:3000/api/auth";
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";

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
        <form className="form_container" onSubmit={handleSubmit}>
        <h1 className="heading1">FindMe! <br></br>Melde dich jetzt an</h1>
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
                <button type="submit" className="green_btn">
                    Anmelden
                </button>

            </form>
        </div>
        <div className="right">
        <h1 style={{textAlign:"center"}}>Herzlich Willkommen auf FindMe!</h1>
        <h1>Neu hier?</h1>
        <Link to ="/signup">
            <button type="button" className="white_btn">
                Jetzt registrieren!
            </button>
        </Link>        
            
        </div>
        </div>
        </div>
    )
};

export default Signup;
