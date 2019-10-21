import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
