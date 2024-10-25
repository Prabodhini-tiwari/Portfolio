import React, { useState } from 'react';
import './contacts.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contacts() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="contact-section">
            <div className="containers">
                <h1>Connect with Me!</h1>
                <p>Don't be shy! I'd love to hear from you.</p>

                <div className="card">
                    <div className="email"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        
                        
                        <FaEnvelope className="icon" />
                        <a href="mailto:prabodhinitiwari11@gmail.com" className="email-link">
                            prabodhinitiwari11@gmail.com
                        </a>
                        {isHovered && <span className="tooltip">Click to send an email!</span>}
                    </div>

                    <div className="social-links">
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/Prabodhini-tiwari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/prabodhini-tiwari-20a2a4178/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon">
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
