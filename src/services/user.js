import axios from 'axios';

export const loginUser = async (formData) => {
	try {
		const data = await axios.post(
			`${process.env.REACT_APP_BACKEND_API_URL}/user`,
			formData
		);

		return data;
	} catch (error) {
		throw error;
	}
};
