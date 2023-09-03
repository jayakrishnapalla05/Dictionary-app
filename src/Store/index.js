// src/store/index.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import historyReducer from './History/reducer';

const rootReducer = combineReducers({
  history: historyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
