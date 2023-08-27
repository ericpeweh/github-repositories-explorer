// Dependencies
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

// Types
import { IMainTheme } from "../../styles/theme";

// Components
import SearchResult from "./SearchResult";
import UserItem from "../UserItem/UserItem";

// Setup
jest.mock("../UserItem/UserItem");

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0, retryDelay: 1 } } });

const searchQuery = "SEARCH_QUERY";

const SearchResultWithProvider = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={{} as IMainTheme}>
			<SearchResult searchQuery={searchQuery} />
		</ThemeProvider>
	</QueryClientProvider>
);

const mockUsersData = [
	{
		id: 1,
		login: "USERNAME_1",
		avatar_url: "AVATAR_URL_1"
	},
	{
		id: 2,
		login: "USERNAME_2",
		avatar_url: "AVATAR_URL_2"
	}
];

const server = setupServer(
	rest.get("https://api.github.com/search/users", (_1, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				items: mockUsersData
			})
		);
	})
);

describe("SearchResult Component", () => {
	// Enable request interception.
	beforeAll(() => server.listen());

	// Reset handler to isolate each test
	afterEach(() => {
		queryClient.clear();
		server.resetHandlers();
	});

	// Cleanup server after all test case
	afterAll(() => server.close());

	test("renders loading spinner while loading", async () => {
		// Arrange
		render(<SearchResultWithProvider />);

		// Act
		const loadingSpinner = await screen.findByTestId("loading-spinner");

		// Assert
		expect(loadingSpinner).toBeInTheDocument();
	});

	test("renders correct users list on success", async () => {
		// Arrange
		render(<SearchResultWithProvider />);

		// Act & Assert
		await waitFor(() => {
			expect(UserItem).toHaveBeenCalledTimes(2);
		});
	});

	test("renders search result text on success", async () => {
		// Arrannge
		render(<SearchResultWithProvider />);

		// Act
		const resultText = await screen.findByText(`Showing users for "${searchQuery}"`);

		// Assert
		expect(resultText).toBeInTheDocument();
	});

	test("renders error fallback component on error", async () => {
		// Arrange
		// Overwrite GET users API to throw error response
		server.use(
			rest.get("https://api.github.com/search/users", (_1, res, ctx) => {
				return res(ctx.status(500));
			})
		);
		render(<SearchResultWithProvider />);

		// Act
		const errorFallback = await screen.findByTestId("error-fallback");

		// Assert
		expect(errorFallback).toBeInTheDocument();
	});
});
