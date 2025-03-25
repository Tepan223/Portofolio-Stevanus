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
                <nav><Link to="/about "className="navLink">About</Link></nav>
                <nav><Link to="/skills "className="navLink">Skills</Link></nav>
                <nav><Link to="/portfolio" className="navLink">Portfolio</Link></nav>
            </div>
        </div>
    );
}

export default Headers;
