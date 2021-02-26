import React from 'react';
import ReactDOM from 'react-dom';
import '../openDialog.scss';

const modalRoot = document.getElementById('modal-root');

export default class OpenDialog extends React.Component {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  constructor(props) {
    super(props);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    modalRoot.removeChild(this.el);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.el.className = 'dialog-block';
    // eslint-disable-next-line react/destructuring-assignment,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
