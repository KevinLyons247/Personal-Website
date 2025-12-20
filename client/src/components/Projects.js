import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'NFL Game Outcome Prediction Model',
      tech: ['Python', 'Machine Learning'],
      period: 'Winter 2025 – Present',
      description: [
        'Developing an exploratory machine learning project to predict NFL game outcomes using historical data',
        'Performing feature engineering on team statistics, game context, and seasonal trends',
        'Training baseline models (e.g., logistic regression) and evaluating predictive performance',
        'Documenting results, limitations, and next steps to guide iterative improvement'
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>
              <ul className="project-description">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

