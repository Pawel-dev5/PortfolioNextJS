'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { getFeaturedProjects } from '@/lib/portfolioProjects';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

const Portfolio = () => {
	const t = useTranslations('Portfolio');
	const locale = useLocale();
	const [activeIndex, setActiveIndex] = useState(0);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.2 });

	const progress = useMotionValue(0);
	const progressWidth = useTransform(progress, (value) => `${value}%`);

	const projects = useMemo(
		() =>
			getFeaturedProjects(locale).map((project, index) => ({
				id: index,
				key: project.key,
				slug: project.key,
				title: project.title,
				category: project.categoryLabel ?? '',
				description: project.description,
				imageUrl: project.imageUrl,
				imageFit: project.imageFit ?? 'cover',
				technologies: project.stack.map((name) => ({ name })),
			})),
		[locale],
	);

	const activeProject = projects[activeIndex];

	const handleNext = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % projects.length);
	}, [projects]);

	useEffect(() => {
		progress.set(0);
	}, [activeIndex, progress]);

	useEffect(() => {
		if (isInView) {
			const duration = 10 * (1 - progress.get() / 100);

			const controls = animate(progress, 100, {
				duration: duration,
				ease: 'linear',
				onComplete: handleNext,
			});

			return () => controls.stop();
		}
	}, [isInView, activeIndex, handleNext, progress]);

	return (
		<section ref={sectionRef} className="py-24 bg-background">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-base uppercase tracking-wider">{t('subtitle')}</span>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2">
						{t.rich('title', {
							highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
						})}
					</h2>
				</motion.div>

				{/* XTB-style Split Layout */}
				<div className="grid lg:grid-cols-5 gap-8 items-stretch">
					{/* Left - Project Tabs */}
					<div className="lg:col-span-2 flex flex-col gap-4">
						{projects.map((project, index) => (
							<motion.button
								key={project.id}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								onClick={() => setActiveIndex(index)}
								className={`group relative text-left p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
									activeIndex === index ? 'glass-card bg-primary/5 border-primary/30' : 'hover:bg-secondary/50'
								}`}
							>
								{/* Active indicator and Progress Bar */}
								{activeIndex === index && (
									<>
										<motion.div
											layoutId="activeIndicator"
											className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-r-full"
										/>
										<div className="absolute bottom-0 left-0 w-full h-1 bg-primary/10">
											<motion.div style={{ width: progressWidth }} className="h-full bg-primary" />
										</div>
									</>
								)}

								<span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
								<h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
								<p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description.substring(0, 80)}...</p>

								<ArrowRight
									className={`absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-all ${
										activeProject.id === project.id ? 'text-primary opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
									}`}
								/>
							</motion.button>
						))}
					</div>

					{/* Right - Project Preview */}
					<div className="lg:col-span-3">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeProject.id}
								initial={{ opacity: 0, y: 20, scale: 0.98 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -20, scale: 0.98 }}
								transition={{ duration: 0.4 }}
								className="glass-card overflow-hidden h-full"
							>
								{/* Project Image */}
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={`/assets/${activeProject.imageUrl}`}
										alt={activeProject.title}
										fill
										className={activeProject.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
										sizes="(max-width: 1024px) 100vw, 60vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
								</div>

								{/* Project Details */}
								<div className="p-8">
									<span className="text-xs text-primary font-medium uppercase tracking-wider">{activeProject.category}</span>
									<h3 className="text-2xl font-bold mt-2 mb-4">{activeProject.title}</h3>
									<p className="text-muted-foreground mb-6 leading-relaxed">{activeProject.description}</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2 mb-6">
										{activeProject.technologies.map((tech) => (
											<span
												key={tech.name}
												className="px-3 py-1 bg-secondary text-sm font-medium rounded-full flex items-center gap-2"
											>
												{/* Optional: Show icon in chip too if you want */}
												{/* <div className="relative w-4 h-4"><Image src={tech.icon} alt="" fill /></div> */}
												{tech.name}
											</span>
										))}
									</div>

									{/* CTA */}
									<Link href={`/portfolio/${activeProject.slug}`} className={`${buttonVariants('default', 'lg')} neon-glow`}>
										<ExternalLink className="mr-2 w-4 h-4" />
										{t('cta')}
									</Link>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
			<div className="mt-16 flex justify-center">
				<Link href="/portfolio" className={`${buttonVariants('default', 'lg')} neon-glow`}>
					<ExternalLink className="mr-2 w-4 h-4" />
					{t('viewAll')}
				</Link>
			</div>
		</section>
	);
};

export default Portfolio;
