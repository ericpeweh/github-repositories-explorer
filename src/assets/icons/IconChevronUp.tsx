// Dependencies
import { SVGProps } from "react";

const IconChevronUp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}>
			<path
				fill="currentColor"
				d="M17.657 16.243l1.414-1.414-7.07-7.072-7.072 7.072 1.414 1.414L12 10.586l5.657 5.657z"
			/>
		</svg>
	);
};

export default IconChevronUp;
