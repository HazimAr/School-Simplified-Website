/* eslint-disable import/no-default-export */
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Flex
} from "@chakra-ui/react";

type FaqItemProps = {
	question: string;
	answer: string;
	open: boolean;
};

export default function FaqItem({
	question,
	answer,
	open,
}: FaqItemProps): JSX.Element {
	return (
		<AccordionItem
			borderRadius="3xl"
			backgroundColor="white"
			color="#5a60ad"
			px={2}
			py={1}
			mb={5}
		>
			<AccordionButton 
        _hover={{ backgroundColor: "transparent", boxShadow: "none" }}
        _active={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none "}}
      >
				<Flex textAlign="left" flex="1">
					{question}
				</Flex>
				{open ? (
					<TriangleUpIcon color="#424242" />
				) : (
					<TriangleDownIcon color="#424242" />
				)}
			</AccordionButton>
			<AccordionPanel pb={4}>{answer}</AccordionPanel>
		</AccordionItem>
	);
}
