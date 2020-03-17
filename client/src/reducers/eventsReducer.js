import _ from 'lodash';
import { FETCH_EVENTS, ADD_EVENT } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
    case FETCH_EVENTS:
        return _.mapKeys(action.payload.data, 'id');
    case ADD_EVENT:
        return { ...state, [action.payload.data.id]: action.payload.data };
    default:
        return state;
    }
}