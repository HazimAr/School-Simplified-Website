import {
	Box,
	Center,
	HStack,
	Icon,
	StackProps,
	VStack,
} from "@chakra-ui/react";
import { Token } from "@chakra-ui/styled-system/dist/declarations/src/utils";
import * as CSS from "csstype";
import { AnimatePresence, motion, Transition, Variant } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

type RotatingPanelProps = StackProps & {
	innerPanelProps: (Record<string, any> & { key: any })[];
	Element: (r: Record<string, any>) => JSX.Element;
	viewPortHeight: Token<CSS.Property.Height | number, "sizes">;
	animationType?: AnimationType | AnimationData;
	// animationProps?: Record<string, any>;
};

type AnimationType = "slide" | "fade" | "carousel";
type RotatingAnimation = {
	enter: Variant;
	center: Variant;
	exit: Variant;
};
type AnimationData = {
	animation: RotatingAnimation;
	transition: Transition;
};

function getVariant(variant: AnimationType | AnimationData): AnimationData {
	// const duration = "1s";
	let animation: RotatingAnimation;
	let transition: Transition;
	switch (variant) {
		case "slide":
			animation = {
				enter: (direction: boolean) => ({
					x: direction ? -1000 : 1000,
					opacity: 0,
				}),
				center: {
					zIndex: 1,
					x: 0,
					opacity: 1,
				},
				exit: (direction: boolean) => ({
					position: "absolute",
					zIndex: 0,
					x: direction ? 1000 : -1000,
					opacity: 0,
				}),
			};
			transition = {
				x: {
					type: "spring",
					stiffness: 300,
					damping: 30,
				},
				opacity: { duration: 0.2 },
			};
			return { animation, transition };
		case "fade":
			animation = {
				enter: { opacity: 0 },
				center: { opacity: 1, zIndex: 1 },
				exit: { opacity: 0, zIndex: 0, position: "absolute" },
			};
			transition = {
				opacity: { duration: 0.2 },
			};
			return { animation, transition };
		case "carousel":
			animation = {
				enter: (direction) => ({
					opacity: 0,
					x: direction ? "-40%" : "40%",
					scale: 0.2,
				}),
				center: {
					opacity: 1,
					x: 0,
					scale: 1,
					zIndex: 1,
				},
				exit: (direction) => ({
					position: "absolute",
					opacity: 0,
					x: direction ? "40%" : "-40%",
					scale: 0.2,
					zIndex: 0,
				}),
			};
			transition = {
				opacity: { duration: 0.2 },
			};
			return { animation, transition };
	}

	// not valid name, just return itself
	return variant;
}

export default function RotatingPanel({
	innerPanelProps,
	Element,
	viewPortHeight,
	animationType,
	...props
}: RotatingPanelProps): JSX.Element {
	const variant: AnimationData = getVariant(animationType);

	// keeps track of which direction the rotating panel is rotating
	// true = to the right, false = to the left
	const [direction, setDirection] = useState(true);
	const [index, setIndex] = useReducer(
		(oldIndex: number, newIndex: number) => {
			// console.log("from", oldIndex, "to", newIndex);

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
			// console.log("direction:", direction);
			setDirection(direction);
			// controls.start(direction ? "enterLeft" : "enterRight");

			return newIndex;
		},
		0
	);

	useEffect(() => {
		let prevInterval: NodeJS.Timer;
		prevInterval = setTimeout(
			() =>
				setIndex(index === innerPanelProps.length - 1 ? 0 : index + 1),
			3333
		);
		// console.log("initial value: ", prevInterval);

		return () => {
			// console.log("clearing value:", prevInterval);
			clearTimeout(prevInterval);
		};
	}, [index]);

	return (
		<VStack spacing={3} align="stretch" {...props}>
			<Box h={viewPortHeight} position="relative">
				{animationType ? (
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={innerPanelProps[index].key}
							custom={direction}
							variants={variant.animation}
							initial="enter"
							animate="center"
							exit="exit"
							transition={variant.transition}
						>
							<Element
								{...innerPanelProps[index]}
								h={viewPortHeight}
							/>
						</motion.div>
					</AnimatePresence>
				) : (
					<Element {...innerPanelProps[index]} h={viewPortHeight} />
				)}
			</Box>
			<HStack justify="center" spacing={4}>
				<Center
					onClick={() =>
						setIndex(
							index === 0 ? innerPanelProps.length - 1 : index - 1
						)
					}
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
