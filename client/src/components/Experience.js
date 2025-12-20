import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Gong Cha',
      location: 'Bel Air, MD',
      position: 'Barista',
      period: 'August 2023 – August 2025',
      bullets: [
        'Prepared customized tea and beverage orders in a fast-paced, customer-facing environment',
        'Managed point-of-sale transactions with accuracy and efficiency',
        'Maintained a clean, organized workspace while supporting team operations during peak hours'
      ]
    },
    {
      company: 'Johns Hopkins Hospital',
      location: 'Timonium, MD',
      position: 'Shadowing Student',
      period: 'June 2023 – August 2023',
      bullets: [
        'Observed physicians and medical staff to understand hospital operations and patient care workflows',
        'Completed 50+ hours of clinical observation across specialties including allergy and immunology',
        'Gained exposure to professional standards, interdisciplinary collaboration, and clinical environments'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">{exp.company}</h3>
                  <p className="experience-position">{exp.position}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

