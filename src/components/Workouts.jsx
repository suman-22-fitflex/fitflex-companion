import React from 'react';

function Workouts({ showSection }) {
  return (
    <section id="workouts">
      <h2>Workout Categories</h2>
      <div className="card-grid">
        <div className="card" onClick={() => showSection('fullbodyEx')}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/017/724/504/small_2x/illustration-of-bodybuilder-silhouette-black-on-white-background-vector.jpg" alt="" />
          <h3>Full Body</h3>
          <p>All major muscles in one session.</p>
        </div>
        <div className="card" onClick={() => showSection('cardioEx')}>
          <img src="https://www.shutterstock.com/image-vector/simple-abstract-minimalistic-logo-sports-600nw-1157506159.jpg" alt="" />
          <h3>Cardio Blast</h3>
          <p>Boost heart rate & burn calories.</p>
        </div>
        <div className="card" onClick={() => showSection('strengthEx')}>
          <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-bicep-muscle-strength-fitness-logo-design-inspiration-png-image_5007266.jpg" alt="" />
          <h3>Strength Training</h3>
          <p>Increase strength & muscle mass.</p>
        </div>
      </div>
    </section>
  );
}

export default Workouts;
