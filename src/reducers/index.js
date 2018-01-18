import users from './users';
import filtered from './filter';
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({
    users,
    filtered
  });

export default rootReducer;
