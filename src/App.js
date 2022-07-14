import {Route, Routes, Navigate} from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import React from "react";
import Home from "./components/Home";
import AddActivity from "./components/AddActivity";
import Activitys from "./components/Activity/Activitys";
import About from "./components/About";
import ActivityDetail from "./components/Activity/ActivityDetail";
//import Header from "./components/Header";

function App() {

  const user = localStorage.getItem("token");

  return (
	<React.Fragment>	
    <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/home" exact element={<Home />} />}
			{user && <Route path="/add" exact element={<AddActivity />} />}
			{user &&<Route path="/activitys" exact element={<Activitys />} />}
			{user && <Route path="/about" exact element={<About />} />}
			{user && <Route path="/activitys/:id" exact element={<ActivityDetail />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} /> 
		</Routes>
  </React.Fragment>
  );
}

export default App;
