// Dependencies
import styled, { keyframes, css } from "styled-components";

// Animations
const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface IStyledSpinnerProps {
	$size?: string;
	$borderWidth?: string;
	$color?: string;
	$marginX?: string;
	$marginY?: string;
}

export const Spinner = styled.div<IStyledSpinnerProps>(
	({ $size, $color, $borderWidth, $marginX, $marginY, theme }) => ({
		width: $size,
		aspectRatio: 1,
		border: `${$borderWidth} solid ${$color || theme.colorPrimary}`,
		borderTop: `${$borderWidth} solid #f3f3f3`,
		borderRadius: "50%",
		margin: `${$marginY} ${$marginX}`
	}),
	css`
		animation: ${SpinAnimation} 1s linear infinite;
	`
);
