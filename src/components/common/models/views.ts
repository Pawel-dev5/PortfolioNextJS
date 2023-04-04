export interface SectionTitleInterface {
	counter: number;
	title: string;
}

export type CompanyLinkTypes = 'BIG' | 'DEFAULT';

export interface CompanyLinkInterface {
	company: string;
	url: string;
	variant?: CompanyLinkTypes;
}
