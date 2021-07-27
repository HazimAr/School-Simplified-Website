// google analytics measurement id
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

type PagePreviewMeta = {
	title: string;
	description: string;
	img: string;
}

const PAGEMETA: { [pageName: string]: PagePreviewMeta } = {
	academics: {
		title: "School Simplified | Academics",
		description: "",
		img: "",
	},
	community: {
		title: "School Simplified | Community",
		description: "",
		img: "",
	},
	contact: {
		title: "School Simplified | Contact",
		description: "",
		img: "",
	},
	donate: {
		title: "School Simplified | Donate",
		description: "",
		img: "",
	},
	essay: {
		title: "School Simplified | Essay",
		description: "",
		img: "",
	},
	faq: {
		title: "School Simplified | FAQ",
		description: "",
		img: "",
	},
	// "hacker": {

	// }
	// index: {

	// },
	leadership: {
		title: "School Simplified | Leadership",
		description: "",
		img: "",
	},
	notes: {
		title: "School Simplified | Notes",
		description:
			"All the top-notch notes you'll ever want for your academic needs!",
		img: "/timmy/17.png",
	},
	partners: {
		title: "School Simplified | Partners",
		description: "",
		img: "",
	},
	// "privacy": {

	// },
	// "scholarship": {

	// }
	simplihacks: {
		title: "School Simplified | Simplihacks",
		description: "",
		img: "",
	},
	// "timmy": {

	// }
	// tos: {

	// },
	tutoring: {
		title: "School Simplified | Tutoring",
		description: "",
		img: "",
	},
	volunteer: {
		title: "School Simplified | Volunteer",
		description: "",
		img: "",
	},
	"404": {
		title: "School Simplified | 404",
		description:
			"Oh no! It looks like a dog has eaten the page you're looking for",
		img: "",
	},
	"500": {
		title: "School Simplified | 500",
		description:
			"Oh no! It looks like a dog could not spit out the information you're looking for",
		img: "/timmy/dog.png",
	},
};

export { GA_TRACKING_ID, IS_PRODUCTION, META, PAGEMETA };
