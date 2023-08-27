// Hooks
import useGetUsersByUsername from "../../hooks/api/useGetUsersByUsername";

// Components
import UserItem from "../UserItem/UserItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// Styles
import { SearchResultContainer, SearchResultText, UserList } from "./SearchResult.styles";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

// Types
interface ISearchResultProps {
	searchQuery: string;
}

/**
 * Component to display search result list data
 * @param {ISearchResultProps} props Component props
 * @param {string} props.searchQuery User typed search input / query value
 */
const SearchResult = ({ searchQuery }: ISearchResultProps) => {
	// Search users API
	const {
		isLoading,
		error,
		data: users,
		isSuccess,
		isFetching,
		refetch
	} = useGetUsersByUsername(searchQuery);

	return (
		<SearchResultContainer>
			{/* Show loading spinner if loading state is true */}
			{isLoading && isFetching && <LoadingSpinner size="3.5rem" marginX="auto" marginY="3rem" />}
			{/* Show error fallback if error object is truthy */}
			{error && <ErrorFallback action={refetch} errorMessage={error.message} />}
			{isSuccess && searchQuery && (
				<SearchResultText>Showing users for "{searchQuery}"</SearchResultText>
			)}
			{isSuccess && users.items?.length > 0 && (
				<UserList role="list">
					{users.items.map(userData => (
						<UserItem key={userData.id} userData={userData} />
					))}
				</UserList>
			)}
			{/* No user found fallback */}
			{users && users.items?.length === 0 && <ErrorFallback errorMessage="No user found." />}
		</SearchResultContainer>
	);
};

export default SearchResult;
