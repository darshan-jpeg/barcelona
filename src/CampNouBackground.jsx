import React from 'react';
import './CampNouBackground.css';

const CampNouBackground = () => {
  return (
    <div className="background-container">
      {/* Stadium Lights */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`light light-${i + 1}`}></div>
      ))}

      {/* Camp Nou Silhouette SVG */}
      <svg
        className="campnou-silhouette"
        viewBox="0 0 500 150"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#0073e6"
        strokeWidth="2"
      >
        <rect x="20" y="80" width="460" height="40" rx="10" ry="10" />
        <path d="M 20 80 Q 40 50 80 80" />
        <path d="M 420 80 Q 460 50 480 80" />
        <line x1="100" y1="80" x2="100" y2="40" />
        <line x1="140" y1="80" x2="140" y2="40" />
        <line x1="180" y1="80" x2="180" y2="40" />
        <line x1="220" y1="80" x2="220" y2="40" />
        <line x1="260" y1="80" x2="260" y2="40" />
        <line x1="300" y1="80" x2="300" y2="40" />
        <line x1="340" y1="80" x2="340" y2="40" />
        <line x1="380" y1="80" x2="380" y2="40" />
        <line x1="420" y1="80" x2="420" y2="40" />
      </svg>
    </div>
  );
};

export default CampNouBackground;
