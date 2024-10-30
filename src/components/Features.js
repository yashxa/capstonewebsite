import React from 'react';
import '../styles/Features.css';

const features = [
  { title: "QR Code Identification", description: "Efficient package pickup using QR codes." },
  { title: "Variable Moving Speed", description: "Adjustable speeds from 0.2 to 0.8 m/s." },
  { title: "Load Capacity", description: "Can carry loads up to 60 kg." },
  { title: "LIDAR Navigation", description: "Advanced LIDAR sensor for precise navigation." },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Robot Features</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
