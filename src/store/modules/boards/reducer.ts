const initialState = {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function reducer(state = initialState, action) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-shadow,@typescript-eslint/no-unused-vars
  const initialState: BoardsState = {
    boards: [],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function boardsReducer() {}

  switch (action.type) {
    case 'UPDATE_BOARDS':
      return {
        ...state,
        boards: action.boards,
      };
    default: {
      return { ...state };
    }
  }
}
