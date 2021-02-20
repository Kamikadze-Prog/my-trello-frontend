import { createStore } from 'redux';
import rootReducer from './reducer';

export interface AppState {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  board: BoardState; // эти интерфейсы нужно описать в редьюсерах соответствующих
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  boards: BoardsState;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  user: UserState;
}
// const initialState: AppState = {
const initialState = {
  board: {},
  boards: [],
  user: {},
};

const store = createStore(rootReducer, initialState);

export const asyncDispatch = store.dispatch;
export default store;
