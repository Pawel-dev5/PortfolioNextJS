'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { OFFERS } from '@/lib/offers';

const OfferPage = () => {
	const t = useTranslations('OfferPage');
	const pathname = usePathname();
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const offerContent = useMemo(
		() =>
			Object.fromEntries(
				OFFERS.map((offer) => [
					offer.id,
					{
						title: t(`items.${offer.id}.title`),
						subtitle: t(`items.${offer.id}.subtitle`),
						description: t(`items.${offer.id}.description`),
						features: t.raw(`items.${offer.id}.features`) as string[],
						benefits: t.raw(`items.${offer.id}.benefits`) as string[],
					},
				]),
			),
		[t],
	);

	useEffect(() => {
		const handleHash = () => {
			const hash = decodeURIComponent(window.location.hash.replace('#', ''));
			if (hash && OFFERS.some((offer) => offer.id === hash)) {
				setExpandedId(hash);
				setTimeout(() => {
					const element = document.getElementById(hash);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				}, 100);
				return;
			}
			setExpandedId(null);
		};

		handleHash();
		const rafId = window.requestAnimationFrame(handleHash);
		const timeoutId = window.setTimeout(handleHash, 50);
		window.addEventListener('hashchange', handleHash);
		return () => {
			window.cancelAnimationFrame(rafId);
			window.clearTimeout(timeoutId);
			window.removeEventListener('hashchange', handleHash);
		};
	}, [pathname]);

	const toggleExpand = (id: string) => {
		setExpandedId((current) => {
			const next = current === id ? null : id;
			if (typeof window !== 'undefined') {
				const nextHash = next ? `#${id}` : '';
				window.history.replaceState(null, '', `${window.location.pathname}${nextHash}`);
			}
			return next;
		});
	};

	return (
		<div className="min-h-screen bg-background">
			<section className="pt-32 pb-20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
				<div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

				<div className="section-container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-4xl mx-auto"
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
						>
							<Sparkles className="w-4 h-4 text-primary" />
							<span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
						</motion.div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
							{t.rich('hero.title', {
								highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
							})}
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('hero.description')}</p>
					</motion.div>
				</div>
			</section>

			<section className="pb-24">
				<div className="section-container">
					<div className="space-y-6">
						{OFFERS.map((offer, index) => {
							const content = offerContent[offer.id];
							return (
								<motion.div
									key={offer.id}
									id={offer.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="scroll-mt-28"
								>
									<div className="glass-card overflow-hidden">
										<button
											onClick={() => toggleExpand(offer.id)}
											className={`w-full p-6 sm:p-8 flex items-center justify-between text-left transition-colors ${
												expandedId === offer.id ? `bg-gradient-to-r ${offer.gradient}` : 'hover:bg-secondary/50'
											}`}
										>
											<div className="flex items-center gap-4 sm:gap-6">
												<motion.div
													className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${offer.gradient} rounded-2xl flex items-center justify-center shrink-0`}
													whileHover={{ scale: 1.1, rotate: 5 }}
												>
													<offer.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${offer.accentColor}`} />
												</motion.div>
												<div>
													<h3 className="text-xl sm:text-2xl font-bold">{content.title}</h3>
													<p className="text-muted-foreground text-sm sm:text-base">{content.subtitle}</p>
												</div>
											</div>
											<motion.div
												animate={{ rotate: expandedId === offer.id ? 180 : 0 }}
												transition={{ duration: 0.3 }}
												className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center shrink-0 ml-4"
											>
												<ChevronDown className="w-5 h-5" />
											</motion.div>
										</button>

										<AnimatePresence>
											{expandedId === offer.id && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.4, ease: 'easeInOut' }}
													className="overflow-hidden"
												>
													<div className="p-6 sm:p-8 pt-0 border-t border-border/50">
														<motion.p
															initial={{ opacity: 0, y: 20 }}
															animate={{ opacity: 1, y: 0 }}
															transition={{ delay: 0.1 }}
															className="text-muted-foreground text-lg mb-8"
														>
															{content.description}
														</motion.p>

														<div className="grid md:grid-cols-2 gap-8">
															<motion.div
																initial={{ opacity: 0, x: -20 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ delay: 0.2 }}
															>
																<h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
																	<Check className={`w-5 h-5 ${offer.accentColor}`} />
																	{t('sections.featuresTitle')}
																</h4>
																<ul className="list-disc list-inside space-y-2 text-muted-foreground">
																	{content.features.map((feature, idx) => (
																		<motion.li
																			key={idx}
																			initial={{ opacity: 0, x: -10 }}
																			animate={{ opacity: 1, x: 0 }}
																			transition={{ delay: 0.3 + idx * 0.05 }}
																			className="leading-relaxed"
																		>
																			{feature}
																		</motion.li>
																	))}
																</ul>
															</motion.div>

															<motion.div
																initial={{ opacity: 0, x: 20 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ delay: 0.2 }}
																className="space-y-6"
															>
																<div>
																	<h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
																		<Sparkles className={`w-5 h-5 ${offer.accentColor}`} />
																		{t('sections.benefitsTitle')}
																	</h4>
																	<div className="flex flex-wrap gap-2">
																		{content.benefits.map((benefit, idx) => (
																			<motion.span
																				key={idx}
																				initial={{ opacity: 0, scale: 0.8 }}
																				animate={{ opacity: 1, scale: 1 }}
																				transition={{ delay: 0.4 + idx * 0.1 }}
																				className={`px-4 py-2 rounded-full bg-gradient-to-r ${offer.gradient} text-sm font-medium`}
																			>
																				{benefit}
																			</motion.span>
																		))}
																	</div>
																</div>

																<div>
																	<h4 className="font-semibold text-lg mb-4">{t('sections.technologiesTitle')}</h4>
																	<div className="flex flex-wrap gap-2">
																		{offer.technologyKeys.map((tech, idx) => (
																			<motion.span
																				key={`${offer.id}-${tech.name}-${idx}`}
																				initial={{ opacity: 0, y: 10 }}
																				animate={{ opacity: 1, y: 0 }}
																				transition={{ delay: 0.5 + idx * 0.05 }}
																				className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm font-medium"
																			>
																				<Image src={tech.icon} alt={tech.name} width={16} height={16} className="w-4 h-4" />
																				{tech.name}
																			</motion.span>
																		))}
																	</div>
																</div>

																<motion.div
																	initial={{ opacity: 0, y: 20 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ delay: 0.6 }}
																>
																	<Link
																		href="#contact"
																		className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${offer.gradient} hover:opacity-90 transition-opacity font-semibold`}
																	>
																		{t('cta.pricing')}
																		<ArrowRight className="w-4 h-4" />
																	</Link>
																</motion.div>
															</motion.div>
														</div>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-20 bg-gradient-to-r from-primary/10 to-emerald-400/10">
				<div className="section-container text-center">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('cta.title')}</h2>
						<p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('cta.description')}</p>
						<Link
							href="#contact"
							className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
						>
							{t('cta.contact')}
							<ArrowRight className="w-5 h-5" />
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default OfferPage;
