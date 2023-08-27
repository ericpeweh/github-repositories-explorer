// Styles
import { Spinner } from "./LoadingSpinner.styles";

// Types
export interface ILoadingSpinnerProps {
	size?: string;
	borderWidth?: string;
	color?: string;
	marginX?: string;
	marginY?: string;
}

/**
 * Loading indicator / circular progress component
 * @param {ILoadingSpinnerProps} props Spinner component props
 * @param {string} [props.size=3rem] Height and width of spinner (CSS unit)
 * @param {string} [props.borderWidth=6px] Spinner border width (CSS unit)
 * @param {string} [props.color] Spinner color (CSS color)
 * @param {string} [props.marginX=0] Spinner horizontal margin
 * @param {string} [props.marginY=0] Spinner vertical margin
 */
const LoadingSpinner = (props: ILoadingSpinnerProps) => {
	const { size = "3rem", borderWidth = "6px", color, marginX = "0", marginY = "0" } = props;

	return (
		<Spinner
			data-testid="loading-spinner"
			$size={size}
			$borderWidth={borderWidth}
			$color={color}
			$marginX={marginX}
			$marginY={marginY}
		/>
	);
};

export default LoadingSpinner;
