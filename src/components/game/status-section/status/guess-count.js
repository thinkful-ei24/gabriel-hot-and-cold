// React
import React from 'react';

// Styles
import './guess-count.css';

export default function GuessCount(props) {
  return (
    <section id="guessCount">
      <p>
        Guess <span id="count">#1</span>
      </p>
    </section>
  );
}
