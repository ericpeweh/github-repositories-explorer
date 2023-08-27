// Dependencies
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

// Components
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import UserItem from "./UserItem";

// Types
import { IUser } from "../../types/common/user";
import { IMainTheme } from "../../styles/theme";

// Setup
jest.mock("../RepositoryItem/RepositoryItem");

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0, retryDelay: 1 } } });

const mockUserData = {
	id: 1,
	login: "USERNAME_1",
	avatar_url: "AVATAR_URL_1"
};

const mockUserRepositories = [
	{
		id: 1,
		name: "REPO_1"
	},
	{
		id: 2,
		name: "REPO_2"
	}
];

const UserItemWithProvider = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={{ colorError: "red" } as IMainTheme}>
			<UserItem userData={mockUserData as IUser} />
		</ThemeProvider>
	</QueryClientProvider>
);

const server = setupServer(
	rest.get("https://api.github.com/users/:username/repos", (_1, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockUserRepositories));
	})
);

describe("UserItem Component", () => {
	// Enable request interception.
	beforeAll(() => server.listen());

	// Reset handler to isolate each test
	afterEach(() => {
		queryClient.clear();
		server.resetHandlers();
		jest.clearAllMocks();
	});

	// Cleanup server after all test case
	afterAll(() => server.close());

	test("renders username on default view", () => {
		// Arrange
		render(<UserItemWithProvider />);

		// Act
		const usernameText = screen.getByText(mockUserData.login);

		// Assert
		expect(usernameText).toBeInTheDocument();
	});

	test("renders loading spinner on loading state", async () => {
		// Arrange
		render(<UserItemWithProvider />);

		// Act
		const loadingSpinner = await screen.findByTestId("loading-spinner");

		// Assert
		expect(loadingSpinner).toBeInTheDocument();
	});

	test("toggles repositories visibility on button click", async () => {
		// Arrange
		const user = userEvent.setup();
		render(<UserItemWithProvider />);

		// Assert
		expect(screen.queryByRole("list")).toBeNull(); // Repositories list should be hidden when initialized

		// Act
		const toggleButton = screen.getByTestId("user-item-link");

		await user.click(toggleButton);

		// Assert
		const repoList = await screen.findByRole("list");
		expect(repoList).toBeInTheDocument(); // Repositories list should visible after click event
	});

	test("renders correct repos list on success after toggle", async () => {
		// Arrange
		const user = userEvent.setup();
		render(<UserItemWithProvider />);

		// Act
		// Click on UserItem to toggle show repositories
		const userItemLink = await screen.findByTestId("user-item-link");
		await user.click(userItemLink);

		// Act & Assert
		await waitFor(() => {
			expect(RepositoryItem).toHaveBeenCalledTimes(2);
		});
	});

	test("renders error fallback component on error after toggle", async () => {
		// Arrange
		const user = userEvent.setup();

		// Overwrite GET user repos API to throw error response
		server.use(
			rest.get("https://api.github.com/users/:username/repos", (_1, res, ctx) => {
				return res(ctx.status(500));
			})
		);
		render(<UserItemWithProvider />);

		// Act
		// Click on UserItem to toggle show repositories
		const userItemLink = await screen.findByTestId("user-item-link");
		await user.click(userItemLink);

		// Assert
		const errorFallback = await screen.findByTestId("error-fallback");
		expect(errorFallback).toBeInTheDocument();
	});
});
