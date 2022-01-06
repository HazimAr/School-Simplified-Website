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
	title: "School Simplified | Education Help",
	lang: "en-us",
	description:
		"School Simplified is a virtually run nonprofit that aims to spread educational equality by providing free educational services, products, and opportunities for teenagers. We provide free tutoring, free Essay Revision, free notes, free college preparation, and a community where like-minded teenagers can meet and form life-lasting connections.",
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
		icon: (props) => <FaInstagram {...props} />,
	},
	{
		name: "TikTok",
		link: "https://www.tiktok.com/@schoolsimplified",
		icon: (props) => <FaTiktok {...props} />,
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
		icon: (props) => <FaDiscord {...props} />,
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/SchoolSimple",
		icon: (props) => <FaFacebook {...props} />,
	},
	{
		name: "Twitter",
		link: "https://twitter.com/SchoolSimplify",
		icon: (props) => <FaTwitter {...props} />,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/school-simplified",
		icon: (props) => <FaLinkedinIn {...props} />,
	},
];

export { GA_TRACKING_ID, IS_PRODUCTION, META, socials };
