'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projects = [
	{
		id: 1,
		title: 'Irrify.ai',
		category: 'AI Platform',
		description:
			'Zaawansowana platforma do automatyzacji procesów biznesowych z wykorzystaniem sztucznej inteligencji. System umożliwia tworzenie inteligentnych agentów AI, automatyzację workflow oraz integrację z popularnymi narzędziami.',
		image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
		technologies: ['React', 'Python', 'OpenAI', 'Supabase', 'Docker'],
		link: 'https://irrify.ai',
	},
	{
		id: 2,
		title: 'System CRM / ERP',
		category: 'Enterprise Software',
		description:
			'Kompleksowy system do zarządzania relacjami z klientami i zasobami przedsiębiorstwa. Moduły sprzedaży, magazynu, fakturowania i raportowania zintegrowane w jednej aplikacji.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'AWS'],
		link: '#',
	},
	{
		id: 3,
		title: 'E-commerce Platform',
		category: 'Online Store',
		description:
			'Nowoczesna platforma e-commerce z zaawansowanym systemem rekomendacji produktów opartym na AI. Obsługa wielu walut, integracja z systemami płatności i automatyzacja marketingu.',
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
		technologies: ['React', 'Node.js', 'Stripe', 'Redis', 'Elasticsearch'],
		link: '#',
	},
];

const Portfolio = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeProject = projects[activeIndex];

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % projects.length);
	};

	return (
		<section className="py-24 bg-background">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2">
						Wybrane <span className="gradient-text">projekty</span>
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
											<motion.div
												initial={{ width: '0%' }}
												animate={{ width: '100%' }}
												transition={{ duration: 5, ease: 'linear' }}
												onAnimationComplete={handleNext}
												className="h-full bg-primary"
											/>
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
										src={activeProject.image}
										alt={activeProject.title}
										fill
										className="object-cover"
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
											<span key={tech} className="px-3 py-1 bg-secondary text-sm font-medium rounded-full">
												{tech}
											</span>
										))}
									</div>

									{/* CTA */}
									<Button className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow">
										<ExternalLink className="mr-2 w-4 h-4" />
										Zobacz Case Study
									</Button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
