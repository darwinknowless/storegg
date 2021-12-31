import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API; // API root URL
const API_VERSION = 'api/v1'; // API version URL

export async function getFeaturedGame() {
	const URL = 'players/landingpage'; // API endpoint URL

	const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
	const axiosResponse = response.data;

	return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
	const URL = `players/${id}/detail`; // API endpoint URL

	const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
	const axiosResponse = response.data;

	return axiosResponse.data;
}

export async function getGameCategory() {
	const URL = 'players/category'; // API endpoint URL

	const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
	const axiosResponse = response.data;

	return axiosResponse.data;
}
