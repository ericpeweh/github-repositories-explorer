// Dependencies
import styled, { css } from "styled-components";

export const MainWrapper = styled.main(
	{
		margin: "auto",
		padding: "3rem",
		width: "70rem",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "white"
	},
	css`
		@media screen and (max-width: ${props => props.theme.widthXl}) {
			width: 100%;
		}
		@media screen and (max-width: ${props => props.theme.widthMd}) {
			padding: 2rem;
		}
		@media screen and (max-width: ${props => props.theme.widthXs}) {
			padding: 2rem 1rem;
		}
	`
);

export const AppTitle = styled.h1(
	{
		fontSize: "2rem",
		textAlign: "center",
		marginBottom: "2rem"
	},
	css`
		@media screen and (max-width: ${props => props.theme.widthMd}) {
			font-size: 1.7rem;
		}
		@media screen and (max-width: ${props => props.theme.widthXs}) {
			font-size: 1.5rem;
		}
	`
);
