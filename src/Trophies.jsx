import React, { useState } from 'react';
import './Trophies.css';
import Aurora from './Aurora.jsx';
const trophyData = [
  {
    label: 'La Liga',
    type: 'TITLES',
    icon: '🏆',
    years: [1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974, 1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023, 2024],
  },
  {
    label: 'UEFA Champions League',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1992, 2006, 2009, 2011, 2015],
  },
  {
    label: 'FIFA Club World Cup',
    type: 'TROPHIES',
    icon: '🏆',
    years: [2009, 2011, 2015],
  },
  {
    label: 'Copa Del Rey',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942, 1951, 1952, 1953, 1957, 1958, 1963, 1968, 1971, 1978, 1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015, 2016, 2017, 2018, 2021, 2022],
  },
  {
    label: 'UEFA Super Cup',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1992, 1997, 2009, 2011, 2015],
  },
  {
    label: 'Spanish Super Cup',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1983, 1991, 1992, 1994, 1996, 2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018, 2023],
  },
  {
    label: 'Copa Eva Duarte',
    type: 'TROPHY',
    icon: '🏆',
    years: [1945, 1948, 1952],
  },
  {
    label: 'Copa de la Liga',
    type: 'TROPHY',
    icon: '🏆',
    years: [1983, 1986],
  },
  {
    label: 'Inter-Cities Fairs Cup',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1958, 1960, 1966],
  },
  {
    label: 'UEFA Cup Winners’ Cup',
    type: 'TROPHIES',
    icon: '🏆',
    years: [1979, 1982, 1989, 1997],
  },
];

const minYear = 1910;
const maxYear = 2024;

function Trophies() {
  const [year, setYear] = useState(maxYear);

  return (
    <section className="trophies-section">
      <div className="trophies-scrollbar-row" style={{ marginBottom: '2.2rem' }}>
        <button className="trophies-home-btn" onClick={() => window.location.href = '/#home'}>🏠 Home</button>
        <span className="trophies-year-label" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffc62a', margin: '0 1.2rem' }}>Year: {year}</span>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="trophies-year-slider"
          style={{ width: '320px', height: '16px', accentColor: '#ffc62a', background: '#eee', borderRadius: '8px', boxShadow: 'none', border: '1px solid #ccc' }}
        />
      </div>
      <h2 className="trophies-title">Trophies & Titles</h2>
      <div className="trophies-list">
        {trophyData.map((trophy, idx) => {
          const count = trophy.years.filter(y => y <= year).length;
          return (
            <div className="trophy-row" key={idx}>
              <span className="trophy-icon">
                {/* Realistic SVGs for major trophies */}
                {trophy.label === 'La Liga' && (
                  <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="30" rx="10" ry="4" fill="#ffc62a" fillOpacity="0.25"/>
                    <path d="M10 10 Q6 18 19 34 Q32 18 28 10" stroke="#ffc62a" strokeWidth="2.2" fill="none"/>
                    <rect x="10" y="6" width="18" height="16" rx="7" fill="#ffc62a"/>
                    <ellipse cx="19" cy="6" rx="7" ry="4" fill="#ffc62a"/>
                    <ellipse cx="19" cy="6" rx="5.5" ry="2.5" fill="#fff2"/>
                  </svg>
                )}
                {trophy.label === 'UEFA Champions League' && (
                  <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="30" rx="10" ry="4" fill="#ffc62a" fillOpacity="0.25"/>
                    <path d="M10 10 Q6 18 19 34 Q32 18 28 10" stroke="#ffc62a" strokeWidth="2.2" fill="none"/>
                    <ellipse cx="19" cy="12" rx="11" ry="15" fill="#ffc62a"/>
                    <ellipse cx="19" cy="12" rx="7.5" ry="10" fill="#fff2"/>
                  </svg>
                )}
                {trophy.label === 'FIFA Club World Cup' && (
                  <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="30" rx="10" ry="4" fill="#ffc62a" fillOpacity="0.25"/>
                    <rect x="13" y="10" width="12" height="22" rx="6" fill="#ffc62a"/>
                    <ellipse cx="19" cy="10" rx="8" ry="8" fill="#ffc62a"/>
                    <ellipse cx="19" cy="10" rx="5.2" ry="5.2" fill="#fff2"/>
                  </svg>
                )}
                {trophy.label === 'Copa Del Rey' && (
                  <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="30" rx="10" ry="4" fill="#ffc62a" fillOpacity="0.25"/>
                    <rect x="8" y="12" width="22" height="16" rx="7" fill="#ffc62a"/>
                    <rect x="13" y="28" width="12" height="8" rx="4" fill="#ffc62a"/>
                    <ellipse cx="19" cy="12" rx="8" ry="4" fill="#ffc62a"/>
                    <ellipse cx="19" cy="12" rx="5.5" ry="2.5" fill="#fff2"/>
                  </svg>
                )}
                {/* Default trophy icon for others */}
                {['La Liga','UEFA Champions League','FIFA Club World Cup','Copa Del Rey'].indexOf(trophy.label) === -1 && (
                  <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="30" rx="10" ry="4" fill="#ffc62a" fillOpacity="0.18"/>
                    <rect x="10" y="10" width="18" height="18" rx="7" fill="#ffc62a"/>
                    <ellipse cx="19" cy="10" rx="7" ry="4" fill="#ffc62a"/>
                  </svg>
                )}
              </span>
              <span className="trophy-label" style={{ fontSize: '1.3rem', fontWeight: 700 }}>{trophy.label}</span>
              <span className="trophy-count" style={{ fontSize: '2.1rem', fontWeight: 800 }}>{count}</span>
              <span className="trophy-type">{trophy.type}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trophies;
