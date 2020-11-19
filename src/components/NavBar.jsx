import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    const [scroll, changeScroll] = useState(false);

    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            changeScroll(true);
        } else {
            changeScroll(false);
        };
    };

    return (
        <div className={scroll ? "navbar-scroll" : "navbar"}>
            <Link to="/"><button className="linkNavbar">Home</button></Link>
            <Link to="/Quiz"><button className="linkNavbar">Quiz</button></Link>
        </div>
    )
}

export default NavBar;