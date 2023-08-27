// Helpers
import { GITHUB_API_BASE_URL } from "../helpers/constants";

export const fetchUserRepositores = async (username: string) => {
	const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/repos`);

	// Error handling
	if (response.status === 500) {
		throw new Error("Unexpected error with our server.");
	}

	if (!response.ok) {
		const responseData = await response.json();
		let errorMessage = responseData?.message || "An error occured while fetching repositories data";

		if (errorMessage.includes("API rate limit")) {
			errorMessage = "Too many requests, try again later.";
		}

		return new Error(errorMessage);
	}

	return response.json();
};
