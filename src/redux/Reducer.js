import { ADDITION, SUBTRACTION } from "./ActionType";

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
    console.log('🚀 ~ mainReducer ~ state:', state);
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};
    case SUBTRACTION:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};
