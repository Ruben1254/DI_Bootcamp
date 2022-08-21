import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper">
                <Link to="/">My Blog</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}