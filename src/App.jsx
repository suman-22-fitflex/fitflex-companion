import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Workouts from './components/Workouts';
import FullbodyEx from './components/FullbodyEx';
import CardioEx from './components/CardioEx';
import StrengthEx from './components/StrengthEx';
import Nutrition from './components/Nutrition';
import BalancedEx from './components/BalancedEx';
import ProteinEx from './components/ProteinEx';
import VitaminsEx from './components/VitaminsEx';
import BMI from './components/BMI';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  const showSection = (id) => {
    setActiveSection(id);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="app-container">  {/* Add this wrapper div */}
      <Navbar showSection={showSection} />
      {activeSection === 'welcome' && <Welcome showSection={showSection} />}
      {activeSection === 'workouts' && <Workouts showSection={showSection} />}
      {activeSection === 'fullbodyEx' && <FullbodyEx showSection={showSection} />}
      {activeSection === 'cardioEx' && <CardioEx showSection={showSection} />}
      {activeSection === 'strengthEx' && <StrengthEx showSection={showSection} />}
      {activeSection === 'nutrition' && <Nutrition showSection={showSection} />}
      {activeSection === 'balancedEx' && <BalancedEx showSection={showSection} />}
      {activeSection === 'proteinEx' && <ProteinEx showSection={showSection} />}
      {activeSection === 'vitaminsEx' && <VitaminsEx showSection={showSection} />}
      {activeSection === 'bmi' && <BMI />}
      {activeSection === 'contact' && <Contact />}
      <footer>&copy; 2025 FitFlex. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
