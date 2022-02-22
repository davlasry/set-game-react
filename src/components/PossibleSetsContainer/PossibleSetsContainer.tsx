import './PossibleSetsContainer.scss';
import React, { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../../GameProvider';
import { PossibleSets } from '../PossibleSets/PossibleSets';

export function PossibleSetsContainer() {
  const state = useContext(GameStateContext);
  const { possibleSets } = state;

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
}
