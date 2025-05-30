import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [newsItems, setNewsItems] = useState([]);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 1;
  const endIdx = startIdx + visibleCount;
  const canGoLeft = startIdx > 0;
  const canGoRight = endIdx < newsItems.length;

  useEffect(() => {
    fetch('http://localhost:5000/api/content/News')
      .then(res => res.json())
      .then(data => {
        if (data.success) setNewsItems(data.items);
      });
  }, []);

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <section id="home" className="about-container">
      <h2>Latest News</h2>
      <div className="about-arrows-row">
        <button onClick={handleLeft} disabled={!canGoLeft} className="about-arrow-btn">&lt;</button>
        <div className="news-grid">
          {newsItems.slice(startIdx, endIdx).map((item, idx) => (
            <div className="news-item" key={item._id || idx}>
              {item.image && <img src={item.image} alt={item.title} className="news-item-img" />}
              <div className = "itemtitle" >{item.title}</div>
              <div className ="itemdescription">{item.description}</div>
            </div>
          ))}
        </div>
        <button onClick={handleRight} disabled={!canGoRight} className="about-arrow-btn">&gt;</button>
      </div>
    </section>
  );
}

export default About;