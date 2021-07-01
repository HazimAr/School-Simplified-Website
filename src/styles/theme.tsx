/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			transparent: "rgba(255,255,255,0.3)",
			transparent2: "rgba(255,255,255,0.6)",
			purple: {
				light: "rgb(90, 96, 174)",
				dark: "rgb(69, 74, 138)",
			},

			gold: "#fcd270",
		},
		text: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			1000: "#161616",
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
				lineHeight: "base",
			},
		}),
	},
});

export default theme;
