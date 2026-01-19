'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { TECHNOLOGIES } from '@/lib/technologies';
import * as gtag from '@/lib/gtag';
import type { ProjectLink, ProjectCategoryKey } from '@/lib/portfolioProjects';

const TECHNOLOGY_ICON_BY_NAME = Object.values(TECHNOLOGIES).reduce<Record<string, string>>((acc, tech) => {
	acc[tech.name] = tech.icon;
	return acc;
}, {});

export type ProjectDetails = {
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

export type ProjectNavigation = {
	slug: string;
	title: string;
};

export type RelatedProject = {
	id: string;
	slug: string;
	title: string;
	category: string;
	image?: string;
};

type ProjectDetailsLabels = {
	backToPortfolio: string;
	visitSite: string;
	notFound: {
		title: string;
		description: string;
		cta: string;
	};
	sections: {
		technologies: string;
		challenge: string;
		solution: string;
		results: string;
		gallery: string;
		related: string;
	};
	navigation: {
		previous: string;
		next: string;
	};
};

type ProjectDetailsPageProps = {
	project: ProjectDetails | null;
	relatedProjects: RelatedProject[];
	prevProject: ProjectNavigation | null;
	nextProject: ProjectNavigation | null;
	labels: ProjectDetailsLabels;
};

const getPrimaryLink = (links: ProjectLink[]) =>
	links.find((link) => link.type === 'External' && link.url) ?? links.find((link) => Boolean(link.url));

const ProjectDetailsPage = ({ project, relatedProjects, prevProject, nextProject, labels }: ProjectDetailsPageProps) => {
	const router = useRouter();
	const locale = useLocale();
	const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const galleryRef = useRef<HTMLDivElement | null>(null);

	const gallery = project?.gallery ?? [];
	const galleryLength = Math.max(gallery.length, 1);
	const isPortraitGallery = (project?.categories ?? []).includes('mobile');
	const galleryFit = isPortraitGallery ? 'object-contain' : 'object-cover';
	const galleryItemSize = isPortraitGallery
		? 'w-[220px] md:w-[260px] h-[420px] md:h-[520px]'
		: 'w-[280px] md:w-[360px] h-[220px] md:h-[260px]';

	const scrollGallery = useCallback(
		(direction: 'prev' | 'next') => {
			if (galleryLength <= 1) return;
			const nextIndex =
				direction === 'next'
					? (activeGalleryIndex + 1) % galleryLength
					: (activeGalleryIndex - 1 + galleryLength) % galleryLength;
			setActiveGalleryIndex(nextIndex);

			const container = galleryRef.current;
			if (!container) return;
			const scrollAmount = isPortraitGallery ? 260 : 360;
			container.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
		},
		[activeGalleryIndex, isPortraitGallery, galleryLength],
	);

	if (!project) {
		return (
			<div className="min-h-screen bg-background">
				<main className="pt-24 pb-16">
					<section className="section-container text-center py-20">
						<h1 className="text-4xl font-bold mb-4">{labels.notFound.title}</h1>
						<p className="text-muted-foreground mb-8">{labels.notFound.description}</p>
						<Button onClick={() => router.push('/portfolio')}>
							<ArrowLeft className="w-4 h-4 mr-2" />
							{labels.notFound.cta}
						</Button>
					</section>
				</main>
			</div>
		);
	}

	const primaryLink = getPrimaryLink(project.links);
	const heroImage = project.image ?? project.gallery[0];

	return (
		<div className="min-h-screen bg-background">
			<main className="pt-24 pb-16">
				<section className="relative min-h-[60vh]">
					{heroImage && (
						<div className="absolute inset-0 h-[60vh] pointer-events-none">
							<Image
								src={heroImage}
								alt={project.title}
								fill
								priority
								className={project.imageFit === 'contain' ? 'object-contain p-10' : 'object-cover'}
								sizes="100vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
						</div>
					)}

					<div className="section-container relative pt-8">
						<Link
							href="/portfolio"
							className="inline-flex items-center text-foreground/80 hover:text-primary transition-colors mb-12"
							onClick={() =>
								gtag.event({
									action: 'click',
									category: 'Project Details',
									label: 'Back to Portfolio',
								})
							}
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							{labels.backToPortfolio}
						</Link>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="max-w-4xl pt-20"
						>
							<span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
								{project.category}
							</span>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
							<p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>

							{primaryLink?.url && (
								<Button
									size="lg"
									className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
									onClick={() => {
										window.open(primaryLink.url ?? '#', '_blank');
										gtag.event({
											action: 'click',
											category: 'Project Details',
											label: `Visit Site - ${project.title}`,
										});
									}}
								>
									<ExternalLink className="w-4 h-4 mr-2" />
									{labels.visitSite}
								</Button>
							)}
						</motion.div>
					</div>
				</section>

				<section className="py-16">
					<div className="section-container">
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
							<h2 className="text-2xl font-bold mb-6 text-foreground">
								{labels.sections.technologies || (locale === 'pl' ? 'Technologie' : 'Technologies')}
							</h2>
							<div className="flex flex-wrap gap-3">
								{project.technologies.map((tech) => {
									const icon = TECHNOLOGY_ICON_BY_NAME[tech];
									return (
										<span
											key={tech}
											className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium"
										>
											{icon && (
												<span className="relative h-4 w-4">
													<Image src={icon} alt={tech} fill className="object-contain" />
												</span>
											)}
											{tech}
										</span>
									);
								})}
							</div>
						</motion.div>
					</div>
				</section>

				{(project.challenge || project.solution) && (
					<section className="py-16 bg-secondary/30">
						<div className="section-container">
							<div className="grid md:grid-cols-2 gap-12">
								{project.challenge && (
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										className="glass-card p-8"
									>
										<h3 className="text-xl font-bold mb-4 flex items-center gap-3">
											<span className="w-10 h-10 bg-destructive/10 text-destructive rounded-full flex items-center justify-center text-lg">
												?
											</span>
											{labels.sections.challenge}
										</h3>
										<p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
									</motion.div>
								)}

								{project.solution && (
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										className="glass-card p-8"
									>
										<h3 className="text-xl font-bold mb-4 flex items-center gap-3">
											<span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-lg">
												✓
											</span>
											{labels.sections.solution}
										</h3>
										<p className="text-muted-foreground leading-relaxed">{project.solution}</p>
									</motion.div>
								)}
							</div>
						</div>
					</section>
				)}

				{project.results && project.results.length > 0 && (
					<section className="py-16">
						<div className="section-container">
							<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
								<h2 className="text-2xl font-bold mb-8 text-center">{labels.sections.results}</h2>
								<div className="grid sm:grid-cols-3 gap-6">
									{project.results.map((result, index) => (
										<motion.div
											key={result}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
											className="glass-card p-6 text-center"
										>
											<div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
												{index + 1}
											</div>
											<p className="text-foreground font-medium">{result}</p>
										</motion.div>
									))}
								</div>
							</motion.div>
						</div>
					</section>
				)}

				{project.gallery.length > 1 && (
					<section className="py-16 bg-secondary/30">
						<div className="section-container">
							<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
								<h2 className="text-2xl font-bold mb-8">{labels.sections.gallery}</h2>
								<div className="relative">
									<div className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 md:block">
										<button
											type="button"
											onClick={() => scrollGallery('prev')}
											className="rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background"
											aria-label="Previous gallery item"
										>
											<ChevronLeft className="h-5 w-5" />
										</button>
									</div>
									<div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:block">
										<button
											type="button"
											onClick={() => scrollGallery('next')}
											className="rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background"
											aria-label="Next gallery item"
										>
											<ChevronRight className="h-5 w-5" />
										</button>
									</div>

									<div ref={galleryRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">
										{project.gallery.map((image, index) => (
											<button
												key={image}
												type="button"
												onClick={() => {
													setActiveGalleryIndex(index);
													setIsGalleryOpen(true);
												}}
												className={`group relative shrink-0 overflow-hidden rounded-3xl bg-background shadow-sm transition hover:shadow-md snap-start ${galleryItemSize}`}
											>
												<Image
													src={image}
													alt={`${project.title} screenshot ${index + 1}`}
													width={1200}
													height={900}
													className={`h-full w-full ${galleryFit} transition-transform duration-500 group-hover:scale-105`}
												/>
												{index === activeGalleryIndex && (
													<span className="absolute inset-0 rounded-3xl ring-2 ring-primary/60" />
												)}
											</button>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</section>
				)}

				<AnimatePresence>
					{isGalleryOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
						>
							<button
								type="button"
								onClick={() => setIsGalleryOpen(false)}
								className="absolute right-6 top-6 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background"
								aria-label="Close gallery preview"
							>
								<X className="h-5 w-5" />
							</button>

							<div className="relative w-full max-w-5xl px-6">
								<motion.div
									key={project.gallery[activeGalleryIndex]}
									initial={{ opacity: 0, scale: 0.98 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.98 }}
									className="overflow-hidden rounded-3xl bg-background shadow-xl"
								>
									<Image
										src={project.gallery[activeGalleryIndex]}
										alt={`${project.title} preview ${activeGalleryIndex + 1}`}
										width={1600}
										height={1000}
										className="h-[70vh] w-full object-contain bg-background"
									/>
								</motion.div>

								<button
									type="button"
									onClick={() =>
										setActiveGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
									}
									className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background"
									aria-label="Previous image"
								>
									<ChevronLeft className="h-6 w-6" />
								</button>
								<button
									type="button"
									onClick={() => setActiveGalleryIndex((prev) => (prev + 1) % project.gallery.length)}
									className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background"
									aria-label="Next image"
								>
									<ChevronRight className="h-6 w-6" />
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{relatedProjects.length > 0 && (
					<section className="py-16">
						<div className="section-container">
							<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
								<h2 className="text-2xl font-bold mb-8">{labels.sections.related}</h2>
								<div className="grid md:grid-cols-3 gap-6">
									{relatedProjects.map((related, index) => (
										<motion.div
											key={related.id}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
										>
											<Link
												href={`/portfolio/${related.slug}`}
												className="block glass-card overflow-hidden hover-lift group"
												onClick={() =>
													gtag.event({
														action: 'click',
														category: 'Project Details',
														label: `Related Project - ${related.title}`,
													})
												}
											>
												<div className="aspect-video overflow-hidden bg-secondary/30">
													{related.image ? (
														<Image
															src={related.image}
															alt={related.title}
															width={900}
															height={600}
															className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
														/>
													) : (
														<div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
															{related.category}
														</div>
													)}
												</div>
												<div className="p-6">
													<span className="text-xs text-primary font-medium">{related.category}</span>
													<h3 className="text-lg font-bold mt-1 group-hover:text-primary transition-colors">
														{related.title}
													</h3>
												</div>
											</Link>
										</motion.div>
									))}
								</div>
							</motion.div>
						</div>
					</section>
				)}

				<section className="py-8 border-t border-border">
					<div className="section-container">
						<div className="flex justify-between items-center">
							{prevProject ? (
								<Link
									href={`/portfolio/${prevProject.slug}`}
									className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
									onClick={() =>
										gtag.event({
											action: 'click',
											category: 'Project Details',
											label: `Previous Project - ${prevProject.title}`,
										})
									}
								>
									<ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
									<div>
										<span className="text-xs uppercase tracking-wider">{labels.navigation.previous}</span>
										<p className="font-medium text-foreground">{prevProject.title}</p>
									</div>
								</Link>
							) : (
								<div />
							)}

							{nextProject ? (
								<Link
									href={`/portfolio/${nextProject.slug}`}
									className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
									onClick={() =>
										gtag.event({
											action: 'click',
											category: 'Project Details',
											label: `Next Project - ${nextProject.title}`,
										})
									}
								>
									<div>
										<span className="text-xs uppercase tracking-wider">{labels.navigation.next}</span>
										<p className="font-medium text-foreground">{nextProject.title}</p>
									</div>
									<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
							) : (
								<div />
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ProjectDetailsPage;
