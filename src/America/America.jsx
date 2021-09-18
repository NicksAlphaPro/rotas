import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./AmericaHeader";
import "./America.css";

function AmericaApp() {
	return (
		<div className="America">
			<div>
				<h1>Página América</h1>
			</div>
			<div>
				<Switch>
					<Route exact path="/america" render={() => <Header />}
					></Route>
				</Switch>
			</div>
		</div>
	);
}

export default AmericaApp;