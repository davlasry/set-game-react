import './PossibleSets.scss';
import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';
import BoardCard from '../Card/Card';

export function PossibleSets() {
  const state = useContext(GameStateContext);
  const { possibleSets } = state;

  return (
    <div>
      <div>Possible Sets</div>
      <div>
        {
          // TODO: create reusable component
          possibleSets.map((row, index) => {
            return (
              <div className="history-row" key={index}>
                <div className="history-row__cards">
                  {row.map((card) => (
                    <BoardCard key={card.id} card={card} />
                  ))}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
