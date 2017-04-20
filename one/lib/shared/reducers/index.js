import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';




import user from './user';

export const reducersToCombine = {
  router,
  user
};
const rootReducer = combineReducers(reducersToCombine);

export default rootReducer;
