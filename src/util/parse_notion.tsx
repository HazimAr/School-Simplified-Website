/**
 * Parses an object from Notion that represents text
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
 */
export function parseText(text: any): JSX.Element {
	if (!text.plain_text || text.plain_text.matches(/[\s\n]+/gi)) {
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

	return <></>;
}
