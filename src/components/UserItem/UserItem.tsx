// Dependencies
import { useState } from "react";
import { useTheme } from "styled-components";

// Icons
import IconChevronDown from "../../assets/icons/IconChevronDown";
import IconChevronUp from "../../assets/icons/IconChevronUp";
import IconErrorCircle from "../../assets/icons/IconErrorCircle";

// Hooks
import useGetUserRepositories from "../../hooks/api/useGetUserRepositories";

// Types
import { IUser } from "../../types/common/user";

// Styles
import {
	IconContainer,
	RepositoryList,
	UserItemContainer,
	UsernameContainer,
	UsernameText
} from "./UserItem.styles";

// Components
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface IUserItemProps {
	userData: IUser;
}

/**
 * @param {IUserItemProps} props Component props
 * @param {IUser} props.userData Single user details data to display
 */
const UserItem = ({ userData }: IUserItemProps) => {
	const mainTheme = useTheme();
	const [showRepositories, setShowRepositories] = useState(false);
	const { login: username } = userData;

	// Get user's repositories API
	const {
		isLoading,
		error,
		data: repositories,
		isSuccess,
		isFetching,
		refetch
	} = useGetUserRepositories(username);

	const toggleShowRepositoriesHandler = () => {
		setShowRepositories(prev => !prev);
	};

	return (
		<UserItemContainer role="listitem">
			<UsernameContainer
				role="button"
				onClick={toggleShowRepositoriesHandler}
				data-testid="user-item-link"
			>
				<UsernameText>{username}</UsernameText>
				<IconContainer>
					{/* Show loading spinner if repo list is hidden and loading state is true */}
					{!showRepositories && isLoading && <LoadingSpinner size="1.2rem" borderWidth="2px" />}
					{/* Show error indicator if repo list is hidden and error object is truthy */}
					{!showRepositories && error && <IconErrorCircle fill={mainTheme.colorError} />}
					{showRepositories ? <IconChevronUp /> : <IconChevronDown />}
				</IconContainer>
			</UsernameContainer>
			{showRepositories && isLoading && isFetching && (
				<LoadingSpinner size="2.5rem" borderWidth="4px" marginX="auto" marginY="2rem" />
			)}
			{showRepositories && repositories && isSuccess && (
				<RepositoryList>
					{repositories.map(repo => (
						<RepositoryItem key={repo.id} repoData={repo} />
					))}
				</RepositoryList>
			)}
			{/* Empty repositories fallback */}
			{showRepositories && repositories && repositories?.length === 0 && (
				<ErrorFallback errorMessage="No repository found." />
			)}
			{/* Error fallback with refetch action button */}
			{showRepositories && error && <ErrorFallback action={refetch} errorMessage={error.message} />}
		</UserItemContainer>
	);
};

export default UserItem;
