import axios from 'axios';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API; // API root URL
const API_VERSION = 'api/v1'; // API version URL

export async function setSignup(data) {
	const URL = 'auth/signup'; // API endpoint URL

	const response = await axios
		.post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
		.catch((err) => err.response);
	const axiosResponse = response.data;
	if (axiosResponse?.error === 1) {
		return axiosResponse;
	}
	return axiosResponse.data;
}

export async function setLogin(data: LoginTypes) {
	const URL = 'auth/signin'; // API endpoint URL

	const response = await axios
		.post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
		.catch((err) => err.response);

	if (response.status > 300) {
		const res = {
			error: true,
			message: response.data.message,
			data: null,
		};
		return res;
	}

	const res = {
		error: false,
		message: 'success',
		data: response.data.data,
	};

	return res;
}
