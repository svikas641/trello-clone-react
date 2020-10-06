import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Board from './components/Board';

const App = () => (
  <>
    <Navbar />
    <Board />
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));
