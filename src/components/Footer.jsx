import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <div className={props.match.params.id === "Quiz" ? "footer-absolute" : "footer"}>
            <a href="https://github.com/jeremy-cellier" target="_blank" rel="noreferrer"><img className="profilePic" src="https://avatars3.githubusercontent.com/u/34096584?s=64&v=4" alt="icon-jeremy" /></a>
            <a href="https://github.com/JuliaRME" target="_blank" rel="noreferrer"><img className="profilePic" src="https://avatars1.githubusercontent.com/u/69920718?s=64&v=4" alt="icon-julia" /></a>
            <a href="https://github.com/LafondMael" target="_blank" rel="noreferrer"><img className="profilePic" src="https://avatars2.githubusercontent.com/u/71012200?s=64&v=4" alt="icon-mael" /></a>
            <a href="https://github.com/Maxence-P" target="_blank" rel="noreferrer"><img className="profilePic" src="https://avatars0.githubusercontent.com/u/70519421?s=460&v=4" alt="icon-maxence" /></a>
        </div>
    )
}

export default Footer;