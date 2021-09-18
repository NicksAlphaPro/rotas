import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/">INÍCIO</Link> </li>
                    <li> <Link to="/america">AMÉRICA</Link></li>
                    <li> <Link to="/asia">ÁSIA</Link></li>
                    <li> <Link to="/oceania">OCEANIA</Link></li>
                    <li> <Link to="/antartica">ANTÁRTICA</Link></li>
                    <li> <Link to="/europa">EUROPA</Link></li>
                </ul>
            </nav>
        </div>
    )
}