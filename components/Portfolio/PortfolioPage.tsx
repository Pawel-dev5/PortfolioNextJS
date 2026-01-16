import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import {
	FEATURED_PROJECTS_BASE,
	getPortfolioPageContent,
	getPortfolioProjects,
	type FeaturedProjectBase,
	type PortfolioProject,
} from '@/lib/portfolioProjects';

type FeaturedProject = FeaturedProjectBase & {
	title: string;
	category: string;
	description: string;
};

const getFeaturedProjects = async (locale: string): Promise<FeaturedProject[]> => {
	const t = await getTranslations({ locale, namespace: 'Portfolio' });

	return FEATURED_PROJECTS_BASE.map((project) => ({
		...project,
		title: t(`projects.${project.key}.title`),
		category: t(`projects.${project.key}.category`),
		description: t(`projects.${project.key}.description`),
	}));
};

const ProjectLinks = ({ links }: { links: PortfolioProject['links'] }) => {
	const visibleLinks = links.filter((link) => Boolean(link.url));
	if (visibleLinks.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-3">
			{visibleLinks.map((link) => (
				<a
					key={link.id}
					href={link.url ?? '#'}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
				>
					{link.type === 'GitHub' ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
					<span>{link.type}</span>
				</a>
			))}
		</div>
	);
};

const ProjectStack = ({ stack }: { stack: string[] }) => (
	<div className="flex flex-wrap gap-2">
		{stack.map((tech) => (
			<span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
				{tech}
			</span>
		))}
	</div>
);

const ProjectCard = ({ project }: { project: PortfolioProject }) => (
	<article className="glass-card flex h-full flex-col gap-6 rounded-3xl border border-transparent p-6 transition hover:border-primary/20">
		{project.imageUrl ? (
			<div className="relative aspect-video overflow-hidden rounded-2xl bg-secondary/40">
				<Image
					src={`/assets/${project.imageUrl}`}
					alt={project.title}
					fill
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</div>
		) : null}
		<div className="flex flex-1 flex-col gap-4">
			<div>
				<h3 className="text-xl font-semibold">{project.title}</h3>
				<p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
			</div>
			<ProjectStack stack={project.stack} />
			<ProjectLinks links={project.links} />
		</div>
	</article>
);

const FeaturedProjectCard = ({ project }: { project: FeaturedProject }) => (
	<article className="glass-card flex h-full flex-col gap-6 rounded-3xl border border-transparent p-6 transition hover:border-primary/20">
		<div className="relative aspect-video overflow-hidden rounded-2xl bg-secondary/40">
			<Image
				src={`/assets/${project.imageUrl}`}
				alt={project.title}
				fill
				className={project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}
				sizes="(max-width: 1024px) 100vw, 60vw"
			/>
		</div>
		<div className="flex flex-1 flex-col gap-4">
			<div>
				<span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
				<h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
				<p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
			</div>
			<ProjectStack stack={project.stack} />
			<ProjectLinks links={project.links} />
		</div>
	</article>
);

const PortfolioPage = async ({ locale }: { locale: string }) => {
	const content = getPortfolioPageContent(locale);
	const projects = getPortfolioProjects(locale);
	const featuredProjects = await getFeaturedProjects(locale);

	return (
		<section className="section-container py-20">
			<div className="mb-12 text-center">
				<h1 className="text-4xl font-bold">{content.sectionTitle}</h1>
				<p className="mt-3 text-base text-muted-foreground">{content.subTitle}</p>
			</div>

			<div className="space-y-16">
				<section>
					<h2 className="mb-6 text-2xl font-semibold">{content.featuredTitle}</h2>
					<div className="grid gap-8 lg:grid-cols-2">
						{featuredProjects.map((project) => (
							<FeaturedProjectCard key={project.id} project={project} />
						))}
					</div>
				</section>

				<section>
					<h2 className="mb-6 text-2xl font-semibold">{content.projectsTitle}</h2>
					<div className="grid gap-6 md:grid-cols-2">
						{projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default PortfolioPage;
