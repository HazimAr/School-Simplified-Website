/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function ContainerInside(props: any): JSX.Element {
	return (
		<Box maxW="1200px" w="100%" mx="25px" {...props}>
			{props.children}
		</Box>
	);
}
