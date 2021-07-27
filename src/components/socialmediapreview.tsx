import React from "react";
import Head from "next/head";

interface Props {
    title: string;
    description: string;
    img: string;
}

export default function SocialMediaPreview( {title, description, img}: Props ): JSX.Element {
    return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />
		</Head>
	);
}