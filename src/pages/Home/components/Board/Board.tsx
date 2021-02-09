import React from 'react';
import IBoardItem from '../../../../common/interfaces/IBoardItem';
// eslint-disable-next-line import/order
import { Link, useParams } from 'react-router-dom';

function generateRandomColor(): string {
  const red = Math.round(Math.random() * 250);
  const green = Math.round(Math.random() * 250);
  const blue = Math.round(Math.random() * 250);
  return `rgb(${red}, ${green}, ${blue})`;
}

export default function Board(props: IBoardItem): JSX.Element {
  const { title, id } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { board_id } = useParams(props);
  const link = `/board/:${id}`;
  return (
    <Link to={link}>
      <li style={{ backgroundColor: generateRandomColor() }}>
        <p>{board_id}</p>
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
      </li>
    </Link>
  );
}
