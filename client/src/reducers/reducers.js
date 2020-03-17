import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer.js';

const RootReducer = combineReducers({
    events: eventsReducer
});

export default RootReducer;