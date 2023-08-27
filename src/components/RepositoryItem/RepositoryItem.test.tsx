// Dependencies
import { render, screen } from "@testing-library/react";
import { IRepository } from "../../types/common/repositories";

// Components
import RepositoryItem from "./RepositoryItem";

describe("RepositoryItem Component", () => {
	// Mocks
	const mockRepoData = {
		name: "REPO_NAME",
		stargazers_count: 123,
		description: "REPO_DESCRIPTION",
		html_url: "#REPO_HTML_URL"
	};

	test("renders correctly with provided data", () => {
		// Arrange
		const { name, stargazers_count, description, html_url } = mockRepoData;
		render(<RepositoryItem repoData={mockRepoData as IRepository} />);

		// Act
		const repositoryLink = screen.getByRole("link");
		const repositoryName = screen.getByText(name);
		const repositoryStargazer = screen.getByText(stargazers_count);
		const repositoryDescription = screen.getByText(description);

		// Assert
		expect(repositoryLink).toBeInTheDocument();
		expect(repositoryLink).toHaveAttribute("href", html_url);
		expect(repositoryName).toBeInTheDocument();
		expect(repositoryStargazer).toBeInTheDocument();
		expect(repositoryDescription).toBeInTheDocument();
	});

	test("renders repo item with missing description", () => {
		// Arrange
		const repoDataWithoutDescription = {
			...mockRepoData,
			description: null
		};

		// Act
		render(<RepositoryItem repoData={repoDataWithoutDescription as IRepository} />);

		// Assert
		const repositoryDescription = screen.getByText("No description provided.");
		expect(repositoryDescription).toBeInTheDocument();
	});
});
