import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import './home.css';

function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="container">
            <h1>Prabodhini Tiwari</h1>
            <h2>I'm a Front End Developer</h2>

            {/* Toggle Button */}
            <button className="nav-toggle" onClick={toggleNav}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav id="navbar" className={`navbar ${isNavOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/home" onClick={() => setIsNavOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/resume" onClick={() => setIsNavOpen(false)}>Resume</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => setIsNavOpen(false)}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contacts" onClick={() => setIsNavOpen(false)}>Contacts</Link>
                    </li>
                </ul>
            </nav>

            <div className="cv-link">
                <a href="">Download CV</a>
            </div>
            <div className="Social-links">
                <ul>
                    <li>
                        <a href="https://github.com/Prabodhini-tiwari" target="_blank" rel="noopener noreferrer">
                            <div className="outer">
                                <FaGithub />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/prabodhini-tiwari-20a2a4178/" target="_blank" rel="noopener noreferrer">
                            <div className="outer">
                                <FaLinkedin />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
