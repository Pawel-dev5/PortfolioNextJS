'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Database, Globe, ArrowRight, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import * as gtag from '@/lib/gtag';

const Offer = () => {
	const t = useTranslations('Offer');

	const offers = [
		{
			id: 'websites',
			icon: Globe,
			link: '/oferta/strony-internetowe',
			gradient: 'from-pink-500/20 to-rose-500/20',
		},
		{
			id: 'mobile',
			icon: Smartphone,
			link: '/oferta/aplikacje-mobilne',
			gradient: 'from-green-500/20 to-lime-500/20',
		},
		{
			id: 'systems',
			icon: Database,
			link: '/oferta/systemy-dedykowane-crm',
			gradient: 'from-blue-500/20 to-indigo-500/20',
		},
		{
			id: 'ai',
			icon: Brain,
			link: '/oferta/wdrozenia-ai',
			gradient: 'from-emerald-500/20 to-teal-500/20',
		},
		{
			id: 'automation',
			icon: Zap,
			link: '/oferta/automatyzacje',
			gradient: 'from-amber-500/20 to-orange-500/20',
		},
	];

	return (
		<section className="py-24 bg-secondary/30">
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
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('description')}</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{offers.map((offer, index) => (
						<motion.div
							key={offer.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Link
								href={offer.link}
								className="group block glass-card p-8 h-full hover-lift relative overflow-hidden"
								onClick={() =>
									gtag.event({
										action: 'click',
										category: 'Offer',
										label: `Offer - ${offer.id}`,
									})
								}
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
								/>

								<div className="relative z-10">
									<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
										<offer.icon className="w-7 h-7 text-primary" />
									</div>

									<h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
										{t(`items.${offer.id}.title`)}
									</h3>
									<p className="text-muted-foreground leading-relaxed mb-6">{t(`items.${offer.id}.description`)}</p>

									<span className="inline-flex items-center text-primary font-medium">
										{t('learnMore')}
										<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
									</span>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Offer;
