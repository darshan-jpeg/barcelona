import React from 'react';
import './PlayerStats.css';

function DeJongStats() {
  const [dejongImg, setDejongImg] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const dejong = data.items.find(
            p => p.title && p.title.toLowerCase().includes('dejong')
          );
          if (dejong && dejong.image) setDejongImg(dejong.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-glass">
        {dejongImg && (
          <img
            src={dejongImg}
            alt="Frenkie de Jong"
            className="player-image"
          />
        )}
      </div>

      <div className="player-stats-box">
        <h2 className="player-titles">Frenkie de Jong</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Frenkie de Jong</li>
          <li><strong>Date of Birth:</strong> 12 May 1997</li>
          <li><strong>Age:</strong> 27</li>
          <li><strong>Birthplace:</strong> Arkel, Netherlands</li>
          <li><strong>Height:</strong> 1.80 m</li>
          <li><strong>Weight:</strong> 74 kg</li>
          <li><strong>Position:</strong> Midfielder</li>
          <li><strong>Shirt Number:</strong> 21</li>
          <li><strong>Nationality:</strong> Dutch</li>
          <li><strong>Date Joined Barça:</strong> 2019</li>
          <li><strong>Contract Until:</strong> June 2026</li>
          <li><strong>Matches Played (2023/24):</strong> 30</li>
          <li><strong>Goals (2023/24):</strong> 3</li>
          <li><strong>Assists (2023/24):</strong> 4</li>
          <li><strong>Minutes Played (2023/24):</strong> 2,200</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Previous Club:</strong> Ajax</li>
        </ul>
      </div>
    </section>
  );
}

export default DeJongStats;
