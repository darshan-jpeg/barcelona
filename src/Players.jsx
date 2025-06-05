import './Players.css';
import { useState, useEffect } from 'react';

function Players() {
    const [playerItems, setPlayerItems] = useState([]);
    const [startIdx, setStartIdx] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const visibleCount = 2;
    const endIdx = startIdx + visibleCount;
    const canGoLeft = startIdx > 0;
    const canGoRight = endIdx < playerItems.length;

    useEffect(() => {
        fetch('http://localhost:5000/api/content/Players')
            .then(res => res.json())
            .then(data => {
                if (data.success) setPlayerItems(data.items);
            });
    }, []);

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
                    {playerItems.slice(startIdx, endIdx).map((item, idx) => {
                        const realIdx = startIdx + idx;
                        return (
                            <div
                                className="players-card"
                                key={item._id || idx}
                                onMouseEnter={() => setHoveredCard(realIdx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {item.image && <img src={item.image} alt={item.title} className="players-img-placeholder" />}
                                <div className="player-title">{item.title}</div>
                                {hoveredCard === realIdx && (
                                    <div className="player-description">{item.description}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <button onClick={handleRight} disabled={!canGoRight} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoRight ? 'pointer' : 'not-allowed', opacity: canGoRight ? 1 : 0.3 }}>&gt;</button>
            </div>
        </section>
    );
}

export default Players;
