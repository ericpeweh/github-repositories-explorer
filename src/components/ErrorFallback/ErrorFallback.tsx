// Styles
import { ActionButton, ErrorFallbackContainer, ErrorMessage } from "./ErrorFallback.styles";

// Types
export type TErrorFallbackType = "error" | "primary";

interface IErrorFallbackProps {
	type?: TErrorFallbackType;
	errorMessage?: string;
	action?: () => void;
}

/**
 * Error fallback component to show error description and retry button
 * @param {IErrorFallbackProps} props Component props
 * @param {string} [props.type=error] Fallback theme type ('error' or 'primary')
 * @param {string} [props.errorMessage] Error message to display
 * @param {function} [props.action] Error followup action handler function
 */
const ErrorFallback = ({ type, errorMessage, action }: IErrorFallbackProps) => {
	const isTypeError = type === "error";

	return (
		<ErrorFallbackContainer data-testid="error-fallback">
			<ErrorMessage $error={isTypeError}>
				{errorMessage || "Something went wrong! Please try again."}
			</ErrorMessage>
			{action && <ActionButton onClick={action}>Try again</ActionButton>}
		</ErrorFallbackContainer>
	);
};

export default ErrorFallback;
