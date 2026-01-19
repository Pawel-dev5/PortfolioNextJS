import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProjectDetailsPage from '@/components/Portfolio/ProjectDetailsPage';
import {
	createProjectSlug,
	getFeaturedProjects,
	getPortfolioProjects,
	type ProjectCategoryKey,
	type ProjectLink,
} from '@/lib/portfolioProjects';

type ProjectDetailsData = {
	id: string;
	slug: string;
	title: string;
	category: string;
	description: string;
	fullDescription: string;
	technologies: string[];
	links: ProjectLink[];
	image?: string;
	imageFit?: 'contain' | 'cover';
	gallery: string[];
	challenge?: string;
	solution?: string;
	results?: string[];
	categories: ProjectCategoryKey[];
};

type RelatedProjectData = {
	id: string;
	slug: string;
	title: string;
	category: string;
	image?: string;
};

type NavigationProjectData = {
	slug: string;
	title: string;
};

const getCategoryLabel = (t: (key: string) => string, categories: ProjectCategoryKey[]) => {
	const primaryCategory = categories[0];
	return primaryCategory ? t(`categories.${primaryCategory}`) : t('categories.other');
};

const buildProjects = async (locale: string) => {
	const portfolioPageT = await getTranslations({ locale, namespace: 'PortfolioPage' });

	const featuredProjects: ProjectDetailsData[] = getFeaturedProjects(locale).map((project) => ({
		id: `featured-${project.key}`,
		slug: project.key,
		title: project.title,
		category: project.categoryLabel ?? getCategoryLabel(portfolioPageT, project.categories),
		description: project.description,
		fullDescription: project.fullDescription,
		technologies: project.stack,
		links: project.links,
		image: project.imageUrl ? `/assets/${project.imageUrl}` : undefined,
		imageFit: project.imageFit ?? 'cover',
		gallery: project.gallery,
		challenge: project.challenge,
		solution: project.solution,
		results: project.results,
		categories: project.categories,
	}));

	const otherProjects: ProjectDetailsData[] = getPortfolioProjects(locale).map((project) => ({
		id: `project-${project.id}`,
		slug: createProjectSlug(project.title, `project-${project.id}`),
		title: project.title,
		category: getCategoryLabel(portfolioPageT, project.categories),
		description: project.description,
		fullDescription: project.fullDescription,
		technologies: project.stack,
		links: project.links,
		image: project.imageUrl ? `/assets/${project.imageUrl}` : undefined,
		imageFit: 'cover',
		gallery: project.gallery,
		challenge: project.challenge,
		solution: project.solution,
		results: project.results,
		categories: project.categories,
	}));

	return [...featuredProjects, ...otherProjects];
};

const getRelatedProjects = (projects: ProjectDetailsData[], current: ProjectDetailsData, limit: number) =>
	projects
		.filter(
			(project) =>
				project.slug !== current.slug && project.categories.some((category) => current.categories.includes(category)),
		)
		.slice(0, limit)
		.map<RelatedProjectData>((project) => ({
			id: project.id,
			slug: project.slug,
			title: project.title,
			category: project.category,
			image: project.image,
		}));

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
	const { locale, slug } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata.portfolio' });
	const projects = await buildProjects(locale);
	const project = projects.find((item) => item.slug === slug);

	if (!project) {
		return {
			title: t('title'),
			description: t('description'),
			keywords: t('keywords'),
		};
	}

	const baseTitle = t('title');
	return {
		title: `${project.title} | ${baseTitle}`,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description,
			locale: locale,
			type: 'article',
			images: project.image ? [project.image] : undefined,
		},
	};
}

const PortfolioProjectDetailsPage = async ({ params }: { params: Promise<{ locale: string; slug: string }> }) => {
	const { locale, slug } = await params;
	const projects = await buildProjects(locale);
	const project = projects.find((item) => item.slug === slug) ?? null;
	const relatedProjects = project ? getRelatedProjects(projects, project, 3) : [];

	const currentIndex = project ? projects.findIndex((item) => item.slug === project.slug) : -1;
	const prevProject: NavigationProjectData | null =
		currentIndex > 0 ? { slug: projects[currentIndex - 1].slug, title: projects[currentIndex - 1].title } : null;
	const nextProject: NavigationProjectData | null =
		currentIndex >= 0 && currentIndex < projects.length - 1
			? { slug: projects[currentIndex + 1].slug, title: projects[currentIndex + 1].title }
			: null;

	const tDetails = await getTranslations({ locale, namespace: 'ProjectDetails' });

	return (
		<ProjectDetailsPage
			project={project}
			relatedProjects={relatedProjects}
			prevProject={prevProject}
			nextProject={nextProject}
			labels={{
				backToPortfolio: tDetails('backToPortfolio'),
				visitSite: tDetails('visitSite'),
				notFound: {
					title: tDetails('notFound.title'),
					description: tDetails('notFound.description'),
					cta: tDetails('notFound.cta'),
				},
				sections: {
					technologies: tDetails('sections.technologies'),
					challenge: tDetails('sections.challenge'),
					solution: tDetails('sections.solution'),
					results: tDetails('sections.results'),
					gallery: tDetails('sections.gallery'),
					related: tDetails('sections.related'),
				},
				navigation: {
					previous: tDetails('navigation.previous'),
					next: tDetails('navigation.next'),
				},
			}}
		/>
	);
};

export default PortfolioProjectDetailsPage;
