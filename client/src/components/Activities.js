import React from 'react';
import './Activities.css';

const Activities = () => {
  const activities = [
    {
      organization: 'Hospital Volunteer, University of Maryland Upper Chesapeake Medical Center',
      location: 'Bel Air, MD',
      role: 'Volunteer',
      period: 'December 2023 – Present',
      bullets: [
        'Assist hospital staff with non-clinical support tasks to improve patient and visitor experience',
        'Interact with patients and families in a professional, compassionate environment',
        'Follow confidentiality, safety, and organizational protocols in a healthcare setting'
      ]
    },
    {
      organization: 'Vietnamese Student Association (VSA), University of Maryland',
      location: 'College Park, MD',
      role: 'Member',
      period: '2023 – Present',
      bullets: [
        'Engage in cultural and social events to promote Vietnamese heritage and community on campus',
        'Collaborate with peers to foster connections and cross-cultural understanding'
      ]
    },
    {
      organization: 'Varsity & Intramural Athletics',
      location: 'Bel Air, MD',
      role: 'Athlete',
      period: '2019 – 2024',
      bullets: [
        'Competed in team and individual sports while balancing academic responsibilities',
        'Developed discipline, teamwork, and time management through competitive athletics'
      ]
    }
  ];

  return (
    <section className="activities" id="activities">
      <div className="section-container">
        <h2 className="section-title">Activities</h2>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-header">
                <div>
                  <h3 className="activity-organization">{activity.organization}</h3>
                  <p className="activity-role">{activity.role}</p>
                </div>
                <div className="activity-meta">
                  <span className="activity-location">{activity.location}</span>
                  <span className="activity-period">{activity.period}</span>
                </div>
              </div>
              <ul className="activity-bullets">
                {activity.bullets.map((bullet, bulletIndex) => (
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

export default Activities;

