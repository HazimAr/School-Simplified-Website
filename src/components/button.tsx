/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box, Center, Image, HStack } from "@chakra-ui/react";

/**
 * The button that can have an image before text (add the source to that
 * image via the timmysrc property). Also has three styles to choose from:
 * bright, calm, and outline (default).
 *
 * @param props an object that carries all the props to give the button.
 * @returns the button
 */
export default function Button(props: Record<string, any>): JSX.Element {
	let bg: string, borderColor: string;
	switch (props.type) {
		// case "exciting":
		case "calm":
			bg = "linear-gradient(90deg, #a688ec 0%, #5a60ad 100%)";
			break;
		case "bright":
			bg = "linear-gradient(90deg, #FFA270 0%, #e6c068 100%)";
			break;
		case "outline":
		default:
			borderColor = "white";
			bg = "transparent";
			break;
	}
	delete props.type;

	return (
		<Box
			pl={props.timmysrc ? 0.5 : 4}
			pr={4}
			py={props.timmysrc ? 0.5 : 2}
			as="button"
			// lineHeight="1.2"
			transition="all 0.2s ease"
			borderRadius="md"
			fontSize="14px"
			fontWeight="semibold"
			bg={bg}
			minW={205}
			borderWidth={borderColor ? 3 : 0}
			borderColor={borderColor ?? null}
			_hover={
				borderColor
					? { backgroundColor: "white", color: "brand.purple.dark" }
					: { transform: "scale(0.95)", boxShadow: "md" }
			}
			_active={
				borderColor
					? { transform: "scale(0.90)", boxShadow: "md" }
					: { transform: "scale(0.90)" }
			}
			{...props}
		>
			<HStack>
				{props.timmysrc ? (
					<Image
						src={props.timmysrc}
						alt="A small Timmy"
						maxH={41}
						pl={1}
					/>
				) : null}
				<Center flex={1}>{props.children}</Center>
			</HStack>
		</Box>
	);
}
