// Dependencies
import styled, { css } from "styled-components";

export const UserItemContainer = styled.li(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	fontSize: theme.textMd
}));

export const UsernameContainer = styled.a(({ theme }) => ({
	padding: "1rem",
	textDecoration: "none",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	cursor: "pointer",
	backgroundColor: theme.light100,
	borderRadius: "3px"
}));

export const UsernameText = styled.h2(({ theme }) => ({
	fontSize: theme.textMd,
	fontWeight: 500,
	userSelect: "none"
}));

export const RepositoryList = styled.ul(
	{
		listStyle: "none",
		marginLeft: "1.5rem",
		marginTop: "1rem",
		display: "flex",
		flexDirection: "column",
		gap: "1rem"
	},
	css`
		@media screen and (max-width: ${props => props.theme.widthSm}) {
			margin-left: 1rem;
		}
	`
);

export const IconContainer = styled.div({
	display: "flex",
	gap: "1rem",
	alignItems: "center"
});
