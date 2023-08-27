// Dependencies
import { render, screen } from "@testing-library/react";

// Components
import App from "./App";

describe("App Component", () => {
	test("Render app title correctly", () => {
		// Arrange
		render(<App />);

		// Act
		const appTitle = screen.getByText(/github repositories explorer/i);

		// Assert
		expect(appTitle).toBeInTheDocument();
	});
});
