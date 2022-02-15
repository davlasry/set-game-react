import './BoardCard.scss';
import { Card } from '../../types/card';

type CardProps = {
  toggleCard: (id: string) => void;
  isActive: boolean;
  card: Card;
};

export default function BoardCard({ toggleCard, card, isActive }: CardProps) {
  const toggleActive = () => {
    toggleCard(card.id);
  };

  return (
    <div
      className={`card ${isActive ? 'card--active' : ' '}`}
      onClick={toggleActive}
    >
      <div>
        <div>id: {card.id}</div>
        <div>color: {card.color}</div>
        <div>fill: {card.fill}</div>
        <div>shape: {card.shape}</div>
      </div>
    </div>
  );
}
