import React from 'react';
import './PlayerStats.css';

function RaphinhaStats() {
  // Fetch Raphinha's image from the same API as Players
  const [raphinhaImg, setRaphinhaImg] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const raphinha = data.items.find(
            p => p.title && p.title.toLowerCase().includes('raphinha')
          );
          if (raphinha && raphinha.image) setRaphinhaImg(raphinha.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-placeholder">
        {raphinhaImg ? (
          <img src={raphinhaImg} alt="Raphinha" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
        ) : null}
      </div>
      <div className="player-stats-box">
        <h2 className="player-titles">Raphinha Stats</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Raphael Dias Belloli</li>
          <li><strong>Date of Birth:</strong> 14 December 1996</li>
          <li><strong>Age:</strong> 28</li>
          <li><strong>Birthplace:</strong> Porto Alegre, Brazil</li>
          <li><strong>Height:</strong> 1.76 m</li>
          <li><strong>Weight:</strong> 68 kg</li>
          <li><strong>Position:</strong> Winger</li>
          <li><strong>Shirt Number:</strong> 11</li>
          <li><strong>Nationality:</strong> Brazilian</li>
          <li><strong>Date Joined Barça:</strong> 13 July 2022</li>
          <li><strong>Contract Until:</strong> June 2028</li>
          <li><strong>Total Matches Played:</strong> 139</li>
          <li><strong>Total Goals:</strong> 48</li>
          <li><strong>Total Assists:</strong> 25</li>
          <li><strong>Total Minutes Played:</strong> 8,076</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Copa del Rey Titles:</strong> 1 (2024–25)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> La Liga Player of the Season (2024–25)</li>
          <li><strong>Champions League 2024–25:</strong> 13 goals in 14 matches, including a semi-final goal</li>
        </ul>
      </div>
    </section>
  );
}

export default RaphinhaStats;
