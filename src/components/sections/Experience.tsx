'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		date: '2020 - Obecnie',
		role: 'Fullstack Developer',
		company: 'Freelance / Własne projekty',
		achievements: [
			'Tworzenie stron i sklepów internetowych',
			'Tworzenie systemów dedykowanych i AI dla klientów',
			'Rozwój platformy irrify.ai',
		],
	},
	{
		date: '2024 - Obecnie',
		role: 'React Native Developer',
		company: 'The Widlarz Group',
		achievements: [
			'Aplikacja Learnnapp: utrzymanie, naprawa błędów produkcyjnych oraz upgrade wersji React Native',
			"Aplikacja Orca: audyt kodu, przygotowanie do upgrade'u React Native oraz wdrożenia nowej architektury",
		],
	},
	{
		date: '2022 - Obecnie',
		role: 'Frontend Developer',
		company: '10a',
		achievements: [
			'Rozwój nowych funkcjonalności w aplikacjach mobilnych Moje Suzuki, cHow oraz Mój Sklep (Eurocash)',
			'Projektowanie i implementację kluczowych rozwiązań, które poprawiają codzienne procesy biznesowe oraz podniosły jakość doświadczeń użytkowników.',
		],
	},
	{
		date: '2021 - 2022',
		role: 'Frontend Developer',
		company: 'Gridaly',
		achievements: [
			'Rozwój nowych funkcjonalności webowej aplikacji do obsługi wydarzeń online i hybrydowych oraz tworzenie kluczowych modułów systemu zarządzania eventami',
			'Opracowanie i wdrożenie nowej, responsywnej strony internetowej platformy, ze skupieniem na optymalizacji wydajności i jakości kodu',
			'Programowanie aplikacji mobilnej do skanowania biletów zintegrowanej z platformą webową, zapewniającej stabilną i szybką komunikację między systemami',
		],
	},
	{
		date: '2019 - 2021',
		role: 'Senior Account Executive',
		company: 'Hagen',
		achievements: [
			'Opracowanie i wdrożenie kompleksowego systemu szkoleniowego dla House of Skills, usprawniającego organizację i realizację szkoleń',
			'Zaprojektowanie i wdrożenie aplikacji mobilnej do obsługi oddziałów dla Banku BNP Paribas, usprawniającej operacje, komunikację i obsługę klienta',
		],
	},
	{
		date: '2017 - 2019',
		role: 'Account Executive',
		company: 'Wisefriends',
		achievements: [
			'Zarządzanie i realizacja projektu webowej aplikacji dla Essilor, z dbałością o terminowość i jakość',
			'Współtworzenie i wdrożenie kampanii digitalowych dla Orange (kampania Love) oraz przygotowanie launchu marki IQOS na polski rynek dla Philip Morris International',
			'Przygotowanie, realizacja i wdrożenie kampanii digitalowych dla klientów takich jak Eurocash, Adidas, Coty, Opel, Philips, Maspex, Geberit oraz Reprise Digital',
		],
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
				<span className="text-primary font-semibold text-base uppercase tracking-wider">Doświadczenie</span>
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

export default Experience;
