import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "64em",
	xl: "80em",
});

const theme = extendTheme({
	colors: {
		black: "#16161D",
		bg: {
			100: "#0B0C10",
			200: "#1F2833",
		},
		brand: {
			100: "#E2CDF5",
			200: "#C59FEB",
			300: "#9165C5",
			400: "#5A378B",
			500: "#1F0C3E",
			600: "#170835",
			700: "#11062C",
			800: "#0C0323",
			900: "#08021D",
		},
		text: {
			100: "white",
			200: "#E4E4E4",
			300: "#afafaf",
			400: "#949494",
			500: "#737373",
			600: "#616161",
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",
				color: "white",
				bg: "brand.900",
				lineHeight: "base",
			},
			a: {
				color: "white",
			},
		}),
	},
	initialColorMode: "dark",
	useSystemColorMode: true,
	fonts,
	breakpoints,
});

export default theme;
