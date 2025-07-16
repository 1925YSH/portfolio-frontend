import React, { useEffect, useState } from 'react';
import './Projects.css';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio-backend-lsbg.onrender.com/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <img src={`https://portfolio-backend-lsbg.onrender.com/${project.image.replace(/\\/g, '/')}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
