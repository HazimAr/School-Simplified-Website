/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-default-export */
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/contact/faq-item";
import { useState } from "react";
import { QAPair } from "types";

export default function FaqList({ list }: { list: QAPair[] }): JSX.Element {
	const [expanded, setExpanded] = useState<number[]>([]);

	return (
		<Accordion
			// allowMultiple
			onChange={(newExpanded: number[]) => {
				setExpanded(newExpanded);
			}}
			zIndex={0}
		>
			{list.map(({ question, answer }, index): JSX.Element => {
				return (
					<FaqItem
						key={index}
						question={question}
						answers={answer}
						open={expanded.includes(index)}
					/>
				);
			})}
		</Accordion>
	);
}
