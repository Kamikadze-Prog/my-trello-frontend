import React from 'react';
import Card from '../Card/Card';
import IList from '../../../../common/interfaces/IList';
import ICard from '../../../../common/interfaces/ICard';

export default function List(list: IList): JSX.Element {
  const { cards, title, id } = list;

  const todo = cards.map((card: ICard) => <Card key={card.id.toString()} title={card.title} />);

  return (
    <div className="toDo-container">
      <h2 key={id}>{title}</h2>
      <div className="inner_toDo-container">{todo}</div>
      <button>+ Добавить ещё одну карточку</button>
    </div>
  );
}
