// components/MobileLayout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './Mobile.css'; // Ensure you have this CSS file for styling

function MobileLayout({ children }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="mobile-layout">
            {/* Toggle Button */}
            <button className="nav-toggle" onClick={toggleNav}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navbar */}
            <nav className={`mobile-navbar ${isNavOpen ? 'active' : ''}`}>
                <h1>Prabodhini Tiwari</h1>
                <ul>
                    <li><Link to="/home" onClick={() => setIsNavOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
                    <li><Link to="/resume" onClick={() => setIsNavOpen(false)}>Resume</Link></li>
                    <li><Link to="/projects" onClick={() => setIsNavOpen(false)}>Projects</Link></li>
                    <li><Link to="/contacts" onClick={() => setIsNavOpen(false)}>Contacts</Link></li>
                </ul>
                <div className="cv-link">
                    <a href="">Download CV</a>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}

export default MobileLayout;
