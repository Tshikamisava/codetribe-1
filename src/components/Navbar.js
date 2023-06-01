import React from "react";
import { Link } from "react-router-dom";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "./styles.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container">
            <h1 className='logo'>Natasha</h1>

            <ul className="nav-links">
                <li>portfolio</li>
                <li>about me</li>
                <li>myblog</li>
                <li>reviews</li>
                <li>contact me</li>

            </ul>
            </div>
        </nav>
    )
}
export default Navbar