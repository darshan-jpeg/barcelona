import './Players.css';
import { useState } from 'react';

function Players() {
    const playerList = [
        'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'
    ];
    const [startIdx, setStartIdx] = useState(0);
    const visibleCount = 2;
    const endIdx = startIdx + visibleCount;
    const canGoLeft = startIdx > 0;
    const canGoRight = endIdx < playerList.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIdx(startIdx - 1);
    };
    const handleRight = () => {
        if (canGoRight) setStartIdx(startIdx + 1);
    };

    return(
        <section id="Players" className="Players">
            <h1 className="players-title">Culers on the pitch</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '2.5rem' }}>
                <button onClick={handleLeft} disabled={!canGoLeft} style={{ fontSize: '2rem', background: 'none', border: 'none',  color: '#fff', cursor: canGoLeft ? 'pointer' : 'not-allowed', opacity: canGoLeft ? 1 : 0.3 }}>&lt;</button>
                <div className="players-grid" style={{ width: '600px', justifyContent: 'center' }}>
                    {playerList.slice(startIdx, endIdx).map((name, idx) => (
                        <div className="players-card" key={startIdx + idx}>
                            <div className="players-card-title">{name}</div>
                        </div>
                    ))}
                </div>
                <button onClick={handleRight} disabled={!canGoRight} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoRight ? 'pointer' : 'not-allowed', opacity: canGoRight ? 1 : 0.3 }}>&gt;</button>
            </div>
        </section>
    );
}

export default Players;
