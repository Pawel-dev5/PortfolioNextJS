'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		date: '2022 - Obecnie',
		role: 'Senior Fullstack Developer & AI Consultant',
		company: 'Freelance / Własne projekty',
		achievements: [
			'Tworzenie systemów AI dla klientów enterprise',
			'Rozwój platformy irrify.ai',
			'Konsulting w zakresie automatyzacji procesów',
		],
	},
	{
		date: '2019 - 2022',
		role: 'Lead Frontend Developer',
		company: 'Agencja Software',
		achievements: [
			'Prowadzenie zespołu 5 developerów',
			'Wdrożenie React i TypeScript w projektach',
			'Optymalizacja wydajności aplikacji o 40%',
		],
	},
	{
		date: '2017 - 2019',
		role: 'Fullstack Developer',
		company: 'Startup Fintech',
		achievements: ['Budowa platformy płatniczej od zera', 'Integracja z systemami bankowymi', 'Rozwój API REST i GraphQL'],
	},
	{
		date: '2015 - 2017',
		role: 'Junior Developer',
		company: 'Software House',
		achievements: ['Pierwsze komercyjne projekty web', 'Nauka React i Node.js', 'Współpraca w metodologii Scrum'],
	},
];

const Experience = () => (
	<section className="py-24 bg-background">
		<div className="section-container">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<span className="text-primary font-semibold text-sm uppercase tracking-wider">Doświadczenie</span>
				<h2 className="text-3xl sm:text-4xl font-bold mt-2">
					Moja ścieżka <span className="gradient-text">kariery</span>
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
								<ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
									{exp.achievements.map((achievement, i) => (
										<li key={i} className="flex items-start gap-2">
											<span className="text-primary mt-1 shrink-0">•</span>
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

export default Experience;
