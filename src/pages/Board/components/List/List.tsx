import React, { ReactElement } from 'react';
import Card from '../Card/Card';
import IList from '../../../../common/interfaces/IList';
import ICard from '../../../../common/interfaces/ICard';
import './list.scss';

function makeCardList(cards: IList): ReactElement[] {
  return cards.map((card: ICard) => <Card key={card.id.toString()} card={card} />);
}

export default function List({ title, id, cards }: IList): JSX.Element {
  return (
    <div className="todo-container">
      <h2 key={id}>{title}</h2>
      <div className="inner_todo-container">{makeCardList(cards)}</div>
      <button className="btn">+ Добавить ещё одну карточку</button>
    </div>
  );
}
