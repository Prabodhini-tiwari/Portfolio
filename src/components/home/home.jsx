import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './home.css'

function Home() {
    return (
        <div className="container">
            <h1>Prabodhini Tiwari</h1>
            <h2>I'm a Front End Developer</h2>

            <nav id="navbar" className="navbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/Resume">Resume</Link>
                    </li>

                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>

                    <li>
                        <Link to="/Contacts">Contacts</Link>
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
    )
}

export default Home;