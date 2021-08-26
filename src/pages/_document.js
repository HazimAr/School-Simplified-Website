import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID, META } from "../config.ts";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<link rel = "icon" href = "/favicon.ico" />

					<meta name="description" content={META.description} />

					<meta itemProp="name" content={META.title} />
					<meta itemProp="description" content={META.description} />
					<meta itemProp="image" content={META.img} />

					<meta property="og:url" content={META.url} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={META.title} />
					<meta
						property="og:description"
						content={META.description}
					/>
					<meta property="og:image" content={META.img} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={META.title} />
					<meta
						name="twitter:description"
						content={META.description}
					/>
					<meta name="twitter:image" content={META.img} />

					<meta name="application-name" content="School Simplified" />
					<meta name="apple-mobile-web-app-title" content="School Simplified" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black" />
					<link rel="apple-touch-icon" href="/mobileicon.png" />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
					<link href="/fonts/Montserrat-Regular" rel="stylesheet" />
					<link href="/fonts/Montserrat-Bold" rel="stylesheet" />
				</Head>
				<body>
					<ColorModeScript initialColorMode="dark" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
