import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import fetchDataReducer from './fetch_recipes';

// main reducers
export const reducers = combineReducers({
	routing: routerReducer,
	form: formReducer,
	forkrecipes: fetchDataReducer
	// your reducer here
});
