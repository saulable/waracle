import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import fetchDataReducer from './fetch_recipes';

// main reducers
export default combineReducers({
	form: formReducer,
	routing: routerReducer,
	cakerecipes: fetchDataReducer
	// your reducer here
});
