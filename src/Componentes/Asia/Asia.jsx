import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header"
import "./Asia.css";

function AsiaApp() {
	return (
		<div className="asia">
			<div>
				<h1>Página Ásia</h1>
			</div>
			<div>
				<Route exact path="/asia" render={() => <Header />}></Route>
			</div>
		</div>
	);
}

export default AsiaApp;