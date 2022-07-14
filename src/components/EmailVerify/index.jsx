import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../images/success.png";
import "../EmailVerify/styles.css";
import { Fragment } from "react";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:3000/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			{validUrl ? (
				<h1>404 Not Found</h1>
			) : (
				<div className="container">
					<img src={success} alt="success_img" className="success_img" />
					<h1>Email erfolgreich verifiziert</h1>
					<Link to="/login">
						<button className="green_btn">Login</button>
					</Link>
				</div>
			)}
		</Fragment>
	);
};

export default EmailVerify;