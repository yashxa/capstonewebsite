import React from 'react';
import '../styles/DesignProcess.css';

const DesignProcess = () => {
  return (
    <section id="design-process" className="design-process">
      <h2>Design Process</h2>
      <div>
        <h3>First Design Solution</h3>
        <p>Simple drawer mechanism but stability issues due to weight distribution.</p>
      </div>
      <div>
        <h3>Second Design Solution</h3>
        <p>Improved center of gravity; accessibility challenges remain.</p>
      </div>
      <div>
        <h3>Third Design Solution</h3>
        <p>Refined stability, security, and accessibility for user-friendly experience.</p>
      </div>
    </section>
  );
};

export default DesignProcess;
