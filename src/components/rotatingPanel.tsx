import {
	Center,
	HStack,
	Icon,
	StackProps,
	useControllableState,
	VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

type RotatingPanelProps = StackProps & {
	innerPanelProps: (Record<string, any> & { key: any })[];
	Element: (r: Record<string, any>) => JSX.Element;
};

export default function RotatingPanel(props: RotatingPanelProps): JSX.Element {
	const innerPanels = props.innerPanelProps.map((v) => {
		return <props.Element {...v} />;
	});

	const [index, setIndex] = useControllableState({
		defaultValue: 0,
	});
	let prevInterval: NodeJS.Timer;

	useEffect(() => {
		prevInterval = setInterval(() => {
			setIndex(index === innerPanels.length - 1 ? 0 : index + 1);
		}, 5000);
		console.log("initial value: ", prevInterval);

		return () => {
			console.log("clearing value:", prevInterval);
			clearTimeout(prevInterval);
		};
	}, [index]);

	// function resetInterval() {
	// 	console.log("clearing value:", prevInterval);
	// 	clearInterval(prevInterval);
	// 	prevInterval = setInterval(() => {
	// 		setIndex(index === innerPanels.length - 1 ? 0 : index + 1);
	// 	}, 5000);
	// 	console.log("new value:     ", prevInterval);
	// }

	return (
		<VStack spacing={3}>
			{innerPanels[index]}
			<HStack spacing={4}>
				<Center
					onClick={() => {
						setIndex(
							index === 0 ? innerPanels.length - 1 : index - 1
						);
						// resetInterval();
					}}
					w="fit-content"
					cursor="pointer"
				>
					<Icon as={FaArrowLeft} boxSize={5} />
				</Center>
				<Center flexWrap="wrap">
					{props.innerPanelProps.map((props, idx: number) => {
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
							index === innerPanels.length - 1 ? 0 : index + 1
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
