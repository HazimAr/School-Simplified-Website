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
