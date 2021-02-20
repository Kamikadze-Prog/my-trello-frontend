import React from 'react';
import List from './components/List/List';
import IList from '../../common/interfaces/IList';
import './components/Board/board.scss';
import './components/Card/card.scss';
import './components/List/list.scss';

interface IBoard {
  title: string;
  lists: IList;
}

export default class Board extends React.Component {
  constructor(props: IBoard) {
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
    const { title, lists }: IList = this.state;
    const list = lists.map((listItem: IList) => (
      <List key={listItem.id.toString()} title={listItem.title} cards={listItem.cards} />
    ));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { id } = this.props;
    return (
      <div className="board-container">
        <h2 className="board-name">
          {`${id}-`}
          {title}
        </h2>
        <div className="inner_board-container">
          {list}
          <button className="new-column">+ Добавить ещё одну колонку</button>
        </div>
      </div>
    );
  }
}
