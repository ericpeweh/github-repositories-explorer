// Dependencies
import styled from "styled-components";

export const SearchResultContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	marginTop: "1rem"
});

export const SearchResultText = styled.p(({ theme }) => ({
	fontSize: theme.textSm,
	userSelect: "none"
}));

export const UserList = styled.ul({
	listStyle: "none",
	display: "flex",
	flexDirection: "column",
	gap: "1rem"
});
