// Dependencies
import { render, screen, fireEvent } from "@testing-library/react";

// Components
import ErrorFallback from "./ErrorFallback";

describe("ErrorFallback Component", () => {
	test("renders with default props", () => {
		// Arrange
		render(<ErrorFallback />);

		// Act
		const errorMessage = screen.getByText("Something went wrong! Please try again.");
		const tryAgainButton = screen.queryByText("Try again");

		// Assert
		expect(errorMessage).toBeInTheDocument();
		expect(tryAgainButton).not.toBeInTheDocument();
	});

	test("renders with custom error message", () => {
		// Arrange
		render(<ErrorFallback errorMessage="Custom error message" />);

		// Act
		const errorMessage = screen.getByText("Custom error message");

		// Assert
		expect(errorMessage).toBeInTheDocument();
	});

	test("renders try again button and calls action on button click", () => {
		// Arrange
		const mockAction = jest.fn();
		render(<ErrorFallback action={mockAction} />);

		// Act
		const tryAgainButton = screen.getByText("Try again");
		fireEvent.click(tryAgainButton);

		// Assert
		expect(tryAgainButton).toBeInTheDocument();
		expect(mockAction).toHaveBeenCalledTimes(1);
	});
});
