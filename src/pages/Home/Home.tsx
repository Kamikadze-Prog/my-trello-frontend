import React, { ReactElement } from 'react';
// import { connect } from 'react-redux';
// import { getBoards } from '../../store/modules/boards/actions';
import Board from './components/Board/Board';
import IBoardItem from '../../common/interfaces/IBoardItem';
import './components/Board/board.scss';

type PropsType = {
  [boards: string]: IBoardItem;
  // getBoards: () => Promise<void>;
};

// type StateType = {
//   id: string;
// };
// class Home extends React.Component<StateType, PropsType> {
export default class Home extends React.Component {
  constructor(props: PropsType) {
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

  makeList(): ReactElement {
    const { boards }: PropsType = this.state;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return boards.map((elements: IBoardItem) => (
      <Board key={elements.id.toString()} title={elements.title} id={elements.id} />
    ));
  }

  render(): JSX.Element {
    return (
      <header className="App-header">
        <div className="home-container">
          <h1 className="main-text">Мои доски</h1>
          <div className="home_board-container">
            <ul>
              {this.makeList()}
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const mapStateToProps = (state) => ({
//   ...state.boards,
// });
// export default connect(mapStateToProps, {})(Home);
