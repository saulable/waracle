import * as actions from '../actions';
import {FETCH_DATA} from '../actions/index';

export default function fetchDataReducer(state = {}, action){
	switch(action.type){
	case FETCH_DATA:
		return {...state, ...action.payload.data};
	}
	return state;
}
