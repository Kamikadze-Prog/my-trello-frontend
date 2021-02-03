import React from 'react';
import ICard from '../../../common/interfaces/ICard';
import Card from '../Card/Card';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function List(lists): JSX.Element {
  const { cards, title } = lists;
  const todo = cards.map((cardTitle: ICard) => <Card> title={cardTitle.title}</Card>);
  return (
    <div className="ToDoWrapper">
      <h2>{title}</h2>
      <div className="ToDoInnerWrapper">{todo}</div>
    </div>
  );
}
