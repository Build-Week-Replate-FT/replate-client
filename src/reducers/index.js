import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
  authentication,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
