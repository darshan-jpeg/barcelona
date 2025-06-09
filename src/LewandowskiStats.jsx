import React from 'react';
import './PlayerStats.css';
function LewandowskiStats() {
  const [lewaImg, setLewaImg] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const lewa = data.items.find(
            p => p.title && p.title.toLowerCase().includes('lewandowski')
          );
          if (lewa && lewa.image) setLewaImg(lewa.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-placeholder">
        {lewaImg ? (
          <img src={lewaImg} alt="Robert Lewandowski" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
        ) : null}
      </div>
      <div className="player-stats-box">
        <h2 className="player-titles">Robert Lewandowski Stats</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Robert Lewandowski</li>
          <li><strong>Date of Birth:</strong> 21 August 1988</li>
          <li><strong>Age:</strong> 35</li>
          <li><strong>Birthplace:</strong> Warsaw, Poland</li>
          <li><strong>Height:</strong> 1.85 m</li>
          <li><strong>Weight:</strong> 81 kg</li>
          <li><strong>Position:</strong> Striker</li>
          <li><strong>Shirt Number:</strong> 9</li>
          <li><strong>Nationality:</strong> Polish</li>
          <li><strong>Date Joined Barça:</strong> 16 July 2022</li>
          <li><strong>Contract Until:</strong> June 2026</li>
          <li><strong>Matches Played (2023/24):</strong> 48</li>
          <li><strong>Goals (2023/24):</strong> 26</li>
          <li><strong>Assists (2023/24):</strong> 8</li>
          <li><strong>Minutes Played (2023/24):</strong> 3,900</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> La Liga Top Scorer (2022/23), FIFA FIFPro World XI (2023)</li>
        </ul>
      </div>
    </section>
  );
}

export default LewandowskiStats;
