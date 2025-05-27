import './Merch.css';

function Merch() {
    // Placeholder Barca jersey image URL
    const jerseyImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FC_Barcelona_home_jersey_2021-22.png/200px-FC_Barcelona_home_jersey_2021-22.png";
    return(

<section id="merch" className="Merch">
  <h1 className="merch-title">Merch Section</h1>
  <p>All our official merchandise is here!</p>
  <div className="merch-grid">
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$29.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$89.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$14.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$29.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$29.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$29.99</div>
    </div>
    <div className="merch-card">
      
      <div className="merch-card-title">Merch</div>
      <div className="merch-card-price">$29.99</div>
    </div>
  </div>
  
  
</section>

    );
}

export default Merch;
