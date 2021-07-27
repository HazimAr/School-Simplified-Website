import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { GA_TRACKING_ID, META } from "../config.ts";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-us">
				<Head>
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
