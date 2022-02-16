import './Card.scss';
import { Card } from '../../types/card';

type CardProps = {
  toggleCard: (id: string) => void;
  isActive: boolean;
  card: Card;
};

// const BACKGROUND_COLORS: Record<string, string> = {
//   green: '#a7ffa7',
//   red: '#f26767',
//   purple: '#ffc1ff',
// };

export default function BoardCard({ toggleCard, card, isActive }: CardProps) {
  return (
    <div
      className={`card ${isActive ? 'card--active' : ' '}`}
      onClick={() => toggleCard(card.id)}
      // @ts-ignore
      // style={{ backgroundColor: BACKGROUND_COLORS[card.color] }}
    >
      {/*<div>*/}
      {/*  <div>{card.id}</div>*/}
      {/*  <h1>{card.shading}</h1>*/}
      {/*  <h1>{card.shape}</h1>*/}

      {/*  <h1>{card.cardNumber}</h1>*/}
      {/*</div>*/}

      <img
        className="card__image"
        src={`/set-cards-images/${card.id}.png`}
        alt={`card-${card.id}`}
      />
    </div>
  );
}
