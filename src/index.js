// React
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './reset.css';
import './index.css';

// Components
import Board from './components/board';

ReactDOM.render(<Board />, document.getElementById('root'));

/*
-Board/
--Header/nav/
--Game/
---Temperature feedback/
---Guess section/
----Guess form/
----Guess count/
----Guess history/
*/
