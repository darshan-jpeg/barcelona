import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [newsItems, setNewsItems] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    fetch('http://localhost:5000/api/content/News')
      .then(res => res.json())
      .then(data => {
        if (data.success) setNewsItems(data.items);
      })
      .catch(console.error);

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance news every 5 seconds
  useEffect(() => {
    if (showWelcome || newsItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx(idx => (idx + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showWelcome, newsItems]);

  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <div className="welcome-logo" />
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section id="home" className="about-container">
      <h2>Latest News</h2>
      <div className="news-grid">
        {newsItems.length > 0 && (
          <div className="news-item">
            {newsItems[currentIdx].image && <img src={newsItems[currentIdx].image} alt={newsItems[currentIdx].title} className="news-item-img" />}
            <div className="itemtitle">{newsItems[currentIdx].title}</div>
            <div className="itemdescription">{newsItems[currentIdx].description}</div>
            <div className="news-hover-tip"><span>Hover for news</span></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
