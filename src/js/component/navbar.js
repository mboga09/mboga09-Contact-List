import React from "react";
import { Link } from "react-router-dom";

import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light navbar-custom py-3">
			<div className="container">
			<Link to="/">
				<span className="navbar-brand h1 titulo" style={{ fontSize: "35px"}}>Contact List</span>
			</Link>
			</div>
		</nav>
	);
};
