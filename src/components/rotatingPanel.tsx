import {
	Box,
	Center,
	CollapseProps,
	FadeProps,
	HStack,
	Icon,
	ScaleFadeProps,
	SlideFadeProps,
	SlideProps,
	StackProps,
	VStack,
} from "@chakra-ui/react";
import { Token } from "@chakra-ui/styled-system/dist/declarations/src/utils";
import * as CSS from "csstype";
import { useEffect, useReducer } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

type RotatingPanelProps = StackProps & {
	innerPanelProps: (Record<string, any> & { key: any })[];
	Element: (r: Record<string, any>) => JSX.Element;
	viewPortHeight: Token<CSS.Property.Height | number, "sizes">;
	AnimationElement?: (r: Record<string, any>) => JSX.Element;
	animationProps?:
		| FadeProps
		| ScaleFadeProps
		| SlideProps
		| SlideFadeProps
		| CollapseProps;
};

export default function RotatingPanel({
	innerPanelProps,
	Element,
	viewPortHeight,
	AnimationElement,
	animationProps = {},
	...props
}: RotatingPanelProps): JSX.Element {
	const [index, setIndex] = useReducer(
		(oldIndex: number, newIndex: number) => {
			console.log("from", oldIndex, "to", newIndex);

			// // determine order of movement (less to more or more to less)
			// const isLess = newIndex < oldIndex;
			// // find the index of the new panel if moving in either direction
			// const leftBound = isLess
			// 	? oldIndex - innerPanelProps.length
			// 	: oldIndex;
			// const rightBound = isLess
			// 	? oldIndex
			// 	: oldIndex + innerPanelProps.length;
			// // find the distance to that panel
			// const leftDist = newIndex - leftBound;
			// const rightDist = rightBound - newIndex;
			// // use distances to figure out the best direction of travel
			// // true = to the right, false = to the left
			// const direction =
			// 	leftDist == rightDist ? isLess : leftDist < rightDist;

			// equivalent to above calculations
			const direction =
				newIndex < oldIndex
					? innerPanelProps.length <= 2 * oldIndex - 2 * newIndex
					: innerPanelProps.length > 2 * newIndex - 2 * oldIndex;
			console.log("direction:", direction);

			return newIndex;
		},
		0
	);

	useEffect(() => {
		let prevInterval: NodeJS.Timer;
		prevInterval = setTimeout(() => {
			setIndex(index === innerPanelProps.length - 1 ? 0 : index + 1);
		}, 3333);
		// console.log("initial value: ", prevInterval);

		return () => {
			// console.log("clearing value:", prevInterval);
			clearTimeout(prevInterval);
		};
	}, [index]);

	return (
		<VStack spacing={3} align="stretch" {...props}>
			<Box h={viewPortHeight} position="relative">
				{innerPanelProps.map(({ key, ...props }, idx) =>
					AnimationElement ? (
						<Box key={key} position="absolute">
							<AnimationElement
								in={idx === index}
								{...animationProps}
							>
								<Box h={viewPortHeight}>
									<Element {...props} h="100%" />
								</Box>
							</AnimationElement>
						</Box>
					) : (
						<Box
							h={viewPortHeight}
							display={idx !== index && "none"}
							position="absolute"
							key={key}
						>
							<Element {...props} h="100%" />
						</Box>
					)
				)}
			</Box>
			<HStack justify="center" spacing={4}>
				<Center
					onClick={() => {
						setIndex(
							index === 0 ? innerPanelProps.length - 1 : index - 1
						);
						// resetInterval();
					}}
					w="fit-content"
					cursor="pointer"
				>
					<Icon as={FaArrowLeft} boxSize={5} />
				</Center>
				<Center flexWrap="wrap">
					{innerPanelProps.map((props, idx: number) => {
						return (
							<Center key={props.key} p={2}>
								<Icon
									as={FaCircle}
									boxSize={3}
									color={
										idx == index
											? "white"
											: "brand.purple.dark"
									}
									onClick={() => {
										setIndex(idx);
										// resetInterval();
									}}
									cursor="pointer"
									opacity={0.7}
								/>
							</Center>
						);
					})}
				</Center>
				<Center
					onClick={() => {
						setIndex(
							index === innerPanelProps.length - 1 ? 0 : index + 1
						);
						// resetInterval();
					}}
					w="fit-content"
					cursor="pointer"
				>
					<Icon as={FaArrowRight} boxSize={5} />
				</Center>
			</HStack>
		</VStack>
	);
}
