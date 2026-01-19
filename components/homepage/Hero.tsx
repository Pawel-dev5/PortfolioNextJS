'use client';

import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight, Download, Rocket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const t = useTranslations('Hero');

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
			{/* Subtle grid background */}
			<div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30" />

			{/* Gradient orbs */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
			<div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

			<div className="section-container relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Floating Banner */}
					<motion.a
						href="https://irrify.ai"
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card text-sm font-medium hover-lift cursor-pointer"
					>
						<Rocket className="w-4 h-4 text-primary" />
						<span>{t('newProject')}</span>
						<span className="font-bold text-primary">irrify.ai</span>
						<ArrowRight className="w-4 h-4" />
					</motion.a>

					{/* H1 */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
					>
						Paweł
						<br />
						<span className="gradient-text">Nowecki</span>
					</motion.h1>

					{/* H2 */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
					>
						{t('description')}
					</motion.p>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Link
							href="#portfolio"
							className={cn(
								buttonVariants('default', 'lg'),
								'bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-glow hover-lift',
							)}
						>
							{t('viewProjects')}
							<ArrowRight className="ml-2 w-5 h-5" />
						</Link>
						<a
							href={t('cvUrl')}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(buttonVariants('outline', 'lg'), 'font-semibold px-8 py-6 text-lg hover-lift')}
						>
							<Download className="mr-2 w-5 h-5" />
							{t('downloadCv')}
						</a>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.2 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
				>
					<div className="w-1 h-2 bg-primary rounded-full" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
