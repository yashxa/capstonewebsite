import React from 'react';
import '../styles/Team.css';

const Team = () => {
  return (
    <section id="team" className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="member">
          <p>Yash Awasthi</p>
          <p>Software Developer</p>
        </div>
        <div className="member">
          <p>Parmeet Singh</p>
          <p>Mechanical Engineer</p>
        </div>
        <div className="member">
          <p>Aamna Umar</p>
          <p>Hardware Specialist</p>
        </div>
        <div className="member">
          <p>Manibha Sood</p>
          <p>Electronics Engineer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
