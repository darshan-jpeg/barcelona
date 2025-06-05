import './Merch.css';
import React, { useState, useEffect } from 'react';


function Merch() {
    const [merchItems, setMerchItems] = useState([]);
    const [startIdx, setStartIdx] = useState(0);
    const [activeIdx, setActiveIdx] = useState(null);
    const visibleCount = 3;
    const endIdx = startIdx + visibleCount;
    const canGoLeft = startIdx > 0;
    const canGoRight = endIdx < merchItems.length;

    useEffect(() => {
        fetch('http://localhost:5000/api/content/Merch')
            .then(res => res.json())
            .then(data => {
                if (data.success) setMerchItems(data.items);
            });
    }, []);

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
                    {merchItems.slice(startIdx, endIdx).map((item, idx) => {
                        const globalIdx = startIdx + idx;
                        return (
                        <div
                          className={`merch-card${activeIdx === globalIdx ? ' show-sizes' : ''}`}
                          key={item._id || idx}
                          onClick={() => setActiveIdx(activeIdx === globalIdx ? null : globalIdx)}
                          onMouseLeave={() => setActiveIdx(null)}
                          style={{ cursor: 'pointer' }}
                        >
                            {item.image && <img src={item.image} alt={item.title} className="merch-item-img" />}
                            {activeIdx !== globalIdx && <>
                              <div className="mitemtitle">{item.title}</div>
                              <div className="mitemdescription">{item.description}</div>
                            </>}
                            <div className="merch-sizes" style={activeIdx === globalIdx ? { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 1, transition: 'opacity 0.4s' } : { opacity: 0, pointerEvents: 'none', transition: 'opacity 0.4s' }}>
                              <button className="merch-size-btn">S</button>
                              <button className="merch-size-btn">M</button>
                              <button className="merch-size-btn">L</button>
                              <button className="merch-size-btn">XL</button>
                              <button className="merch-size-btn">XXL</button>
                              <button className="merch-size-btn">XXXL</button>
                            </div>
                        </div>
                    )})}
                </div>
                <button onClick={handleRight} disabled={!canGoRight} style={{ fontSize: '2rem', background: 'none', border: 'none', color: '#fff', cursor: canGoRight ? 'pointer' : 'not-allowed', opacity: canGoRight ? 1 : 0.3 }}>&gt;</button>
            </div>
        </section>
    );
}

export default Merch;
