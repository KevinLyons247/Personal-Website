import React from 'react';
import './Skills.css';

const Skills = () => {
  const programmingLanguages = ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'C'];
  const frameworks = ['React', 'Node.js'];
  const tools = ['Git', 'VS Code'];

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Programming Languages</h3>
            <div className="skill-tags">
              {programmingLanguages.map((lang, index) => (
                <span key={index} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Libraries & Frameworks</h3>
            <div className="skill-tags">
              {frameworks.map((framework, index) => (
                <span key={index} className="skill-tag highlight">{framework}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Software Tools</h3>
            <div className="skill-tags">
              {tools.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="coursework-section">
          <h3 className="coursework-title">Relevant Coursework</h3>
          <div className="coursework-list">
            <span>Object Oriented Programming 1 & 2</span>
            <span>Discrete Structures</span>
            <span>Calculus 1 & 2</span>
            <span>Mechanics</span>
            <span>Introduction to Computer Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

