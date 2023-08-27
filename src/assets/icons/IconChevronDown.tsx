// Dependencies
import { SVGProps } from "react";

const IconChevronDown = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}>
			<path
				fill="currentColor"
				d="M6.343 7.757L4.93 9.172 12 16.242l7.071-7.07-1.414-1.415L12 13.414 6.343 7.757z"
			/>
		</svg>
	);
};

export default IconChevronDown;
