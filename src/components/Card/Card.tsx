import './Card.scss';
import { Card } from '../../types/card';
import { useContext, useMemo } from 'react';
import { GameStoreContext } from '../../stores/gameStoreContext';
import { observer } from 'mobx-react-lite';

type CardProps = {
  card: Card;
  width?: number;
};

export const BoardCard = observer(({ card, width }: CardProps) => {
  const gameStore = useContext(GameStoreContext);
  const { userCalledSet, activeCards } = gameStore;

  function toggleCard() {
    if (userCalledSet && activeCards.length < 3) {
      gameStore.toggleCard(card);
    }
  }

  const isActive = useMemo((): boolean => {
    return activeCards.some((activeCard) => activeCard.id === card.id);
  }, [card, activeCards]);

  return (
    <div
      className={`card ${isActive ? 'card--active' : ' '}`}
      style={{
        cursor: userCalledSet ? 'pointer' : 'default',
        width: width ? `${width}px` : 'inherit',
        height: width ? `${width * 1.36}px` : 'inherit',
      }}
      onClick={toggleCard}
    >
      <img
        className="card__image"
        src={`/set-cards-images/${card.id}.png`}
        alt={`card-${card.id}`}
      />
    </div>
  );
});

// export default observer(BoardCard);
