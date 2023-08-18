import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-4 p-4 px-5" style={{ backgroundColor: "white", borderRadius: "25px"}}>
			<h3 className="text-center" style={{ color: "rgb(249,130,168)" }}>Add a new contact</h3>
			<form>
				<div className="form-group mb-3">
					<label for="exampleInputEmail1 mb-4">Full name</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name"></input>
				</div>
				<div className="form-group mb-3">
					<label for="exampleInputEmail1 mb-4">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
				</div>
				<div className="form-group mb-3">
					<label for="exampleInputEmail1 mb-4">Phone</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone"></input>
				</div>
				<div className="form-group">
					<label for="exampleInputEmail1 mb-4">Address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address"></input>
				</div>
			</form>
			<button type="button" className="btn btn-light mt-3" style={{ width: "100%", backgroundColor: "rgb(244,228,212)", color: "grey" }}>Save</button>
			<Link to="/">
				<p className="mt-2" style={{ color: "rgb(249,130,168)"}}>Or get back to Contact List</p>
			</Link>
		</div>
	);
};
