// Dependencies
import styled, { css } from "styled-components";

export const SearchHeaderContainer = styled.div({
	display: "flex"
});

export const SearchForm = styled.form(
	{
		display: "flex",
		gap: "1rem",
		width: "100%"
	},
	css`
		@media screen and (max-width: ${props => props.theme.widthXs}) {
			flex-direction: column;
		}
	`
);

export const SearchInput = styled.input(({ theme }) => ({
	flex: 7,
	padding: "0.8rem 1rem",
	borderRadius: "0.2rem",
	border: "1px solid #d1d1d1",
	backgroundColor: theme.light100,
	fontSize: theme.textMd,
	outline: "red"
}));

export const SearchButton = styled.button(({ theme }) => ({
	flex: 1,
	padding: "0.7rem 1.5rem",
	border: "none",
	backgroundColor: theme.colorPrimary,
	color: "white",
	borderRadius: "0.2rem",
	cursor: "pointer",
	fontSize: theme.textMd,
	userSelect: "none"
}));
