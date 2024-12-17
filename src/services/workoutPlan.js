import axios from 'axios';
import { getAuthHeaders } from '../utils/appUtils';

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export const addWorkoutPlan = async (formData) => {
	try {
		const data = await axios.post(`${apiUrl}/workout-plan`, formData, {
			headers: getAuthHeaders(),
		});

		return data;
	} catch (error) {
		throw error;
	}
};

export const getWorkoutPlan = async () => {
	try {
		const data = await axios.get(`${apiUrl}/workout-plan`, {
			headers: getAuthHeaders(),
		});

		return data;
	} catch (error) {
		throw error;
	}
};
