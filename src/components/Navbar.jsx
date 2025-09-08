import React from 'react';

function Navbar({ showSection }) {
  return (
    <div className="navbar">
      <a href="#" onClick={() => showSection('welcome')}>Home</a>
      <a href="#" onClick={() => showSection('workouts')}>Workouts</a>
      <a href="#" onClick={() => showSection('nutrition')}>Nutrition</a>
      <a href="#" onClick={() => showSection('bmi')}>BMI Calculator</a>
      <a href="#" onClick={() => showSection('contact')}>Contact</a>
    </div>
  );
}

export default Navbar;
