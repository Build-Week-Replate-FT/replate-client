import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authentication } from './authentication.reducer';
import { business } from './business.reducer';
import { pickups } from './pickups.reducer';

const rootReducer = combineReducers({
  authentication,
  business,
  pickups,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
