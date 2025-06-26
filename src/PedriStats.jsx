import React from 'react';
import './PlayerStats.css';

function PedriStats() {
  const [pedriImg, setPedriImg] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const pedri = data.items.find(
            p => p.title && p.title.toLowerCase().includes('pedri')
          );
          if (pedri && pedri.image) setPedriImg(pedri.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-glass">
        {pedriImg && (
          <img
            src={pedriImg}
            alt="Pedri"
            className="player-image"
          />
        )}
      </div>

      <div className="player-stats-box">
        <h2 className="player-titles">Pedri</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Pedro González López</li>
          <li><strong>Date of Birth:</strong> 25 November 2002</li>
          <li><strong>Age:</strong> 22</li>
          <li><strong>Birthplace:</strong> Tegueste, Spain</li>
          <li><strong>Height:</strong> 1.74 m</li>
          <li><strong>Weight:</strong> 60 kg</li>
          <li><strong>Position:</strong> Midfielder</li>
          <li><strong>Shirt Number:</strong> 8</li>
          <li><strong>Nationality:</strong> Spanish</li>
          <li><strong>Date Joined Barça:</strong> 2020</li>
          <li><strong>Contract Until:</strong> June 2026</li>
          <li><strong>Matches Played (2023/24):</strong> 34</li>
          <li><strong>Goals (2023/24):</strong> 4</li>
          <li><strong>Assists (2023/24):</strong> 6</li>
          <li><strong>Minutes Played (2023/24):</strong> 1,850</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> Golden Boy (2021), Kopa Trophy (2021)</li>
        </ul>
      </div>
    </section>
  );
}

export default PedriStats;
