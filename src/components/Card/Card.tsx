import './Card.scss';
import { Card } from '../../types/card';

type CardProps = {
  toggleCard: (id: string) => void;
  isActive: boolean;
  card: Card;
};

export default function BoardCard({ toggleCard, card, isActive }: CardProps) {
  return (
    <div
      className={`card ${isActive ? 'card--active' : ' '}`}
      onClick={() => toggleCard(card.id)}
    >
      <img
        className="card__image"
        src={`/set-cards-images/${card.id}.png`}
        alt={`card-${card.id}`}
      />
    </div>
  );
}
