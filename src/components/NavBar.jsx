import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {

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
            <Link to="/"><button className={props.match.params.id === undefined ? "linkNavbar linkNavbarActive" : "linkNavbar"}>Home</button></Link>
            <Link to="/Quiz/1"><button className={props.match.params.id === "1" ? "linkNavbar linkNavbarActive" : "linkNavbar"}>Quiz</button></Link>
            <Link to="/Globe/2"><button className={props.match.params.id === "2" ? "linkNavbar linkNavbarActive" : "linkNavbar"}>Globe</button></Link>
        </div>
    )
}

export default NavBar;