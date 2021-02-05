import React from 'react';
import Card from '../Card/Card';
import ICard from '../../../../common/interfaces/ICard';
import IList from '../../../../common/interfaces/IList';

export interface ILi {
  title: string;
}

export default function List(list: IList): JSX.Element {
  const { cards, title } = list;
  const todo = cards.map((cardTitle: ICard) => <Card> title={cardTitle.title}</Card>);

  return (
    <div className="toDo-container">
      <h2>{title}</h2>
      <div className="inner_toDo-container">{todo}</div>
      <button>+ Добавить ещё одну карточку</button>
    </div>
  );
}
