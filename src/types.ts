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
	name: string;
	link: string;
	icon: any;
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
	key: string;
};

export type ActivitySlideProps = {
	children?: any;
	src: string;
	clubName: string;
	clubDesc: string;
	link: string;
	key: string;
};

export type BlogListing = {
	title: string;
	id: string;
	created_time: string;
	last_edited_time: string;

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

export type LinkButtonProps = {
	href: string;
	iconName?: string;
	text: string;
};

/**
 * A representation of Notion's file object.
 * See more at https://developers.notion.com/reference/file-object
 */
export type FileObj = {
	/**
	 * The URL to the file that this object describes
	 */
	url: string;
	/**
	 * The time when this file object's URL will expire, in ISO 8601 date time
	 * Only applicable when the file is hosted on Notion's servers
	 */
	expiry_time?: string;
};

/**
 * A type that represents a job posting pulled from the Applications database on Notion
 * Any values that are not included in the listing will be given the value of null
 */
export type JobPosting = {
	/**
	 * An array of rich text objects that represents the description of the posting.
	 * Please use the parseText in notion.ts to convert this any[] into a React element
	 */
	description: string;
	/**
	 * The rank of this posting, as a string
	 */
	rank: string;
	/**
	 * The URL to the form to this posting, as a string
	 */
	form: string;
	/**
	 * The program that this posting's job is a part of, as a string
	 */
	program: string;
	/**
	 * An image that accompanies this posting.
	 * Stored as a Notion file object
	 */
	image: FileObj;
	/**
	 * The area of expertise that this job demands the most of, as a string
	 */
	area: string;
	/**
	 * The name of the job for this posting, as a string
	 */
	name: string;
};
