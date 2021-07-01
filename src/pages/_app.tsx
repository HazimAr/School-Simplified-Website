import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import "@styles/global.css";
import theme from "@styles/theme";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ChakraProvider theme={theme}>
				<ReactAudioPlayer src="/alan.mp3" autoPlay controls />
				<Header />

				<Component {...pageProps} />

				<Footer />
			</ChakraProvider>
		</>
	);
}
