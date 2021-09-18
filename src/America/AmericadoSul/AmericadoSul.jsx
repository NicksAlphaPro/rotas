import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./AmericadoSulHeader";

function AmericadoSulApp() {
	return (
		<div className="App">
			<div>
				<h1>Página América do Sul</h1>
			</div>
			<main>
				<Switch>
					<Route
						exact
						path="/america/americadosul"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
		</div>
	);
}

export default AmericadoSulApp;