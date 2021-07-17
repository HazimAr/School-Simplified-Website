export type NotesProps = {
	title: string;
	href: string;
	lastEdited?: string;
};

export type Subject = {
	title: string;
	content: Class[];
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

export type AnswerPart = { text: string; link?: string };
