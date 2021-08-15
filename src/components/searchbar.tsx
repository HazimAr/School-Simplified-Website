import {
	Center,
	Icon,
	Input,
	InputGroup,
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
} & Record<string, any>;

/**
 * Creates a Searchbar with the given SearchbarProps
 * @param props the props to pass to the component, namely, an optional callback function (a function that accepts a string) and optional size
 * @returns the Searchbar component
 */
export default function Searchbar(props: SearchbarProps): JSX.Element {
	const [searchWait, setSearchWait] = useState<ReturnType<
		typeof setTimeout
	> | null>(null);
	const [loading, _setLoading] = useBoolean(false);

	return (
		<InputGroup {...props} size={props.size}>
			<InputLeftElement
				pointerEvents="none"
				children={<Icon as={FaSearch} boxSize={5} />}
			/>
			<Input
				placeholder="Search All"
				bg="brand.transparent"
				onChange={(e) => {
					if (searchWait) clearTimeout(searchWait);
					_setLoading.on();
					setSearchWait(
						setTimeout(() => {
							// console.log("Invoked with " + e.target.value);
							setSearchWait(null);
							_setLoading.off();
							if (props.callback)
								props.callback(e.target.value.trim());
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
