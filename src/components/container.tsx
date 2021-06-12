/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Container(props: any): JSX.Element {
	return (
		<Flex justify="center" align="center">
			<Flex maxW="1200px" w="100%" mx="50px" align="center" {...props}>
				{props.children}
			</Flex>
		</Flex>
	);
}
