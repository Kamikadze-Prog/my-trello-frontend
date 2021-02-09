import React from 'react';
import ICard from '../../../../common/interfaces/ICard';

export default function Card(card: { key: string; card: ICard }): JSX.Element {
  const { title } = card.card;
  return <span>{title}</span>;
}
