import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authentication.reducer';
import { business } from './business.reducer';

const rootReducer = combineReducers({
  authentication,
  business,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
