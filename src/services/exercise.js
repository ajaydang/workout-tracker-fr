import axios from 'axios';
import { getAuthHeaders } from '../utils/appUtils';

export const addExercise = async (formData) => {
	try {
		const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

		const data = await axios.post(`${apiUrl}/exercise`, formData, {
			headers: getAuthHeaders(),
		});

		return data;
	} catch (error) {
		throw error;
	}
};
