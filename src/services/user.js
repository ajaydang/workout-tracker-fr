import axios from 'axios';
import env from 'react-dotenv';

export const loginUser = async (formData) => {
	try {
		const data = await axios.post(`${env.BACKEND_API_URL}user`, formData);

		return data;
	} catch (error) {
		throw error;
	}
};
