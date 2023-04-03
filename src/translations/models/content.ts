export type ContentItem = {
	title: string;
	synopsis: string;
	imageUrl: string;
};

export type ContentTypes = {
	[key: string]: {
		title: string;
		content: ContentItem[];
	};
};
