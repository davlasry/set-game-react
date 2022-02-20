import BoardCard from '../Card/Card';
import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';

export function History() {
  const state = useContext(GameStateContext);

  const { history } = state;

  return (
    <div>
      History:
      {history.length === 0 ? (
        <span> No history</span>
      ) : (
        // TODO: create reusable component
        history.map((row, index) => {
          return (
            <div className="history-row" key={index}>
              <div className="history-row__cards">
                {row.cards.map((card) => (
                  <BoardCard key={card.id} card={card} />
                ))}
              </div>
              <div>{row.status}</div>
            </div>
          );
        })
      )}
    </div>
  );
}
