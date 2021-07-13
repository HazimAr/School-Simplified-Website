/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
	return (
		<Box
			as="button"
			// lineHeight="1.2"
			transition="all 0.2s ease"
			px={4}
			py={2}
			borderRadius="16px"
			fontSize="16px"
			fontWeight="semibold"
			bg="linear-gradient(90deg, #FFA270 0%, #e6c068 100%)"
			_hover={{ transform: "scale(0.95)" }}
			_active={{
				transform: "scale(0.90)",
			}}
			{...props}
		>
			{props.children}
		</Box>
	);
}
