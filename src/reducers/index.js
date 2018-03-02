import { combineReducers } from 'redux';
import StatesReducer from './reducer_states';
import SelectedStateReducer from './reducer_selected_state'
const rootReducer = combineReducers({
  states: StatesReducer,
  stateSelected: SelectedStateReducer
});

export default rootReducer;
