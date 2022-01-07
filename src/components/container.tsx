/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center, CenterProps } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Container(props: CenterProps): JSX.Element {
	return (
		<Center as="section" {...props}>
			{props.children}
		</Center>
	);
}
