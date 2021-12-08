import {
	Center,
	Icon,
	Input,
	InputGroup,
	InputGroupProps,
	InputLeftElement,
	InputRightElement,
	Spinner,
	useBoolean,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchbarProps = {
	callback?: (arg0: string) => any;
	size?: string;
} & InputGroupProps;

/**
 * Creates a Searchbar with the given SearchbarProps
 * @param props the props to pass to the component, namely, an optional callback function (a function that accepts a string) and optional size
 * @returns the Searchbar component
 */
export default function Searchbar(props: SearchbarProps): JSX.Element {
	const [searchWait, setSearchWait] = useState<ReturnType<
		typeof setTimeout
	> | null>(null);
	const [loading, setLoading] = useBoolean(false);

	const callbackFunction = props.callback;
	const { callback, ...functionlessProps } = props;

	return (
		<InputGroup {...functionlessProps}>
			{/* size={props.size} is already included */}
			<InputLeftElement
				pointerEvents="none"
				children={<Icon as={FaSearch} boxSize={5} />}
				height="100%"
			/>
			<Input
				placeholder="Search"
				bg="brand.transparent"
				borderRadius="full"
				size="lg"
				onChange={(e) => {
					if (searchWait) clearTimeout(searchWait);
					setLoading.on();
					setSearchWait(
						setTimeout(() => {
							// console.log("Invoked with " + e.target.value);
							setSearchWait(null);
							setLoading.off();
							if (callbackFunction)
								callbackFunction(e.target.value.trim());
						}, 500)
					);
				}}
			/>
			<InputRightElement
				pointerEvents="none"
				children={
					<Center h="100%">
						<Spinner size={props.size} />
					</Center>
				}
				display={loading ? "block" : "none"}
			/>
		</InputGroup>
	);
}
