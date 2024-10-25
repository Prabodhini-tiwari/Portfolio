// components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import './Layout.css';

function Layout({ children }) {
    return (
        <div>
            <nav className="layout-navbar">

                <h1>Prabodhini Tiwari</h1>

                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>

                <div className="cv-link">
                    <a href="">Download CV</a>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
