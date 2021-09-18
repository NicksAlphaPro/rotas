import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header"
import "./Antartica.css";

function AntarticaApp() {
	return (
		<div className="antartica">
			<div>
			<div>
				<h1>Página Antártica</h1>
			</div>
				<Switch>
					<Route
						exact
						path="/antartica"
						render={() => <Header />}
					></Route>
				</Switch>
			</div>
		</div>
	);
}

export default AntarticaApp;