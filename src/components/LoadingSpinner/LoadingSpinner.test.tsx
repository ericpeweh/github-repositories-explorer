// Dependencies
import { render, screen } from "@testing-library/react";

// Components
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
	test("renders correctly", () => {
		// Arrange
		render(<LoadingSpinner />);

		// Act
		const spinner = screen.getByTestId("loading-spinner");

		// Assert
		expect(spinner).toBeInTheDocument();
	});
});
