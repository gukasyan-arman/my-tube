import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

	params: {
		maxResults: '50'
	},
	headers: {
		'X-RapidAPI-Key': 'f7f70f2f05msh42f6b0a58e3e557p14ae51jsnc5809badcf0c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



export const fetchFromApi = async (url) => {
	const {data} = await axios.get(`${BASE_URL}/${url}`, options)
	return data;
}