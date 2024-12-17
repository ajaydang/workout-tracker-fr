import axios from 'axios';
import { getAuthHeaders } from '../utils/appUtils';

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export const addExercise = async (formData) => {
	try {
		const data = await axios.post(`${apiUrl}/exercise`, formData, {
			headers: getAuthHeaders(),
		});

		return data;
	} catch (error) {
		throw error;
	}
};

export const getExercise = async () => {
	try {
		const data = await axios.get(`${apiUrl}/exercise`, {
			headers: getAuthHeaders(),
		});

		return data;
	} catch (error) {
		throw error;
	}
};
