import {
	Box,
	Checkbox,
	Heading,
	Image,
	ListItem,
	OrderedList,
	Text,
	Icon,
	UnorderedList,
	Divider,
	HStack,
} from "@chakra-ui/react";
import NextLink from "@components/nextChakra";
import "katex/dist/katex.min.css";
import React, { cloneElement } from "react";
import { FaPaperclip, FaRegFilePdf, FaVideo } from "react-icons/fa";
import { InlineMath, BlockMath } from "react-katex"; // "react-latex" doesn't work for some odd reason
import { Author, BlogPage, FileObj } from "types";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
 * @returns an element representing the text
 */
export function parseText(text: any): JSX.Element {
	if (!text.plain_text?.length) {
		return <></>;
	}

	// if (text.plain_text.startsWith("!")) {
	// 	const parts: string[] = text.plain_text.substring(1).split(/[\s\n]+/g);
	// 	if (parts.length) {
	// 		switch (parts[0]) {
	// 			case "img":
	// 			case "image":
	// 				if (parts.length == 1) {
	// 					return <Image src={parts[1]} mx="auto" />;
	// 				} else {
	// 					let alt = parts[2];
	// 					for (let i = 3; i < parts.length; i++) {
	// 						alt += " " + parts[i];
	// 					}
	// 					return <Image src={parts[1]} alt={alt} mx="auto" />;
	// 				}
	// 		}
	// 	}
	// }

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
			<>{replaceNewlines(text.plain_text)}</>
		);
	if (text.href && !/^[\s\n]+$/g.test(text.plain_text)) {
		return (
			<NextLink
				href={text.href}
				{...textProps}
				color="#ffe19a"
				style={{ whiteSpace: "pre-line" }}
			>
				{plainText}
			</NextLink>
		);
	} else if (Object.keys(textProps).length) {
		return (
			<Box as="span" {...textProps} style={{ whiteSpace: "pre-line" }}>
				{plainText}
			</Box>
		);
	} else {
		return plainText;
	}
}

/**
 * Converts a plain string to a JSX psuedoelement with \n and \r replaced with <br />.
 * @param text the text to convert to a JSX psuedoelement
 * @returns the converted element
 */
function replaceNewlines(text: string): JSX.Element {
	// console.log('called with "' + text + '".');

	// no newlines
	if (!text.includes("\n") && !text.includes("\r")) return <>{text}</>;

	// >= 1 newline
	const elements: JSX.Element[] = [];

	for (const segment of text.split(/[\n\r]+/g)) {
		elements.push(<>{segment}</>);
		elements.push(<br />);
	}
	elements.pop();
	// console.log("elements: ", elements);

	return <>{elements}</>;
}

/**
 * A function that takes a collection of rich text objects and returns
 * a plaintext representation of all objects appended to each other
 * @param text a collection of rich text objects to parse into plaintext
 * @returns the plaintext of all the text
 */
export function parsePlainText(text: any[]): JSX.Element {
	return <>{text.map((block) => replaceNewlines(block.plain_text))}</>;
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
				<Text overflow="hidden">
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
					{block.to_do.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "text_" + idx })
					)}
				</Checkbox>
			);
		case "divider":
			return <Divider borderColor="white" />;
		case "quote":
			return (
				<Box borderLeftColor="white" borderLeftWidth={3} pl={5}>
					{block.quote.text.map((item: any, idx: number) =>
						cloneElement(parseText(item), { key: "quote_" + idx })
					)}
				</Box>
			);
		case "code":
			return (
				<Box
					bgColor="black"
					color="white"
					fontFamily="'Consolas', monospace"
					p={2}
					borderRadius="lg"
					as="pre"
					overflowX="scroll"
				>
					{parsePlainText(block.code.text)}
				</Box>
			);
		// return (
		// 	<SyntaxHighlighter
		// 		language={block.code.language}
		// 		style={atelierCaveDark}
		// 	>
		// 		{parsePlainText(block.code.text)}
		// 	</SyntaxHighlighter>
		// );
		case "image":
			const imageFile: FileObj = getFile(block.image);
			return (
				<Box>
					<Image src={imageFile.url} mx="auto" />
				</Box>
			);
		case "equation":
			return (
				<Box overflowX="scroll">
					<BlockMath math={block.equation.expression} />
				</Box>
			);
		case "file":
			const fileFile = getFile(block.file);
			// console.log("filefileobj: ", fileFileObj);
			return (
				<NextLink href={fileFile.url}>
					<HStack spacing={2}>
						<Icon as={FaPaperclip} w={5} h={5} />
						<Text>{getFileName(fileFile.url)}</Text>
					</HStack>
				</NextLink>
			);
		case "video":
			const videoFile = getFile(block.video);
			return (
				<NextLink href={videoFile.url}>
					<HStack spacing={2}>
						<Icon as={FaVideo} w={5} h={5} />
						<Text>{videoFile.url}</Text>
					</HStack>
				</NextLink>
			);
		case "pdf":
			const pdfFile = getFile(block.pdf);
			// console.log("filefileobj: ", fileFileObj);
			return (
				<NextLink href={pdfFile.url}>
					<HStack spacing={2}>
						<Icon as={FaRegFilePdf} w={5} h={5} />
						<Text>{getFileName(pdfFile.url)}</Text>
					</HStack>
				</NextLink>
			);
		case "callout":
			const icon = block.callout.icon;
			if (icon.type === "emoji") {
				return (
					<HStack
						spacing={3}
						p={3}
						borderRadius="lg"
						backgroundColor="brand.transparent"
					>
						<Text>{icon.emoji}</Text>
						<Text>{parsePlainText(block.callout.text)}</Text>
					</HStack>
				);
			} else {
				const calloutFile = getFile(icon);
				return (
					<HStack
						spacing={3}
						p={3}
						borderRadius="lg"
						backgroundColor="brand.transparent"
					>
						<Image src={calloutFile.url} maxW={5} maxH={5} />
						<Text>{parsePlainText(block.callout.text)}</Text>
					</HStack>
				);
			}

		// we will not even TRY to implement the following:
		case "table_of_contents":
		case "bookmark":
		case "breadcrumb":
		case "embed":
		case "child_page":
		case "child_database":
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
 * Parses the given block to get the FileObj stored inside of it
 * @param block the block object to fetch the file object from
 * @returns the internally stored FileObj
 */
export function getFile(block: any): FileObj {
	return block[block.type];
}

/**
 * Returns the last portion of the file path, presumably the name of the file.
 * For example, for the string "test/egg/nice.txt", this function should return "nice.txt".
 * @param filePath the path of the file, in string format
 * @returns the name of the file given in the path
 */
function getFileName(filePath: string): string {
	if (filePath.endsWith("/"))
		filePath = filePath.substring(0, filePath.length - 1);

	return filePath.substring(filePath.lastIndexOf("/") + 1);
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

/**
 * Converts the given list of authors into an attribution.
 * Usually in the form "Written by Author A and Author B", and so on
 * @param authors the author objects to convert to an attribution string
 * @returns an attribution string that contains the information in the given list
 */
export function toAuthorAttribution(authors: Author[]): string {
	if (authors?.length) {
		let authorNames: string;
		authorNames = "Written by ";
		switch (authors.length) {
			case 1:
				authorNames += authors[0].name;
				break;
			case 2:
				authorNames += authors[0].name + " and " + authors[1].name;
				break;
			default:
				authorNames +=
					authors
						.slice(0, authors.length - 1)
						.map((author) => author.name)
						.join(", ") +
					", and " +
					authors[authors.length - 1].name;
		}
		return authorNames;
	}

	return null;
}
