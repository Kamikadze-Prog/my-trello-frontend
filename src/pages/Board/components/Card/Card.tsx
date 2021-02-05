import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Card(title): JSX.Element {
  return <span>{title.children[1]}</span>;
}
