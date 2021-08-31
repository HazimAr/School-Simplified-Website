import ProgressBar from "@badrap/bar-of-progress";
import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Stupid from "./hacker";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	// Curtesy of The chakra Homie (Zim)
	const progress = new ProgressBar({
		size: 2,
		color: theme.colors.brand.gold,
		delay: 0,
	});

	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeStart", progress.start);
		router.events.on("routeChangeComplete", progress.finish);
		router.events.on("routeChangeError", progress.finish);
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	const title = router.asPath.split("/")[1];
	return (
		<>
			<Head>
				{/* Fallback Title */}
				<title>
					School Simplified | {/* @ts-ignore */}
					{title.charAt(0).toUpperCase() + title.slice(1) ||
						"Education Help"}
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{process.env.NODE_ENV === "test" ? (
				<Stupid />
			) : (
				<ChakraProvider theme={theme}>
					<Stack justify="space-between" minH="100vh" spacing={0}>
						<Box>
							<Header />
							<Component {...pageProps} />
						</Box>
						<Footer />
					</Stack>
				</ChakraProvider>
			)}
		</>
	);
}
