import React, { useState } from 'react';

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const h = height / 100; // convert cm to m
      const bmi = (weight / (h * h)).toFixed(2);

      let category = '';
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setResult(`Your BMI: ${bmi} (${category})`);
    } else {
      alert('Please enter both weight and height');
    }
  };

  return (
    <section id="bmi">
      <h2>BMI Calculator</h2>
      <div className="bmi-container">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
        <div className="result" style={{ marginTop: '10px', fontWeight: 'bold' }}>
          {result}
        </div>
      </div>
    </section>
  );
}

export default BMI;
