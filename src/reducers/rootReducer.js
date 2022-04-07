import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { countReducer } from './counterReducer';
export default combineReducers({
 simpleReducer: simpleReducer,
 countReducer: countReducer
});