'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Experience = () => {
	const t = useTranslations('Experience');

	const jobs = ['freelance', 'widlarz', 'tenA', 'gridaly', 'hagen', 'wisefriends'];

	const jobDates: Record<string, string> = {
		freelance: '2020 - Obecnie',
		widlarz: '2024 - Obecnie',
		tenA: '2022 - Obecnie',
		gridaly: '2021 - 2022',
		hagen: '2019 - 2021',
		wisefriends: '2017 - 2019',
	};

	const experiences = jobs.map((job) => {
		// Fetch achievements array from translations
		// Note: t.raw() allows getting the array structure
		const achievements = t.raw(`jobs.${job}.achievements`) as string[];

		return {
			id: job,
			date: jobDates[job],
			role: t(`jobs.${job}.role`),
			company: t(`jobs.${job}.company`),
			achievements,
		};
	});

	return (
		<section className="py-24 bg-background">
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

				{/* Timeline */}
				<div className="relative max-w-3xl mx-auto">
					{/* Vertical line */}
					<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
						>
							{/* Timeline dot */}
							<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg -translate-x-1/2 md:-translate-x-1/2 z-10" />

							{/* Content */}
							<div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
								<div className="glass-card p-6 hover-lift">
									<span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
										{exp.date}
									</span>
									<h3 className="text-xl font-bold mb-1">{exp.role}</h3>
									<p className="text-primary font-medium mb-4">{exp.company}</p>
									<ul className="space-y-2 text-muted-foreground text-sm text-left">
										{exp.achievements.map((achievement, i) => (
											<li key={i} className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
