import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API; // API root URL
const API_VERSION = 'api/v1'; // API version URL

export async function setSignup(data: FormData) {
	const url = `${ROOT_API}/${API_VERSION}/auth/signup`; // API endpoint URL

	return callAPI({
		url,
		method: 'POST',
		data,
	});
}

export async function setLogin(data: LoginTypes) {
	const url = `${ROOT_API}/${API_VERSION}/auth/signin`; // API endpoint URL

	return callAPI({
		url,
		method: 'POST',
		data,
	});
}
