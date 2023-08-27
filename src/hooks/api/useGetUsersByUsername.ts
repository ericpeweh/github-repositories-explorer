// API
import { fetchUsersByUsername } from "../../api/users";

// Hooks
import { useQuery } from "@tanstack/react-query";

// Helpers
import { USERS_DATA_KEY } from "../../helpers/constants";

// Types
import { IGetUsersByUsernameResponse } from "../../types/api/user";
import { IRequestError } from "../../types/common/errors";

const useGetUsersByUsername = (username: string) => {
	const requestConfig = {
		enabled: Boolean(username),
		staleTime: 1000 * 60 * 5 // 5 minutes
	};

	const result = useQuery<IGetUsersByUsernameResponse, IRequestError>(
		[`${USERS_DATA_KEY}/${username}`],
		() => fetchUsersByUsername(username),
		requestConfig
	);

	return result;
};

export default useGetUsersByUsername;
