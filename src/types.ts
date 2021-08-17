export type NotesProps = {
	title: string;
	href: string;
};

export type Subject = {
	title: string;
	content: Class[];
};

export type Sponsor = {
	image: string;
	link: string;
};

export type Class = {
	title: string;
	content: Unit[];
};

export type Unit = {
	title: string;
	content: NotesProps[];
};

export type AllSubjects = {
	subjects: Subject[];
};

export type ArtData = {
	image: string;
	description: string;
	monthlyPrompt: string;
	name: string;
	socialMedia: SocialMedia[];
};

export type SocialMedia = {
	media: string;
	tag: string;
	link?: string;
};

export type QAPair = {
	question: string;
	answer: AnswerPart[];
};

export type QASection = {
	title: string;
	list: QAPair[];
};

export type AnswerPart = {
	text: string;
	link: string;
};

export type GovernanceSection = {
	title: string;
	docs: GovernanceDocument[];
};

export type GovernanceDocument = {
	title: string;
	href: string;
};

export type Person = {
	name: string;
	title: string;
	img: string;
};

export type ProjectWinner = {
	names: string;
	title: string;
	prize: string;
	link: string;
	img: string;
};

export type SpotifyLink = {
	title: string;
	link: string;
};

export type SocialMediaIcon = {
	icon: any;
	size: any;
	link: string;
};

export type ScholarshipProps = {
	title: string;
	link: string;
	value: string;
	international_or_domestic: string[];
	state: string[];
	eligible_grades: string[];
	open_date: string;
	closing_date: string;
	notes: string;
};

export type VolunteerPanelProps = {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
	link: string;
	functions?: string[];
};

export type BlogListing = {
	title: string;
	id: string;
	created_time: string;
	link: string;
	category: string;
	icon: string;
	authors?: Author[];
};

export type Author = {
	id?: string | undefined;
	name: string;
	avatar_url: string;
	// email: string;
};

export type BlogPage = {
	blocks: any[];
};
