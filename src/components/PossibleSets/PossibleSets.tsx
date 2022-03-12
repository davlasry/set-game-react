import './PossibleSets.scss';
import React, { useContext } from 'react';
import { BoardCard } from '../Card/Card';
import { observer } from 'mobx-react-lite';
import { GameStoreContext } from '../../stores/gameStoreContext';

export const PossibleSets = observer(() => {
  const gameStore = useContext(GameStoreContext);
  const { possibleSets } = gameStore;

  return (
    <div className="history-rows">
      <div>{possibleSets?.length}</div>
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
});
