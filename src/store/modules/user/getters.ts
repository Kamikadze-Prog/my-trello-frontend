import { AppState } from '../../store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getBoards = ({ main: { boards } }: AppState): Board[] => boards;
