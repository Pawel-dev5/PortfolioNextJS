'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2 } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const About = () => {
	const t = useTranslations('About');

	const stats = [
		{ icon: Briefcase, value: '5+', label: t('yearsExperience') },
		{ icon: Code2, value: '30+', label: t('projectsCompleted') },
	];

	return (
		<section className="py-24 bg-secondary/30">
			<div className="section-container">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left - Photo */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
							<Image
								src="/assets/pawelnowecki.jpeg"
								alt="Paweł Nowecki - Fullstack Developer"
								fill
								className="object-cover rounded-2xl"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
						{/* Decorative element */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
					</motion.div>

					{/* Right - Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-primary font-semibold text-base uppercase tracking-wider">{t('subtitle')}</span>
						<h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
							{t.rich('title', {
								highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
							})}
						</h2>
						<p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t('description')}</p>

						{/* Stats */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="glass-card p-6 text-center hover-lift"
								>
									<stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
									<div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
									<div className="text-sm text-muted-foreground">{stat.label}</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
