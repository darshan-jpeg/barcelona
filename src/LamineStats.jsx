import React from 'react';
import './PlayerStats.css';

function LamineStats() {
  const [lamineImg, setLamineImg] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const lamine = data.items.find(
            p => p.title && p.title.toLowerCase().includes('lamine')
          );
          if (lamine && lamine.image) setLamineImg(lamine.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-glass">
        {lamineImg && (
          <img
            src={lamineImg}
            alt="Lamine Yamal"
            className="player-image"
          />
        )}
      </div>

      <div className="player-stats-box">
        <h2 className="player-titles">Lamine Yamal</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Lamine Yamal Nasraoui Ebana</li>
          <li><strong>Date of Birth:</strong> 13 July 2007</li>
          <li><strong>Age:</strong> 16</li>
          <li><strong>Birthplace:</strong> Esplugues de Llobregat, Spain</li>
          <li><strong>Height:</strong> 1.80 m</li>
          <li><strong>Weight:</strong> 65 kg</li>
          <li><strong>Position:</strong> Winger</li>
          <li><strong>Shirt Number:</strong> 27</li>
          <li><strong>Nationality:</strong> Spanish</li>
          <li><strong>Date Joined Barça:</strong> 2013 (Youth), 2023 (Senior)</li>
          <li><strong>Contract Until:</strong> June 2026</li>
          <li><strong>Matches Played (2023/24):</strong> 37</li>
          <li><strong>Goals (2023/24):</strong> 7</li>
          <li><strong>Assists (2023/24):</strong> 10</li>
          <li><strong>Minutes Played (2023/24):</strong> 2,100</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> La Liga Revelation of the Season (2023/24)</li>
        </ul>
      </div>
    </section>
  );
}

export default LamineStats;
