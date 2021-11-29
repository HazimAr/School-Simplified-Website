/* eslint-disable import/no-default-export */
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Flex,
} from "@chakra-ui/react";
import NextLink from "@components/nextChakra";
import { AnswerPart } from "types";

type FaqItemProps = {
	question: string;
	answers: AnswerPart[];
	open: boolean;
};

export default function FaqItem({
	question,
	answers,
	open,
}: FaqItemProps): JSX.Element {
	return (
		<AccordionItem
			boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
			borderRadius="10px"
			backgroundColor="white"
			color="#5a60ad"
			px={2}
			py={1}
			mb={5}
		>
			<AccordionButton
				_hover={{ backgroundColor: "transparent", boxShadow: "none" }}
				_active={{ boxShadow: "none" }}
				_focus={{ boxShadow: "none " }}
			>
				<Flex textAlign="left" flex="1" fontWeight="bold">
					{question}
				</Flex>
				{open ? (
					<TriangleUpIcon color="#424242" />
				) : (
					<TriangleDownIcon color="#424242" />
				)}
			</AccordionButton>
			<AccordionPanel pb={4}>
				{answers.map((answer: AnswerPart, idx: number) => {
					if (answer.link) {
						return (
							<NextLink
								href={answer.link}
								key={"link_" + idx}
								color="brand.gold2"
							>
								{answer.text}
							</NextLink>
						);
					} else {
						return answer.text;
					}
				})}
			</AccordionPanel>
		</AccordionItem>
	);
}
