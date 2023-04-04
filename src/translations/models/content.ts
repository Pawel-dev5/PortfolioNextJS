export type HomeContentType = {
	[key: string]: {
		title: string;
		name: string;
		headline: string;
		description: string;
		company: string;
		button: string;
	};
};

export type AboutMeContentType = {
	[key: string]: {
		sectionTitle: string;
		paragraph1: string;
		paragraph2: string;
		paragraph3: string;
		paragraph4: string;
		stackList: string[];
	};
};

export type JobInnerContentType = {
	id: number;
	company: string;
	jobTitle: string;
	url: string;
	range: string;
	descriptions: string[];
};

export type JobsContentType = {
	[key: string]: {
		sectionTitle: string;
		jobs: JobInnerContentType[];
	};
};
