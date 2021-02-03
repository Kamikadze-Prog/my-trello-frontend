import React from 'react';
import List from './components/List/List';

export default class Board extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    title: 'Моя тестовая доска',
    lists: [
      {
        id: 1,
        title: 'Планы',
        cards: [
          { id: 1, title: 'помыть кота' },
          { id: 2, title: 'приготовить суп' },
          { id: 3, title: 'сходить в магазин' },
        ],
      },
      {
        id: 2,
        title: 'В процессе',
        cards: [{ id: 4, title: 'посмотреть сериал' }],
      },
      {
        id: 3,
        title: 'Сделано',
        cards: [
          { id: 5, title: 'сделать домашку' },
          { id: 6, title: 'погулять с собакой' },
        ],
      },
    ],
  };

  render(): JSX.Element {
    const { title } = this.state;
    const { lists } = this.state;
    const list = lists.map((el) => <List title={el.title} cards={el.cards} />);
    return (
      <div className="container">
        <h2>{title}</h2>
        <div className="inner_container">{list}</div>
      </div>
    );
  }
}
