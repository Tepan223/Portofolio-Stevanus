import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../Style/Headers.css";

function Headers() {
    const headerRef = useRef(null);
    const navLinksRef = useRef([]);

    useEffect(() => {
        gsap.from(headerRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(navLinksRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
        });
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <div className="name-head">
                <p className="name-head-p">Stevanus Gabriel.</p>
            </div>
            <div className="link">
                {["/", "/about&skills", "/project", "/contact"].map((path, index) => (
                    <nav key={index}>
                        <Link 
                            to={path} 
                            className="navLink" 
                            ref={el => (navLinksRef.current[index] = el)}
                        >
                            {path.replace("/", "").replace("&", " & ") || "Home"}
                        </Link>
                    </nav>
                ))}
            </div>
        </div>
    );
}

export default Headers;
