// Dependencies
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Hooks
import { useState } from "react";

// Components
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SearchResult from "./components/SearchResult/SearchResult";

// Styles
import theme from "./styles/theme";
import { AppTitle, MainWrapper } from "./App.styles";

// Variables
const appQueryClient = new QueryClient();

/**
 * Main index / app component
 */
const App = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const searchSubmitHandler = (newQueryValue: string) => {
		setSearchQuery(newQueryValue);
	};

	return (
		<QueryClientProvider client={appQueryClient}>
			<ThemeProvider theme={theme}>
				<MainWrapper>
					<AppTitle>GitHub Repositories Explorer</AppTitle>
					<SearchHeader onSubmit={searchSubmitHandler} />
					<SearchResult searchQuery={searchQuery} />
				</MainWrapper>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
