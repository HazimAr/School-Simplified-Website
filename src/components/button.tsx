/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
	let bg;
	switch (props.type) {
		// case "exciting":

		case "calm":
			bg = "linear-gradient(90deg, #a688ec 0%, #5a60ad 100%)";
			break;
		default:	
			bg = "linear-gradient(90deg, #FFA270 0%, #e6c068 100%)";
			break;
	}
	return (
		<Box
			px={4}
			py={2}
			as="button"
			// lineHeight="1.2"
			transition="all 0.2s ease"
			borderRadius="16px"
			fontSize="16px"
			fontWeight="semibold"
			bg={bg}
			_hover={{ transform: "scale(0.95)", boxShadow: "md" }}
			_active={{
				transform: "scale(0.90)",
			}}
			{...props}
		>
			{props.children}
		</Box>
	);
}
