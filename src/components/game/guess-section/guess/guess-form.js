// React
import React from 'react';

// Styles
import './guess-form.css';

export default function GuessForm(props) {
  return (
    <form>
      <input type="text" placeholder="Enter your guess" />
      <button type="submit" className="button" value="Guess">
        Guess
      </button>
    </form>
  );
}
