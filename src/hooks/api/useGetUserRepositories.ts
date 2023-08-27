// API
import { fetchUserRepositores } from "../../api/repositories";

// Hooks
import { useQuery } from "@tanstack/react-query";

// Helpers
import { REPOS_DATA_KEY } from "../../helpers/constants";

// Types
import { TGetUserRepositoriesResponse } from "../../types/api/repositories";
import { IRequestError } from "../../types/common/errors";

const useGetUserRepositories = (username: string) => {
	const requestConfig = {
		enabled: Boolean(username),
		staleTime: 1000 * 60 * 2 // 2 minutes
	};

	const result = useQuery<TGetUserRepositoriesResponse, IRequestError>(
		[`${REPOS_DATA_KEY}/${username}`],
		() => fetchUserRepositores(username),
		requestConfig
	);

	return result;
};

export default useGetUserRepositories;
