// Helpers
import { GITHUB_API_BASE_URL } from "../helpers/constants";

export const fetchUsersByUsername = async (username: string) => {
	const response = await fetch(
		`${GITHUB_API_BASE_URL}/search/users?q=${username} in:login&per_page=5`
	);

	// Error handling
	if (response.status === 500) {
		throw new Error("Unexpected error with our server.");
	}

	if (!response.ok) {
		const responseData = await response.json();
		let errorMessage = responseData?.message || "An error occured while fetching users data";

		if (errorMessage.includes("API rate limit")) {
			errorMessage = "Too many requests, try again later.";
		}

		throw new Error(errorMessage);
	}

	return response.json();
};
