import axios from 'axios';
const API_KEY = 'd319f2dc62a2fa1da1bfab06251b625c';
const ROOT_URL = 'http://food2fork.com/api/search?key=';
let QUERY = '&q=';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchRecipes(query){
	// console.log('hit the api');

	const url = `${ROOT_URL}${API_KEY}${QUERY}${query}`;
	const request = axios.get(url).then((data) => {return data;} );
	return {
		type: FETCH_DATA,
		payload: request
	};
}
