// Dependencies
import { ChangeEvent, FormEvent, useState } from "react";

// Styles
import {
	SearchButton,
	SearchForm,
	SearchHeaderContainer,
	SearchInput
} from "./SearchHeader.styles";

// Types
interface ISearchHeaderProps {
	onSubmit: (newSearchQueryValue: string) => void;
}

/**
 * Search header component with input field and search button
 * @param {ISearchHeaderProps} props Component props
 * @param {Function} props.onSubmit Handler function for form 'submit' event
 */
const SearchHeader = ({ onSubmit }: ISearchHeaderProps) => {
	const [searchInput, setSearchInput] = useState<string>("");

	const searchQueryChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
	};

	const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		// Prevent default behavior of form 'submit' event
		event.preventDefault();

		onSubmit(searchInput);
	};

	return (
		<SearchHeaderContainer>
			<SearchForm role="search" onSubmit={searchSubmitHandler}>
				<SearchInput
					type="search"
					placeholder="Enter username"
					name="searchInput"
					value={searchInput}
					onChange={searchQueryChangeHandler}
					autoComplete="off"
				/>
				<SearchButton type="submit">Search</SearchButton>
			</SearchForm>
		</SearchHeaderContainer>
	);
};

export default SearchHeader;
