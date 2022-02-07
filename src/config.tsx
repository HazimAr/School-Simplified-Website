import {
	FaDiscord,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
} from "react-icons/fa";
import { SocialMediaIcon } from "types";

const GA_TRACKING_ID = "G-VGBJF1CZMF";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	img: string;
};

const META: MetaType = {
	title: "School Simplified",
	lang: "en-us",
	url: "https://schoolsimplified.tech",
	img: "/logo.png",
};

const socials: SocialMediaIcon[] = [
	// {
	// 	name: "Spotify",
	// 	link: "https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=e7557f7aad5c49c8",
	// 	icon: (props) => <FaSpotify {...props} />,
	// },
	{
		name: "Instagram",
		link: "https://www.instagram.com/schoolsimplified/",
		icon: FaInstagram,
	},
	{
		name: "TikTok",
		link: "https://www.tiktok.com/@schoolsimplified",
		icon: FaTiktok,
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
		icon: FaDiscord,
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/SchoolSimple",
		icon: FaFacebook,
	},
	{
		name: "Twitter",
		link: "https://twitter.com/SchoolSimplifed",
		icon: FaTwitter,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/school-simplified",
		icon: FaLinkedinIn,
	},
];

export { GA_TRACKING_ID, IS_PRODUCTION, META, socials };
