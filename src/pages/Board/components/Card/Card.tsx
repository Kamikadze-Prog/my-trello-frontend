import React from 'react';

export default function Card(card: { title: { id: number; title: string } }): JSX.Element {
  return <span>{card.title}</span>;
}
