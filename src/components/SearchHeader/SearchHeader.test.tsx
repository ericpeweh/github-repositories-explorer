// Dependencies
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import SearchHeader from "./SearchHeader";

describe("SearchHeader Component", () => {
	test("renders with search input and submit button", () => {
		// Arrange
		render(<SearchHeader onSubmit={() => {}} />);

		// Act
		const searchInput = screen.getByRole("searchbox");
		const submitButton = screen.getByText("Search");

		// Assert
		expect(searchInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	test("updates search input value on change correctly", async () => {
		const user = userEvent.setup();

		// Arrange
		const searchQuery = "SEARCH_QUERY";
		render(<SearchHeader onSubmit={() => {}} />);

		// Act
		const searchInput = screen.getByRole("searchbox");
		await user.type(searchInput, searchQuery);

		// Assert
		expect(searchInput).toHaveValue(searchQuery);
	});

	test("triggers onSubmit handler with correct input value on form submit", async () => {
		const user = userEvent.setup();

		// Arrange
		const username = "USERNAME";
		const mockOnSubmit = jest.fn();
		render(<SearchHeader onSubmit={mockOnSubmit} />);

		const searchInput = screen.getByRole("searchbox");
		const submitButton = screen.getByText("Search");

		// Act
		await user.type(searchInput, username);
		await user.click(submitButton);

		// Assert
		expect(mockOnSubmit).toHaveBeenCalledWith(username);
	});
});
