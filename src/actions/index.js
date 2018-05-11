import axios from 'axios';
const ROOT_URL =
	'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes';

export const FETCH_DATA = 'FETCH_DATA';
export const CREATE_CAKE = 'CREATE CAKE';
export const FETCH_CAKE = 'FETCH CAKE';

export const fetchRecipes = query => {
	// console.log('hit the api');

	const request = axios.get(ROOT_URL).then(data => {
		return data;
	});
	return {
		type: FETCH_DATA,
		payload: request
	};
};

export const createCake = (values, callback) => {
	const request = axios.post(`${ROOT_URL}`, values).then(() => callback());
	return {
		type: CREATE_CAKE,
		payload: request
	};
};

export function fetchCake(id){
	const request = axios.get(`${ROOT_URL}/${id}`);
	return {
		type: FETCH_CAKE,
		payload: request
	};
};
