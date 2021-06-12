import "@styles/global.css";
import Footer from "@components/footer/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import { Chakra } from "@styles/chakra";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

			<Chakra cookies={pageProps.cookies}>
				<Header />

				<Component {...pageProps} />

				<Footer />
			</Chakra>
		</>
	);
}
