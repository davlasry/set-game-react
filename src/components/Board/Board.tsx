import React, { useContext } from 'react';
import './Board.scss';
import { BoardCard } from '../Card/Card';
import { GameStoreContext } from '../../stores/gameStoreContext';
import { observer } from 'mobx-react-lite';

export const Board = observer(() => {
  const gameStore = useContext(GameStoreContext);
  const { board } = gameStore;

  return (
    <div className="board__container">
      {board.map((card) => (
        <BoardCard key={card.id} card={card} width={110} />
      ))}
    </div>
  );
});
