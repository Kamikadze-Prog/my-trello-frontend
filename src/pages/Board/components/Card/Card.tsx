import React from 'react';
import ICard from '../../../../common/interfaces/ICard';
import './card.scss';

interface CardProps {
  key: string;
  card: ICard;
}

export default function Card(card: CardProps): JSX.Element {
  const { title } = card.card;
  return <span className="card-element">{title}</span>;
}
