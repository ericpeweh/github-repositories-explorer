// Dependencies
import styled, { css } from "styled-components";

export const RepositoryItemContainer = styled.li(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	borderRadius: "0.3rem",
	backgroundColor: theme.light200,
	userSelect: "none"
}));

export const RepositoryLink = styled.a({
	textDecoration: "none",
	padding: "1rem"
});

export const RepositoryHeader = styled.div({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "1.5rem"
});

export const RepositoryName = styled.h3(
	({ theme }) => ({
		fontSize: theme.textXl,
		fontWeight: 700,
		wordBreak: "break-all"
	}),
	css`
		@media screen and (max-width: ${props => props.theme.widthMd}) {
			font-size: ${props => props.theme.textLg};
		}
		@media screen and (max-width: ${props => props.theme.widthXs}) {
			font-size: ${props => props.theme.textMd};
		}
	`
);

export const RepositoryStargazer = styled.span(({ theme }) => ({
	fontSize: theme.textLg,
	fontWeight: 600,
	display: "flex",
	alignItems: "center",
	gap: "0.5rem"
}));

export const RepositoryDescription = styled.p(({ theme }) => ({
	fontSize: theme.textSm
}));
