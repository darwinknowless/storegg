import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API; // API root URL
const API_VERSION = 'api/v1'; // API version URL

export async function setSignup(data) {
	const URL = 'auth/signup'; // API endpoint URL

	const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data);
	const axiosResponse = response.data;

	return axiosResponse.data;
}

export async function setLogin() {
	return null;
}
