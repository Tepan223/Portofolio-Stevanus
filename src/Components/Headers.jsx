import React from "react";
import { Link } from "react-router-dom";
import '../Style/Headers.css'

function Headers() {
    return (
        <div className="header">
            <div className="name-head">
                <p className="name-head-p">Stevanus Gabriel.</p>
            </div>
            <div className="link">
                <nav><Link to="/" className="navLink">Home</Link></nav>
                <nav><Link to="/about&skills "className="navLink">About & Skills</Link></nav>
                <nav><Link to="/project" className="navLink">Project</Link></nav>
                <nav><Link to="/Contact" className="navLink">Contact</Link></nav>
            </div>
        </div>
    );
}

export default Headers;
