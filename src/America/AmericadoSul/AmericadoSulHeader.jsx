import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<ul>
				<li><Link to="/">MENU</Link></li>
				<li><Link to="/america">VOLTAR</Link></li>
				<li><Link to="#">PATAGÔNIA</Link></li>
				<li><Link to="#">CORDILHEIRA DOS ANDES</Link></li>
				<li><Link to="#">CARTAGENA-COLÔMBIA</Link></li>
				<li><Link to="/america/americadosul/pantanal">PANTANAL</Link></li>
				<li><Link to="#">VULCÃO QUILOTOA-EQUADOR</Link></li>
				</ul>
			</nav>
		</div>
	);
}