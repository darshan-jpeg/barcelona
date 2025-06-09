import React from 'react';
import './PlayerStats.css';
function FerranStats() {
  const [ferranImg, setFerranImg] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:5000/api/content/Players')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const ferran = data.items.find(
            p => p.title && p.title.toLowerCase().includes('ferran')
          );
          if (ferran && ferran.image) setFerranImg(ferran.image);
        }
      });
  }, []);

  return (
    <section className="player-stats-container">
      <div className="player-photo-placeholder">
        {ferranImg ? (
          <img src={ferranImg} alt="Ferran Torres" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
        ) : null}
      </div>
      <div className="player-stats-box">
        <h2 className="player-titles">Ferran Torres Stats</h2>
        <ul className="player-stats-list">
          <li><strong>Full Name:</strong> Ferran Torres García</li>
          <li><strong>Date of Birth:</strong> 29 February 2000</li>
          <li><strong>Age:</strong> 24</li>
          <li><strong>Birthplace:</strong> Foios, Spain</li>
          <li><strong>Height:</strong> 1.84 m</li>
          <li><strong>Weight:</strong> 77 kg</li>
          <li><strong>Position:</strong> Forward</li>
          <li><strong>Shirt Number:</strong> 7</li>
          <li><strong>Nationality:</strong> Spanish</li>
          <li><strong>Date Joined Barça:</strong> 28 December 2021</li>
          <li><strong>Contract Until:</strong> June 2027</li>
          <li><strong>Matches Played (2023/24):</strong> 42</li>
          <li><strong>Goals (2023/24):</strong> 11</li>
          <li><strong>Assists (2023/24):</strong> 6</li>
          <li><strong>Minutes Played (2023/24):</strong> 2,400</li>
          <li><strong>La Liga Titles:</strong> 1 (2022–23)</li>
          <li><strong>Spanish Super Cup:</strong> 1 (2022–23)</li>
          <li><strong>Individual Awards:</strong> La Liga Player of the Month (Jan 2024)</li>
        </ul>
      </div>
    </section>
  );
}

export default FerranStats;
