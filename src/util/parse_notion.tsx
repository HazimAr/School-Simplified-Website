import {
	Box,
	Checkbox,
	Heading,
	Image,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextLink from "@components/nextChakra";
import "katex/dist/katex.min.css";
import React, { cloneElement } from "react";
import { InlineMath } from "react-katex"; // "react-latex" doesn't work for some odd reason
import { BlogPage } from "types";
/**
 * Parses an object from Notion that represents text into a Chakra object
 * {
        "type": "text",
        "text": {
            "content": "Lorem ipsum",
            "link": null
        },
        "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
        },
        "plain_text": "Lorem ipsum",
        "href": null
    },
 * @param text an object like the one given above
 * @return an element representing the text
 */

export function parseText(text: any) {
	if (!text.plain_text.length) {
		return <></>;
	}

	if (text.plain_text.startsWith("!")) {
		const parts: string[] = text.plain_text.substring(1).split(/[\s\n]+/g);
		if (parts.length) {
			switch (parts[0]) {
				case "img":
				case "image":
					if (parts.length == 1) {
						return <Image src={parts[1]} mx="auto" />;
					} else {
						let alt = parts[2];
						for (let i = 3; i < parts.length; i++) {
							alt += " " + parts[i];
						}
						return <Image src={parts[1]} alt={alt} mx="auto" />;
					}
			}
		}
	}

	const textProps: Record<string, any> = {};
	if (text.annotations.bold) {
		textProps.fontWeight = "bold";
	}
	if (text.annotations.italic) {
		textProps.fontStyle = "italic";
	}
	if (text.annotations.strikethrough) {
		textProps.textDecoration = "line-through";
	}
	if (text.annotations.underline) {
		textProps.borderBottomStyle = "solid";
		textProps.borderBottomWidth = "thin";
		textProps.borderBottomColor = "initial";
	}
	if (text.annotations.code) {
		textProps.fontFamily = "monospace";
		textProps.p = 1;
		textProps.my = -1;
		textProps.bg = "black";
		textProps.borderRadius = "md";
	}
	if (text.annotations.color !== "default") {
		textProps.color = text.annotations.color;
	}

	const plainText =
		text.type === "equation" ? (
			<InlineMath math={text.plain_text} />
		) : (
			<>
				{text.plain_text.split("\n").length > 1 ? (
					<>
						{text.plain_text}
						<br />
					</>
				) : (
					<>{text.plain_text}</>
				)}
			</>
		);
	console.log(text.plain_text.split("\n"));
	if (text.href && !/^[\s\n]+$/g.test(text.plain_text)) {
		return (
			<NextLink href={text.href} {...textProps} color="#ffe19a">
				{}
				{plainText}
			</NextLink>
		);
	} else if (Object.keys(textProps).length) {
		return (
			<Box as="span" {...textProps}>
				{plainText}
			</Box>
		);
	} else {
		return plainText;
	}
}

/**
 * A function that takes a block object and spits out a Chakra object
 * @param block the block object to parse
 * @returns the parsed block as a JSX element
 */
export function parseBlock(block: any): JSX.Element {
	switch (block.type) {
		case "paragraph":
			return (
				<Text>
					{block.paragraph.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Text>
			);
		case "heading_1":
			return (
				<Heading as="h1" size="lg" pt={3}>
					{block.heading_1.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Heading>
			);
		case "heading_2":
			return (
				<Heading as="h2" size="md" pt={2}>
					{block.heading_2.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Heading>
			);
		case "heading_3":
			return (
				<Heading as="h3" size="sm" pt={1}>
					{block.heading_3.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Heading>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<ListItem>
					{block[block.type].text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</ListItem>
			);
		case "to_do":
			return (
				<Checkbox defaultChecked={block.checked} disabled>
					{block.to_do.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Checkbox>
			);
		case "child_page":

		case "toggle":

		case "unsupported":

		default:
			return (
				<Text as="i" color="red">
					UNSUPPORTED
				</Text>
			);
	}
}

/**
 * Parses the given page into a JSX element
 * @param page the Notion page to parse
 * @returns an JSX element representing the page
 */
export function parsePage(page: BlogPage): JSX.Element {
	const elementList: JSX.Element[] = [];
	let orderedList: JSX.Element[] = [],
		unorderedList: JSX.Element[] = [];
	// console.log(page.blocks);
	let cnt = 0;
	for (const block of page.blocks) {
		const element = parseBlock(block);
		if (block.type === "bulleted_list_item") {
			unorderedList.push(element);
			if (orderedList.length) {
				elementList.push(
					<OrderedList key={"block_" + cnt++} pl={6}>
						{orderedList.map((item, idx: number) =>
							cloneElement(item, { key: "ol_" + idx })
						)}
					</OrderedList>
				);
				orderedList = [];
			}
		} else if (block.type === "numbered_list_item") {
			orderedList.push(element);
			if (unorderedList.length) {
				elementList.push(
					<UnorderedList key={"block_" + cnt++} pl={6}>
						{unorderedList.map((item, idx: number) =>
							cloneElement(item, { key: "ul_" + idx })
						)}
					</UnorderedList>
				);
				unorderedList = [];
			}
		} else {
			if (orderedList.length) {
				elementList.push(
					<OrderedList key={"block_" + cnt++} pl={6}>
						{orderedList.map((item, idx: number) =>
							cloneElement(item, { key: "ol_" + idx })
						)}
					</OrderedList>
				);
				orderedList = [];
			}
			if (unorderedList.length) {
				elementList.push(
					<UnorderedList key={"block_" + cnt++} pl={6}>
						{unorderedList.map((item, idx: number) =>
							cloneElement(item, { key: "ul_" + idx })
						)}
					</UnorderedList>
				);
				unorderedList = [];
			}
			elementList.push(cloneElement(element, { key: "block_" + cnt++ }));
		}
	}
	if (orderedList.length) {
		elementList.push(
			<OrderedList key={"block_" + cnt++} pl={6}>
				{orderedList.map((item, idx: number) =>
					cloneElement(item, { key: "ol_" + idx })
				)}
			</OrderedList>
		);
	}
	if (unorderedList.length) {
		elementList.push(
			<UnorderedList key={"block_" + cnt++} pl={6}>
				{unorderedList.map((item, idx: number) =>
					cloneElement(item, { key: "ul_" + idx })
				)}
			</UnorderedList>
		);
	}
	return <>{elementList}</>;
}
