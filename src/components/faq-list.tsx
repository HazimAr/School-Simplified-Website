import { useState } from "react";
import { Accordion } from "@chakra-ui/react";
import FaqItem from "@components/faq-item";

type FaqListProps = {
  list: {
    question: string,
    answer: string
  }[]
}

export default function FaqList({ list }: FaqListProps) :JSX.Element {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <Accordion 
      allowMultiple 
      onChange={(newExpanded: number[]) => setExpanded(newExpanded)} 
      px={{ sm: 10, md: 100, lg: 200}}
    >
      {
        list.map(({ question, answer }, index) :JSX.Element => {
          return (
            <FaqItem 
              question={question} 
              answer={answer} 
              open={expanded.includes(index) ? true : false}
            />
          );
        })
      }
    </Accordion>
  )
}