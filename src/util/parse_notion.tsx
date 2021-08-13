import {
	Box,
	Checkbox,
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextLink from "@components/nextChakra";
import React from "react";
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
export function parseText(text: any): JSX.Element {
	if (!text.plain_text.length || /^[\s\n]+$/g.test(text.plain_text)) {
		return <></>;
	}

	const textProps: Record<string, any> = {};
	if (text.annotations.bold) {
		textProps.fontWeight = "bold";
	}
	if (text.annotations.italic) {
		textProps.fontStyle = "italic";
	}
	if (text.annotations.strikethrough) {
		textProps.textDecoration = "strikethrough";
	}
	if (text.annotations.underline) {
		textProps.borderBottomStyle = "solid";
		textProps.borderBottomWidth = "thin";
	}
	if (text.annotations.code) {
		textProps.fontFamily = "monospace"; // maybe more later
	}
	if (text.annotations.color !== "default") {
		textProps.color = text.annotations.color;
	}

	if (text.href) {
		return (
			<NextLink href={text.href} {...textProps}>
				{text.plain_text}
			</NextLink>
		);
	} else if (Object.keys(textProps).length) {
		return (
			<Box as="span" {...textProps}>
				{text.plain_text}
			</Box>
		);
	} else {
		return <>{text.plain_text}</>;
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
					{block.paragraph.text.map((item: any) => parseText(item))}
				</Text>
			);
		case "heading_1":
			return (
				<Heading as="h1">
					{block.heading_1.text.map((item: any) => parseText(item))}
				</Heading>
			);
		case "heading_2":
			return (
				<Heading as="h2">
					{block.heading_2.text.map((item: any) => parseText(item))}
				</Heading>
			);
		case "heading_3":
			return (
				<Heading as="h3">
					{block.heading_3.text.map((item: any) => parseText(item))}
				</Heading>
			);
		case "bulleted_list_item":
		case "numbered_list_item":
			return (
				<ListItem>
					{block[block.type].text.map((item: any) => parseText(item))}
				</ListItem>
			);
		case "to_do":
			return (
				<Checkbox defaultChecked={block.checked} disabled>
					{block.to_do.map((item: any) => parseText(item))}
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
	for (const block of page.blocks) {
		const element = parseBlock(block);
		if (block.type === "bulleted_list_item") {
			unorderedList.push(element);
			if (orderedList.length) {
				elementList.push(<OrderedList>{orderedList}</OrderedList>);
				orderedList = [];
			}
		} else if (block.type === "numbered_list_item") {
			orderedList.push(element);
			if (unorderedList.length) {
				elementList.push(
					<UnorderedList>{unorderedList}</UnorderedList>
				);
				unorderedList = [];
			}
		} else {
			if (orderedList.length) {
				elementList.push(<OrderedList>{orderedList}</OrderedList>);
				orderedList = [];
			}
			if (unorderedList.length) {
				elementList.push(
					<UnorderedList>{unorderedList}</UnorderedList>
				);
				unorderedList = [];
			}
			elementList.push(element);
		}
	}
	if (orderedList.length) {
		elementList.push(<OrderedList>{orderedList}</OrderedList>);
	}
	if (unorderedList.length) {
		elementList.push(<UnorderedList>{unorderedList}</UnorderedList>);
	}
	return <>{elementList}</>;
}
