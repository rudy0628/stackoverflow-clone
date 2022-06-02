export type Issue = {
	title: string;
	tags: string[];
	link: string;
	creation_date: number;
	score: number;
	owner: {
		display_name: string;
		link: string;
		profile_image: string;
	};
};

export type Issues = Issue[];
