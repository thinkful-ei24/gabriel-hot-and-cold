// React
import React from 'react';

// Components
import TemperatureSection from './game/temperature-section/temperature';
import GuessSection from './game/guess-section/guess-section';
import StatusSection from './game/status-section/status-section';
import InfoSection from './game/info-section/info-section';

// Styles
import './game.css';

export default function Game(props) {
  return (
    <main>
      <TemperatureSection />
      <GuessSection />
      <StatusSection />
      <InfoSection />
    </main>
  );
}
