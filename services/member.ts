import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API; // API root URL
const API_VERSION = 'api/v1'; // API version URL

export async function getMemberOverview() {
	const url = `${ROOT_API}/${API_VERSION}/players/dashboard`; // API endpoint URL

	return callAPI({
		url,
		method: 'GET',
		token: true,
	});
}

export async function getMemberTransaction(valueParams: string) {
	let params = '';

	if (valueParams === 'all') {
		params = '';
	} else {
		params = `?status=${valueParams}`;
	}

	const url = `${ROOT_API}/${API_VERSION}/players/history${params}`; // API endpoint URL

	return callAPI({
		url,
		method: 'GET',
		token: true,
	});
}

export async function getTransactionDetail(id: string, token: string) {
	const url = `${ROOT_API}/${API_VERSION}/players/history${id}/detail`; // API endpoint URL

	return callAPI({
		url,
		method: 'GET',
		serverToken: token,
	});
}

export async function updateProfile(data: FormData, id: string) {
	const url = `${ROOT_API}/${API_VERSION}/players/profile/${id}`; // API endpoint URL

	return callAPI({
		url,
		method: 'PUT',
		data,
		token: true,
	});
}
