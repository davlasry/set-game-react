import './Card.scss';
import { Card } from '../../types/card';
import { useContext, useMemo } from 'react';
import { GameDispatchContext, GameStateContext } from '../../GameProvider';

type CardProps = {
  card: Card;
  width?: number;
};

export default function BoardCard({ card, width }: CardProps) {
  const { userCalledSet, activeCards } = useContext(GameStateContext);
  const dispatch = useContext(GameDispatchContext);

  function toggleCard() {
    if (userCalledSet && activeCards.length < 3) {
      dispatch({ type: 'toggleCard', payload: { card } });
    }
  }

  const isActive = useMemo((): boolean => {
    return activeCards.some((c) => c.id === card.id);
  }, [card, activeCards]);

  return (
    <div
      className={`card ${isActive ? 'card--active' : ' '}`}
      style={{
        cursor: userCalledSet ? 'pointer' : 'default',
        width: `${width}px`,
      }}
      onClick={toggleCard}
    >
      <img
        className="card__image"
        src={`/set-cards-images/${card.id}.png`}
        // style={{ width: `${width}px` }}
        alt={`card-${card.id}`}
      />
    </div>
  );
}
