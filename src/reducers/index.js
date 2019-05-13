import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      let addCount = state.count + 1;
      return Object.assign({}, state, { count: addCount });
    case DECREMENT:
    let subtractCount = state.count -1
    return Object.assign({}, state, {count: subtractCount})
    default:
      return state;
  }
};
