import './Merch.css';
import { useState } from 'react';


function Merch() {
     
    // Placeholder Barca jersey image URL
    const jerseyImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FC_Barcelona_home_jersey_2021-22.png/200px-FC_Barcelona_home_jersey_2021-22.png";
    const merchItems = [
        { title: 'Merch', price: '$29.99' },
        { title: 'Merch', price: '$89.99' },
        { title: 'Merch', price: '$14.99' },
        { title: 'Merch', price: '$29.99' },
        { title: 'Merch', price: '$29.99' },
        { title: 'Merch', price: '$29.99' },
        { title: 'Merch', price: '$29.99' },
    ];
    const [startIdx, setStartIdx] = useState(0);
    const visibleCount = 3;
    const endIdx = startIdx + visibleCount;
    const canGoLeft = startIdx > 0;
    const canGoRight = endIdx < merchItems.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIdx(startIdx - 1);
    };
    const handleRight = () => {
        if (canGoRight) setStartIdx(startIdx + 1);
    };

    return (
        <section id="merch" className="Merch">
            <h1 className="merch-title">Merch Section</h1>
            <p>All our official merchandise is here!</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '5rem' }}>
                <button onClick={handleLeft} disabled={!canGoLeft} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoLeft ? 'pointer' : 'not-allowed', opacity: canGoLeft ? 1 : 0.3 }}>&lt;</button>
                <div className="merch-grid" style={{ width: '900px', justifyContent: 'center' }}>
                    {merchItems.slice(startIdx, endIdx).map((item, idx) => (
                        <div className="merch-card" key={startIdx + idx}>
                            {item.image && <img src={item.image} alt={item.title} className="merch-item-img" />}
              <div className = "mitemtitle" >{item.title}</div>
              <div className ="mitemdescription">{item.description}</div>
                           
                        </div>
                    ))}
                </div>
                <button onClick={handleRight} disabled={!canGoRight} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoRight ? 'pointer' : 'not-allowed', opacity: canGoRight ? 1 : 0.3 }}>&gt;</button>
            </div>
        </section>
    );
}

export default Merch;
