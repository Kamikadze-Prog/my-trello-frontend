const initialState = {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function reducer(state = initialState, action: { type: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-shadow,@typescript-eslint/no-unused-vars
  const initialState: UserState = {
    user: [],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function userReducer() {}

  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
