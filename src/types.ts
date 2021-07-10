export type Note = {
	title: string;
	href: string;
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
	content: Note[];
};

export type AllSubjects = {
	subjects: Subject[];
};
