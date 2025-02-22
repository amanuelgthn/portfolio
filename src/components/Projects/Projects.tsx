// src/components/Projects.js
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './projects.css'; // Ensure you have a CSS file for styling
import { title } from 'process';
interface ProjectCard {
  title: string,
  description: string,
  techStack: string,
  liveDemoLink: string,
  githubLink: string

}
const ProjectCard: ProjectCard = ({ title, description, techStack, liveDemoLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={`images/${title.toLowerCase().replace(/\s+/g, '-')}.png`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo <FaExternalLinkAlt />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'App Name',
      description: 'A mobile application for managing tasks.',
      techStack: ['React Native', 'Firebase'],
      liveDemoLink: 'https://appname.com',
      githubLink: 'https://github.com/johndoe/app-name'
    },
    {
      title: 'Website',
      description: 'A responsive website for a local business.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      liveDemoLink: 'https://website.com',
      githubLink: 'https://github.com/johndoe/website'
    },
    {
      title: 'Tool',
      description: 'A command-line tool for data analysis.',
      techStack: ['Python', 'AWS'],
      liveDemoLink: 'https://tool.com',
      githubLink: 'https://github.com/johndoe/tool'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;