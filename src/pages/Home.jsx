import React from 'react';
import '../assets/Home.css'; // Make sure to link the CSS file
import q from "../assets/1.png" 
import w from "../assets/2.png" 
import e from "../assets/4.png" 

const Home = () => {
  return (
    <div>
      <header>
        <div className="header-center">
          <h1>Porsche</h1>
        </div>
      </header>

      <main>
        <div className="model-container">
          <div className="model-card">
            <span className="limited">LIMITED</span>
            <img src={e} alt="Porsche 911 GT3 R (992)" />
            <h3>Porsche 99x Electric – Ltd.</h3>
            <p>$1,059.00</p>
          </div>
          <div className="model-card">
            <span className="limited">LIMITED</span>
            <img src={w} alt="Porsche 963 JDC-Miller Motorsports" />
            <h3>Porsche Mission R – Ltd.</h3>
            <p>$95.00</p>
          </div>
          <div className="model-card">
            <span className="limited">LIMITED</span>
            <img src={q} alt="Porsche 911 GT3 (992)" />
            <h3>Porsche Vision Gran Turismo VEXX – Ltd.</h3>
            <p>$1,059.00</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
