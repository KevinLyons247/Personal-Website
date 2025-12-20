import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a Computer Science student at the University of Maryland, College Park, 
            with a passion for software development and machine learning. Currently pursuing 
            my B.S. in Computer Science with a GPA of 3.75, I'm actively developing skills 
            in web development, data science, and software engineering.
          </p>
          <p className="about-text">
            My experience ranges from building web applications using React and Node.js to 
            developing machine learning models for predictive analytics. I'm always eager to 
            learn new technologies and tackle challenging problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

