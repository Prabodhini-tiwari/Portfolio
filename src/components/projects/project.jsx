import React from "react";
import "./project.css"; 
 

const Projects = () => {
    return (
        <div className="project-section">
            <div className="projects-container">
                <h2>Projects</h2>
                <ul className="project-list">
                    <li className="project-item">
                        <img src="/assets/RecipeImage.jpg" className="project-image" alt="Recipe Vault" />
                        <h3 className="project-title">Recipe Vault</h3>
                        <a href="https://live-demo-recipe-vault.com" target="_blank" className="demo-link">Live Demo</a>
                    </li>
                    <li className="project-item">
                        <img src="/assets/PasswordGenrator.jpg" className="project-image" alt="Password Generator" />
                        <h3 className="project-title">Password Generator</h3>
                        <a href="https://live-demo-password-generator.com" target="_blank" className="demo-link">Live Demo</a>
                    </li>
                    <li className="project-item">
                        <img src="/assets/StopWatch.jpg" className="project-image" alt="Stop Watch" />
                        <h3 className="project-title">Stop Watch</h3>
                        <a href="https://live-demo-stopwatch.com" target="_blank" className="demo-link">Live Demo</a>
                    </li>
                    <li className="project-item">
                        <img src="/assets/todoImg.jpg" className="project-image" alt="Todo App" />
                        <h3 className="project-title">Todo App</h3>
                        <a href="https://live-demo-todo-app.com" target="_blank" className="demo-link">Live Demo</a>
                    </li>
                     
                    
                </ul>
            </div>
        </div>
    );
};

export default Projects;
