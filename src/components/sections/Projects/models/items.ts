import { ProjectsInnerContentType, ProjectsLinksTypes } from 'locales/models/content';

export interface GridItemInterface {
	projectIndex: number;
	links: ProjectsLinksTypes[];
	title: string;
	description: string;
	stack: string[];
	projectsToShow: ProjectsInnerContentType[];
}
