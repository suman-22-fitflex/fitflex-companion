import React from 'react';

function Nutrition({ showSection }) {
  return (
    <section id="nutrition">
      <h2>Nutrition Categories</h2>
      <div className="card-grid">
        <div className="card" onClick={() => showSection('balancedEx')}>
          <img src="https://img.freepik.com/free-psd/balanced-diet-plate-vibrant-healthy-meal_191095-78064.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          <h3>Balanced Diet</h3>
          <p>All nutrients for healthy lifestyle.</p>
        </div>
        <div className="card" onClick={() => showSection('proteinEx')}>
          <img src="https://content.health.harvard.edu/wp-content/uploads/2024/01/28e8e464-f55e-4b32-9bab-dc990d8cc927.jpg" alt="" />
          <h3>High Protein</h3>
          <p>Supports muscle growth & recovery.</p>
        </div>
        <div className="card" onClick={() => showSection('vitaminsEx')}>
          <img src="https://img.freepik.com/free-vector/essential-vitamin-mineral-complex_52683-35723.jpg" alt="" />
          <h3>Vitamins & Minerals</h3>
          <p>Boost immunity & well-being.</p>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
