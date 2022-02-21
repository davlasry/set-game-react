import './PossibleSets.scss';
import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';
import BoardCard from '../Card/Card';

export function PossibleSets() {
  const state = useContext(GameStateContext);
  const { possibleSets } = state;

  return (
    <div className="history-rows">
      {!!possibleSets?.length ? (
        // TODO: create reusable component
        possibleSets.map((row, index) => {
          return (
            <div className="history-row" key={index}>
              <div className="history-row__cards">
                {row.map((card) => (
                  <BoardCard key={card.id} card={card} width={70} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div>No possible Set was found.</div>
      )}
    </div>
  );
}
