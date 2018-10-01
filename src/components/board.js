// React
import React from 'react';

// Components
import Nav from './nav';
import Header from './header';
import Game from './game';

export default function Board(props) {
  return (
    <div>
      <Nav />
      <Header />
      <Game />
    </div>
  );
}
