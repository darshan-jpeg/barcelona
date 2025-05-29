import React, { useState } from 'react';
import './About.css';

function About() {
  const newsItems = [
    'News Item 1',
    'News Item 2',
    'News Item 3',
    'News Item 4',
    // Add more news items as needed
  ];
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 1;
  const endIdx = startIdx + visibleCount;
  const canGoLeft = startIdx > 0;
  const canGoRight = endIdx < newsItems.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <section id="home" className="about-container">
      <h2>Latest News</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '2.5rem' }}>
        <button onClick={handleLeft} disabled={!canGoLeft} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoLeft ? 'pointer' : 'not-allowed', opacity: canGoLeft ? 1 : 0.3 }}>&lt;</button>
        <div className="news-grid" style={{ width: '900px', justifyContent: 'center', display: 'flex' }}>
          {newsItems.slice(startIdx, endIdx).map((item, idx) => (
            <div className="news-item" key={startIdx + idx}>{item}</div>
          ))}
        </div>
        <button onClick={handleRight} disabled={!canGoRight} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoRight ? 'pointer' : 'not-allowed', opacity: canGoRight ? 1 : 0.3 }}>&gt;</button>
      </div>
    </section>
  );
}

export default About;