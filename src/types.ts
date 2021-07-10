export type NotesProps = {
	title: string;
	href: string;
};

export type Subject = {
	title: string;
	content: {
		title: string;
		content: {
			title: string;
			content: NotesProps[];
		}[];
	}[];
};

export type AllSubjects = {
	subjects: Subject[];
};
