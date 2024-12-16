export const getAuthHeaders = () => {
	const token = localStorage.getItem('workout-tracker-token'); // Retrieve the token from local storage

	console.log(token, 'ajdkfahksdjf');
	return {
		Authorization: `Bearer ${token}`, // Return the headers with the token
	};
};
