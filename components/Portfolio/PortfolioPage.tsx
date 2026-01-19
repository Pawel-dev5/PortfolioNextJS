'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Filter, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
	createProjectSlug,
	getFeaturedProjects,
	getPortfolioProjects,
	type PortfolioProject,
	type ProjectCategoryKey,
} from '@/lib/portfolioProjects';

type PortfolioListProject = {
	id: string;
	slug: string;
	title: string;
	categories: ProjectCategoryKey[];
	description: string;
	technologies: string[];
	links: PortfolioProject['links'];
	imageUrl?: string;
	imageFit?: 'contain' | 'cover';
	featured?: boolean;
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

const ProjectCard = ({
	project,
	categoryLabel,
	ctaLabel,
	featuredLabel,
}: {
	project: PortfolioListProject;
	categoryLabel: string;
	ctaLabel: string;
	featuredLabel: string;
}) => (
	<motion.article
		layout
		initial={{ opacity: 0, scale: 0.96 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0.96 }}
		transition={{ duration: 0.3 }}
		className="group"
	>
		<div className="glass-card flex h-full flex-col overflow-hidden rounded-3xl border border-transparent transition hover:border-primary/20">
			<div className="relative aspect-video overflow-hidden bg-secondary/40">
				{project.imageUrl ? (
					<Image
						src={`/assets/${project.imageUrl}`}
						alt={project.title}
						fill
						className={project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
						{categoryLabel}
					</div>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

				{project.featured && (
					<div className="absolute right-4 top-4">
						<span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
							{featuredLabel}
						</span>
					</div>
				)}

				<div className="absolute bottom-4 left-4">
					<span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
						{categoryLabel}
					</span>
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-4 p-6">
				<div>
					<h3 className="text-xl font-bold transition-colors group-hover:text-primary">{project.title}</h3>
					<p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
				</div>
				<ProjectStack stack={project.technologies.slice(0, 6)} />
				<ProjectLinks links={project.links} />

				<Link
					href={`/portfolio/${project.slug}`}
					className={cn(
						buttonVariants('outline', 'sm'),
						'w-full group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all',
					)}
				>
					<ExternalLink className="mr-2 h-4 w-4" />
					{ctaLabel}
				</Link>
			</div>
		</div>
	</motion.article>
);

const PortfolioPage = ({ locale }: { locale: string }) => {
	const t = useTranslations('PortfolioPage');
	const featuredLabel = t('categories.featured');

	const featuredProjects = useMemo(
		() =>
			getFeaturedProjects(locale).map((project) => ({
				id: `featured-${project.key}`,
				slug: project.key,
				title: project.title,
				categories: project.categories,
				description: project.description,
				technologies: project.stack,
				links: project.links,
				imageUrl: project.imageUrl,
				imageFit: project.imageFit ?? 'cover',
				featured: true,
			})),
		[locale],
	);

	const otherProjects = useMemo(
		() =>
			getPortfolioProjects(locale).map((project) => ({
				id: `project-${project.id}`,
				slug: createProjectSlug(project.title, `project-${project.id}`),
				title: project.title,
				categories: project.categories,
				description: project.description,
				technologies: project.stack,
				links: project.links,
				imageUrl: project.imageUrl,
			})),
		[locale],
	);

	const allProjects = useMemo<PortfolioListProject[]>(
		() => [...featuredProjects, ...otherProjects],
		[featuredProjects, otherProjects],
	);
	type FilterKey = 'all' | 'featured' | ProjectCategoryKey;
	const [activeCategory, setActiveCategory] = useState<FilterKey>('all');

	const categories = useMemo(() => {
		const categoryKeys = Array.from(new Set(allProjects.flatMap((project) => project.categories)));
		return [
			{ key: 'all' as const, label: t('categories.all') },
			{ key: 'featured' as const, label: featuredLabel },
			...categoryKeys.map((key) => ({ key, label: t(`categories.${key}`) })),
		];
	}, [allProjects, featuredLabel, t]);

	const filteredProjects = useMemo(() => {
		if (activeCategory === 'all') return allProjects;
		if (activeCategory === 'featured') return allProjects.filter((project) => project.featured);
		return allProjects.filter((project) => project.categories.includes(activeCategory));
	}, [activeCategory, allProjects]);

	return (
		<section className="section-container py-20">
			<Link href="/" className="mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-primary">
				<ArrowLeft className="mr-2 h-4 w-4" />
				{t('back')}
			</Link>

			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
				<span className="text-sm font-semibold uppercase tracking-wider text-primary">{t('eyebrow')}</span>
				<h1 className="mt-2 text-4xl font-bold sm:text-5xl">
					{t.rich('title', {
						highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
					})}
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('description')}</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="mb-12 flex flex-wrap justify-center gap-3"
			>
				<div className="mr-4 flex items-center gap-2 text-muted-foreground">
					<Filter className="h-4 w-4" />
					<span className="text-sm font-medium">{t('filters')}</span>
				</div>
				{categories.map((category) => (
					<button
						key={category.key}
						onClick={() => setActiveCategory(category.key)}
						className={cn(
							'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
							activeCategory === category.key
								? 'bg-primary text-primary-foreground neon-glow'
								: 'bg-secondary text-foreground hover:bg-secondary/80',
						)}
					>
						{category.label}
						{activeCategory === category.key && <span className="ml-2 text-xs opacity-80">({filteredProjects.length})</span>}
					</button>
				))}
			</motion.div>

			<motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<AnimatePresence mode="popLayout">
					{filteredProjects.map((project) => {
						const primaryCategory = project.categories[0];
						const categoryLabel = primaryCategory ? t(`categories.${primaryCategory}`) : t('categories.other');
						return (
							<ProjectCard
								key={project.id}
								project={project}
								categoryLabel={categoryLabel}
								ctaLabel={t('cta')}
								featuredLabel={featuredLabel}
							/>
						);
					})}
				</AnimatePresence>
			</motion.div>

			{filteredProjects.length === 0 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 text-center">
					<p className="text-lg text-muted-foreground">{t('empty')}</p>
				</motion.div>
			)}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mt-16 text-center"
			>
				<div className="glass-card inline-flex items-center gap-8 px-8 py-4">
					<div>
						<span className="gradient-text text-3xl font-bold">{allProjects.length}</span>
						<p className="text-sm text-muted-foreground">{t('stats.projects')}</p>
					</div>
					<div className="h-10 w-px bg-border" />
					<div>
						<span className="gradient-text text-3xl font-bold">{Math.max(categories.length - 2, 0)}</span>
						<p className="text-sm text-muted-foreground">{t('stats.categories')}</p>
					</div>
					<div className="h-10 w-px bg-border" />
					<div>
						<span className="gradient-text text-3xl font-bold">
							{allProjects.filter((project) => project.featured).length}
						</span>
						<p className="text-sm text-muted-foreground">{t('stats.featured')}</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default PortfolioPage;
