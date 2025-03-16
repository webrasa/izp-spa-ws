import React from "react";
import {Link} from 'react-router-dom';

import './navbar.css'

function Navbar(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Početak</Link>
                </li>
                <li>
                    <Link to='/todo'>Zadaci</Link>
                </li>
                <li>
                    <Link to='/about'>O aplikaciji</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;