import React from 'react';
import List from './components/List/List';
import './components/Board/board.scss';
import './components/Card/card.scss';
import './components/List/list.scss';

export default class Board extends React.Component {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { title } = this.state;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { lists } = this.state;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const list = lists.map((el) => <List title={el.title} cards={el.cards} />);
    return (
      <div className="board-container">
        <h2 className="board-name">{title}</h2>
        <div className="inner_board-container">
          {list}
          <button>+ Добавить карточку</button>
        </div>
      </div>
    );
  }
}
