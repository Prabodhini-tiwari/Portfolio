import './about.css';
import { FaHtml5, FaCss3Alt, FaJava, FaJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from "react-icons/si";

function About() {

    const jsColor = {color:"yellow"}
    const htmlColor = {color:"red"}
    const cssColor = {color:"blue"}
    const reactColor = {color:"skyblue"}
    const tailColor = {color:"skyblue"}
    const exColor ={color:"black"}
    const gitColor = {color:"red"}
    const sColor = {color:"gray"}
    const javaColor = {color:"gold"}
    return (
        <section className="about-section">
            <h1>Learn More About Me</h1>
            <div className="AboveSection">
                <div className="leftContent">
                    <img src="src/assets/IMG-20240608-WA0065.jpg" alt="Profile" />
                </div>
                <div className="rightContent">
                    <h3>UI / Front End Developer</h3>
                    <p>
                        I'm a passionate front-end developer who loves building interactive web applications. My skills in HTML, CSS, JavaScript, and React enable me to turn creative ideas into seamless digital experiences.
                    </p>
                    <p>
                        Outside of coding, I enjoy discovering new music and connecting with friends. I believe that collaboration fuels innovation and leads to extraordinary results.
                    </p>
                    <p>
                        Let’s connect and create something amazing together!
                    </p>
                </div>
            </div>
            <br />

            <div className="BelowSection">
                <ul>
                    <li><FaHtml5 style={htmlColor} /> HTML5</li>
                    <li><FaCss3Alt style={cssColor}/> CSS</li>
                    <li><FaJs style={ jsColor  }/> JavaScript</li>
                    <li><FaReact style={reactColor}/> React JS</li>
                    <li><FaJava  style={javaColor}/> Java</li>
                    <li><SiTailwindcss style={tailColor}/> Tailwind CSS</li>
                    <li><SiExpress style={exColor} /> Express JS</li>
                    <li><FaDatabase style={sColor} /> SQL</li>
                    <li><FaGitAlt  style={gitColor }/> Git</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
