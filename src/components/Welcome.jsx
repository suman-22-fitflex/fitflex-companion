import React from 'react';

function Welcome({ showSection }) {
  return (
    <section id="welcome">
      <h1>FitFlex</h1>
      <p>Your Fitness Companion</p>
      <button onClick={() => showSection('workouts')}>Get Started</button>
    </section>
  );
}

export default Welcome;
