import React from 'react';
import '../styles/Specifications.css';

const specifications = [
  { icon: "📏", label: "Moving Speed", value: "0.2 - 0.8 m/s" },
  { icon: "🧲", label: "Load Capacity", value: "60 kg" },
  { icon: "🔍", label: "Sensor", value: "LIDAR" },
  { icon: "🔋", label: "Battery", value: "37V / 10Ah" },
  { icon: "🛠️", label: "Material", value: "Aluminum Alloy" },
];

const Specifications = () => {
  return (
    <section id="specifications" className="specifications">
      <h2>Technical Specifications</h2>
      <ul className="spec-list">
        {specifications.map((spec, index) => (
          <li key={index} className="spec-item">
            <span className="icon">{spec.icon}</span>
            <span className="label">{spec.label}:</span>
            <span className="value">{spec.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specifications;
