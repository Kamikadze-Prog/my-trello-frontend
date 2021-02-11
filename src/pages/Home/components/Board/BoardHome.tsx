import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import IBoardItem from '../../../../common/interfaces/IBoardItem';
import Board from '../../../Board/Board';

function generateRandomColor(): string {
  const red = Math.round(Math.random() * 250);
  const green = Math.round(Math.random() * 250);
  const blue = Math.round(Math.random() * 250);
  return `rgb(${red}, ${green}, ${blue})`;
}

export default function BoardHome(props: IBoardItem): JSX.Element {
  const { title, id } = props;
  const link = `/board/:${id}`;
  return (
    <>
      <Link to={link}>
        <li style={{ backgroundColor: generateRandomColor() }}>
          <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
        </li>
      </Link>
      <Switch>
        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
        <Route path="/boards/:id" render={(props) => <Board {...props} />} />
      </Switch>
    </>
  );
}
