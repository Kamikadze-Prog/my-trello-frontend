import React from 'react';
import { Link } from 'react-router-dom';
import IBoardItem from '../../../../common/interfaces/IBoardItem';

function generateRandomColor(): string {
  const red = Math.round(Math.random() * 250);
  const green = Math.round(Math.random() * 250);
  const blue = Math.round(Math.random() * 250);
  return `rgb(${red}, ${green}, ${blue})`;
}

export default function Board({ title, id }: IBoardItem): JSX.Element {
  return (
    <Link to={`/board/:${id}`}>
      <li style={{ backgroundColor: generateRandomColor() }}>
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
      </li>
    </Link>
  );
}
