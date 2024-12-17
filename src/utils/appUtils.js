export const getAuthHeaders = () => {
	const token = localStorage.getItem('workout-tracker-token'); // Retrieve the token from local storage
	if (!token) {
		throw new Error('No access token found');
	}
	return {
		Authorization: `Bearer ${token}`, // Return the headers with the token
	};
};
