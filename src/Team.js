import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Yash Awasthi', role: 'Software Engineer' },
  { name: 'Parmeet Singh', role: 'Mechanical Engineer' },
  { name: 'Aamna Umar', role: 'Mechanical Developer' },
  { name: 'Manibha Sood', role: 'Electrical Engineer' },
];

function Team() {
  return (
    <div className="team">
      <h2>Meet Our Team</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Team;
