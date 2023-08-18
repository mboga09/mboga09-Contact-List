import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<body>
			<div className="container">
				<div className="d-flex justify-content-end" >
					<Link to="/demo">
						<button type="button" className="btn btn-light border-3 my-3" style={{ borderColor: "rgb(249,130,168)", borderRadius: "50px", color: "rgb(249,130,168)", backgroundColor: "white"}}>Add new contact</button>
					</Link>
				</div>
				<ul className="list-group">
					<li className="list-group-item p-3">
						<div className="row">
							<div className="col-2">
								<img className="rounded-circle shadow-4" alt="avatar2" src="https://i.pinimg.com/564x/fa/2f/d5/fa2fd58084e7f38b1e36021ac42c2a03.jpg" style={{ width: "150px" }} />
							</div>
							<div className="col-9">
								<h4 className="mb-3 mt-3">Full Name</h4>

								<div style={{ color: "grey" }}><i className="fa fa-map-pin me-3"></i> Address </div>
								<div style={{ color: "grey" }}><i className="fa fa-phone me-2"></i> Phone number</div>
								<div style={{ color: "grey" }}><i className="fa fa-envelope me-2"></i> Email address</div>


							</div>
							<div className="col-1 mt-3" style={{ color: "grey" }}>
								<button className="button-hover" type="button" style={{ backgroundColor: "white", border: "none" }}><i className="fa fa-pen" style={{ color: "grey" }}></i></button>
								<button className="button-hover ms-2" type="button" style={{ backgroundColor: "white", border: "none" }}><i className="fa fa-trash" style={{ color: "grey", float: "rignt" }}></i></button>
							</div>
						</div>
					</li>
				</ul>
				{/*<h1>La persona se llama {store.persona.nombre}</h1>
			<button onClick={() => { actions.setPersona() }}>Cambiar persona</button>*/}
			</div>
		</body>
	)
};
