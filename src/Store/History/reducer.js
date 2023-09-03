// src/store/history/reducer.js
const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default historyReducer;
