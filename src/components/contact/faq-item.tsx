/* eslint-disable import/no-default-export */
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Flex,
    Link
} from "@chakra-ui/react";
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
							<Link
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
