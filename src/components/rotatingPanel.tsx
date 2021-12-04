import {
	Center,
	Icon,
	StackProps,
	useControllableState,
	VStack,
} from "@chakra-ui/react";
import useInterval from "@hooks/useInterval";
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

	useInterval(() => {
		setIndex(index === innerPanels.length - 1 ? 0 : index + 1);
	}, 5000);

	return (
		<VStack spacing={3}>
			{innerPanels[index]}
			<Center>
				<Center
					onClick={() =>
						setIndex(
							index === 0 ? innerPanels.length - 1 : index - 1
						)
					}
					w="fit-content"
					mx={2}
					cursor="pointer"
				>
					<Icon as={FaArrowLeft} boxSize={5} />
				</Center>
				{props.innerPanelProps.map((props, idx: number) => {
					return (
						<Center key={props.key}>
							<Icon
								as={FaCircle}
								boxSize={3}
								color={
									idx == index ? "white" : "brand.purple.dark"
								}
								mx={2}
								onClick={() => setIndex(idx)}
								cursor="pointer"
								opacity={0.7}
							/>
						</Center>
					);
				})}
				<Center
					onClick={() =>
						setIndex(
							index === innerPanels.length - 1 ? 0 : index + 1
						)
					}
					w="fit-content"
					mx={2}
					cursor="pointer"
				>
					<Icon as={FaArrowRight} boxSize={5} />
				</Center>
			</Center>
		</VStack>
	);
}
