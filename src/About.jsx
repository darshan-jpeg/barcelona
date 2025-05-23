import React from 'react';
import './About.css';

function About() {
  return (
    < section id = "home" className="about-container">
      <h2>Latest News</h2>
      <div className="news-grid">
        <div className="news-item">News Item 1</div>
        <div className="news-item">News Item 2</div>
        <div className="news-item">News Item 3</div>
        <div className="news-item">News Item 4</div>
        {/* Add more news-item divs as needed */}
      </div>
    </section>
  );
}

export default About;