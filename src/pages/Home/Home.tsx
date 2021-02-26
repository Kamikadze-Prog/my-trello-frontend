import React, { ReactElement } from 'react';
// import { connect } from 'react-redux';
// import { getBoards } from '../../store/modules/boards/actions';
import Board from './components/Board/Board';
import IBoardItem from '../../common/interfaces/IBoardItem';
import './components/Board/board.scss';
import OpenDialog from './components/OpenDialog';

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
      showModal: false,
      value: '',
      boards: [
        { id: 1, title: 'покупки' },
        { id: 2, title: 'подготовка к свадьбе' },
        { id: 3, title: 'разработка интернет-магазина' },
        { id: 4, title: 'курс по продвижению в соцсетях' },
        { id: 5, title: 'изучаем реакт' },
        { id: 6, title: 'изучить что-то новое' },
      ],
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  onKeyPressHandler(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  updateBodyStyles() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { showModal } = this.state;
    return showModal ? (document.body.style.overflow = 'visible') : (document.body.style.overflow = 'hidden');
  }

  handleShow() {
    this.updateBodyStyles();
    this.setState({ showModal: true });
  }

  handleHide() {
    this.updateBodyStyles();
    this.setState({ showModal: false });
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  handleSubmit(event) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { value } = this.state;
    const input = document.getElementById('input-text');
    // eslint-disable-next-line no-empty
    if (value.toString().length === 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      input.style.border = '1px solid red';
    } else {
      // eslint-disable-next-line no-alert
      alert(`Мы создали доску: ${value}`);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      input.style.border = '1px solid green';
      event.preventDefault();
    }
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { value } = this.state;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    const modal = this.state.showModal ? (
      <OpenDialog>
        <div className="dialog-block_form" onSubmit={this.handleSubmit}>
          <div className="dialog-block_input">
            <input
              id="input-text"
              type="text"
              placeholder="Добавить заголовок доски"
              value={value}
              onChange={this.handleChange}
              onKeyDown={this.onKeyPressHandler}
            />
            <button onClick={this.handleHide}>x</button>
          </div>
          <input type="submit" value="Создать" onClick={this.handleSubmit} />
        </div>
      </OpenDialog>
    ) : null;
    return (
      <header className="App-header">
        <div className="home-container">
          <h1 className="main-text">Мои доски</h1>
          <div className="home_board-container">
            <ul>
              {this.makeList()}
              <button className="make-board" onClick={this.handleShow}>
                <p>+ Создать доску</p>
              </button>
              {modal}
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
