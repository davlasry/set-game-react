import './PossibleSetsContainer.scss';
import React, { useContext, useEffect, useState } from 'react';
import { PossibleSets } from '../PossibleSets/PossibleSets';
import { observer } from 'mobx-react-lite';
import { GameStoreContext } from '../../stores/gameStoreContext';

export const PossibleSetsContainer = observer(() => {
  const gameStore = useContext(GameStoreContext);
  const { possibleSets } = gameStore;

  const [showSets, setShowSets] = useState<boolean>(false);

  useEffect(() => {
    if (!possibleSets.length) {
      setShowSets(false);
    }
  }, [possibleSets]);

  return (
    <div className="possible-sets__container">
      <button
        onClick={() => setShowSets((show) => !show)}
        className="sg-button show-sets-btn"
      >
        {showSets ? 'Hide Sets' : 'Show Sets'}
      </button>

      {showSets ? <PossibleSets /> : ''}
    </div>
  );
});
