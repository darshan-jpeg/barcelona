import React from 'react';
import './PlayerStats.css';

function AnsuFatiStats() {
  const [ansuImg, setAnsuImg] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const ansu = data.items.find(
            p => p.title && p.title.toLowerCase().includes('ansu')
          );
          if (ansu && ansu.image) setAnsuImg(ansu.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-placeholder">
        {ansuImg ? (
          <img
            src={ansuImg}
            alt="Ansu Fati"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
          />
        ) : null}
      </div>
      <div className="player-stats-box">
        <h2 className="player-titles">Ansu Fati Stats</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Anssumane Fati Vieira</li>
          <li><strong>Date of Birth:</strong> 31 October 2002</li>
          <li><strong>Age:</strong> 22</li>
          <li><strong>Birthplace:</strong> Bissau, Guinea-Bissau</li>
          <li><strong>Height:</strong> 1.78 m</li>
          <li><strong>Weight:</strong> 66 kg</li>
          <li><strong>Position:</strong> Forward</li>
          <li><strong>Shirt Number:</strong> 10</li>
          <li><strong>Nationality:</strong> Spanish</li>
          <li><strong>Date Joined Barça:</strong> 2012 (Youth), 2019 (Senior)</li>
          <li><strong>Contract Until:</strong> June 2027</li>
          <li><strong>Matches Played (2023/24):</strong> 30</li>
          <li><strong>Goals (2023/24):</strong> 7</li>
          <li><strong>Assists (2023/24):</strong> 4</li>
          <li><strong>Minutes Played (2023/24):</strong> 1,350</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> La Liga Revelation Player (2020)</li>
        </ul>
      </div>
    </section>
  );
}

export default AnsuFatiStats;
