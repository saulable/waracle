import _ from 'lodash';
import { FETCH_DATA } from '../actions/index';
import { FETCH_CAKE } from '../actions/index';

export default function fetchDataReducer(state = {}, action) {
	switch (action.type) {
		case FETCH_DATA:
		  return _.mapKeys(action.payload.data, "id");
		case FETCH_CAKE:
			return { ...state, [action.payload.data.id]: action.payload.data };
		default:
			return state;
	}
}
