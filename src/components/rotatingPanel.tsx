import {
	Box,
	Center,
	FadeProps,
	HStack,
	Icon,
	ScaleFadeProps,
	SlideFadeProps,
	SlideProps,
	StackProps,
	useControllableState,
	VStack,
	CollapseProps,
} from "@chakra-ui/react";
import { Token } from "@chakra-ui/styled-system/dist/declarations/src/utils";
import * as CSS from "csstype";
import { useEffect } from "react";
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
	const [index, setIndex] = useControllableState({
		defaultValue: 0,
	});

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
