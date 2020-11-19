import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/"><button className="linkNavbar">Home</button></Link>
            <Link to="/Quiz"><button className="linkNavbar">Quiz</button></Link>
        </div>
    )
}

export default NavBar;