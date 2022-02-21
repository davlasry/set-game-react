import React, { useContext } from 'react';
import './Board.scss';
import { GameStateContext } from '../../GameProvider';
import BoardCard from '../Card/Card';

export const Board = () => {
  const state = useContext(GameStateContext);

  return (
    <div className="board__wrapper">
      <div className="board__container">
        {[...state.board].map((card) => (
          <BoardCard key={card.id} card={card} width={120} />
        ))}
      </div>
    </div>
  );
};
