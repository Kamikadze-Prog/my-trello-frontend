import React from 'react';
import BoardHome from './components/Board/BoardHome';
import IBoardItem from '../../common/interfaces/IBoardItem';
import './components/Board/board.scss';

interface IBoard {
  [boards: string]: IBoardItem;
}

export default class Home extends React.Component {
  constructor(props: IBoard) {
    super(props);
    this.state = {
      boards: [
        { id: 1, title: 'покупки' },
        { id: 2, title: 'подготовка к свадьбе' },
        { id: 3, title: 'разработка интернет-магазина' },
        { id: 4, title: 'курс по продвижению в соцсетях' },
        { id: 5, title: 'изучаем реакт' },
        { id: 6, title: 'изучить что-то новое' },
      ],
    };
  }

  render(): JSX.Element {
    const { boards }: IBoard = this.state;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const board = boards.map((elements: IBoardItem) => (
      <BoardHome key={elements.id.toString()} title={elements.title} id={elements.id} />
    ));
    return (
      <header className="App-header">
        <div className="home-container">
          <h1 className="main-text">Мои доски</h1>
          <div className="home_board-container">
            <ul>
              {board}
              <li>
                <div>
                  <p>+ Создать доску</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
