// Dependencies
import styled from "styled-components";

export const ErrorFallbackContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1rem",
	padding: "2rem"
});

export const ErrorMessage = styled.p<{ $error: boolean }>(({ theme, $error }) => ({
	fontSize: theme.textMd,
	textAlign: "center",
	color: $error ? theme.colorError : "#000",
	fontWeight: 500
}));

export const ActionButton = styled.button(({ theme }) => ({
	backgroundColor: theme.light100,
	borderRadius: "3px",
	border: `1px solid ${theme.light200}`,
	padding: "0.5rem 1.5rem",
	cursor: "pointer",
	fontSize: theme.textSm,
	fontWeight: 500
}));
