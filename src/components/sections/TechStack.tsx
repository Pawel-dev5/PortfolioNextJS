'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
	{ name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
	{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
	{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
	{ name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
	{ name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
	{ name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
	{ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
	{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
	{ name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
	{ name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
	{ name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
	{ name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
	{
		name: 'AWS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
	},
	{ name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
	{ name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
	{ name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
	{ name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
	{ name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg' },
	{ name: 'ESLint', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
	{ name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const TechStack = () => {
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
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2">
						Technologie, którymi <span className="gradient-text">pracuję</span>
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
								className="group flex flex-col items-center justify-center w-24 h-24 glass-card p-4 shrink-0 hover-lift cursor-pointer"
							>
								<Image
									src={tech.icon}
									alt={tech.name}
									width={40}
									height={40}
									className="grayscale group-hover:grayscale-0 transition-all duration-300"
								/>
								<span className="text-xs text-center text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
