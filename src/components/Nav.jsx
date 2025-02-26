import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav(props) {

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="cats" onClick={() => props.setQuery("cats")}>Cats</NavLink></li>
                <li><NavLink to="dogs" onClick={() => props.setQuery("dogs")}>Dogs</NavLink></li>
                <li><NavLink to="computers" onClick={() => props.setQuery("computers")}>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
