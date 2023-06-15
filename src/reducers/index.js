// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         case "RESET":
//             return 0;
//         default:
//             return state;
//     }
// };
// export default reducer;

import { createStore, combineReducers } from 'redux';

// Reducer for counter state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;

