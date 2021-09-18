import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./PantanalHeader";

function PantanalApp() {
	return (
		<div className="App">
			<div>
				<h1>Página Pantanal</h1>
			</div>
			<main>
				<Switch>
					<Route
						exact
						path="/america/americadosul/pantanal"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
		</div>
	);
}

export default PantanalApp;