
import { combineReducers } from 'redux';
import AddRemoveReducer from './Cart/AddRemoveCartReducer';
const rootReducers = combineReducers({
  AddRemove: AddRemoveReducer
});

export default rootReducers;
