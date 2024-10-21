import './resume.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Icons for experience and education

function Resume() {
    return (
        <div className="resume-section">
            <h1>Resume</h1>

            {/* Experience Section */}
            <div className="experience-section">
                <h2><FaBriefcase /> Professional Experience</h2>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <div className="experience-date">June 2023 - October 2024</div>
                        <div className="experience-content">
                            <h3>Front-End Developer</h3>
                            <span>Capgemini</span>
                            <p>
                                Built interactive web applications using React, JavaScript, HTML, and CSS. Worked with teams to deliver seamless user experiences.
                            </p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-date">November 2022 - May 2023</div>
                        <div className="experience-content">
                            <h3>Functional Consultant</h3>
                            <span>Capgemini</span>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="education-section">
                <h2><FaGraduationCap /> Education</h2>
                <div className="education-timeline">
                    <div className="education-item">
                        <div className="education-date">2018 - 2021</div>
                        <div className="education-content">
                            <h3>Bachelor of Technology(BTech) in Civil Engineering</h3>
                            <span>Jabalpur Engineering college Jabalpur</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
