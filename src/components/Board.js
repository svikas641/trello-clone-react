import React from 'react';
import BoardCanvas from './BoardCanvas';

const Board = () => (
  <section className="board">
    <div className="board-header">
      <div className="board-header-heading">Exercise</div>
    </div>
    <BoardCanvas />
  </section>
);

export default Board;
