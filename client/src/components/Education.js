import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-header">
            <h3 className="education-school">University of Maryland</h3>
            <span className="education-location">College Park, MD</span>
          </div>
          <div className="education-details">
            <p className="education-degree">
              B.S. in Computer Science | GPA: 3.75
            </p>
            <p className="education-college">
              College of Computer, Mathematical, and Natural Sciences
            </p>
            <p className="education-date">Expected Graduation: May 2028</p>
            <div className="education-awards">
              <span className="award-badge">President's Scholarship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

