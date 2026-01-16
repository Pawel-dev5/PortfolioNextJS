'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TECHNOLOGIES } from '@/lib/technologies';
import { useTranslations } from 'next-intl';

const TechStack = () => {
	const t = useTranslations('TechStack');
	const technologies = Object.values(TECHNOLOGIES);

	// Duplicate for infinite scroll effect
	const duplicatedTech = [...technologies, ...technologies];

	return (
		<section className="py-24 bg-secondary/30 overflow-hidden">
			<div className="section-container mb-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<span className="text-primary font-semibold text-base uppercase tracking-wider">{t('subtitle')}</span>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2">
						{t.rich('title', {
							highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
						})}
					</h2>
				</motion.div>
			</div>

			{/* Marquee Container */}
			<div className="relative">
				{/* Gradient masks */}
				<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
				<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

				{/* First row - Left to Right */}
				<div className="flex mb-8">
					<motion.div className="flex gap-8 marquee" style={{ width: 'max-content' }}>
						{duplicatedTech.map((tech, index) => (
							<div
								key={`row1-${index}`}
								className="group relative flex flex-col items-center justify-center w-24 h-24 glass-card p-4 shrink-0 hover-lift cursor-pointer"
							>
								<div className="relative w-10 h-10">
									<Image
										src={tech.icon}
										alt={tech.name}
										fill
										className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:-translate-y-3"
									/>
								</div>
								<span className="absolute bottom-2 left-0 right-0 px-1 text-xs text-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
									{tech.name}
								</span>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
