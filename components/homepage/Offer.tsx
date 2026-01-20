'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import * as gtag from '@/lib/gtag';
import { OFFERS } from '@/lib/offers';

const Offer = () => {
	const t = useTranslations('Offer');

	return (
		<section id="offer" className="py-24 bg-secondary/30">
			<div className="section-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold text-sm uppercase tracking-wider">{t('subtitle')}</span>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2">
						{t.rich('title', {
							highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
						})}
					</h2>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('description')}</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{OFFERS.map((offer, index) => (
						<motion.div
							key={offer.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Link
								href={`/oferta#${offer.id}`}
								className="group block glass-card p-6 h-full hover-lift relative overflow-hidden"
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
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<offer.icon className="w-6 h-6 text-primary" />
									</div>

									<h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
										{t(`items.${offer.id}.title`)}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(`items.${offer.id}.description`)}</p>

									<span className="inline-flex items-center text-primary text-sm font-medium">
										{t('learnMore')}
										<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
									</span>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<Link
						href="/oferta"
						className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
					>
						{t('cta')}
						<ArrowRight className="w-4 h-4" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Offer;
