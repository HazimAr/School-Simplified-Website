/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Container(props: any): JSX.Element {
	return (
		<Flex justify="center" align="center" as="section" {...props}>
			{props.children}
		</Flex>
	);
}
