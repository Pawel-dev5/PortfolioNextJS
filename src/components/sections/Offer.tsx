'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Database, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const offers = [
	{
		icon: Globe,
		title: 'Strony & Sklepy',
		description: 'Nowoczesne strony internetowe, sklepy e-commerce, landing pages konwertujące na klientów.',
		link: '/oferta/strony-internetowe',
		gradient: 'from-pink-500/20 to-rose-500/20',
	},
	{
		icon: Database,
		title: 'Systemy Dedykowane',
		description: 'Customowe systemy CRM/ERP, panele administracyjne, aplikacje biznesowe na miarę.',
		link: '/oferta/systemy-dedykowane-crm',
		gradient: 'from-blue-500/20 to-indigo-500/20',
	},
	{
		icon: Brain,
		title: 'Wdrożenia AI',
		description: 'Inteligentni agenci AI, automatyzacja procesów, integracja z OpenAI i innymi modelami LLM.',
		link: '/oferta/wdrozenia-ai',
		gradient: 'from-emerald-500/20 to-teal-500/20',
	},
	{
		icon: Zap,
		title: 'Automatyzacje',
		description: 'Automatyzacja workflow, integracje API, boty i skrypty oszczędzające setki godzin pracy.',
		link: '/oferta/automatyzacje',
		gradient: 'from-amber-500/20 to-orange-500/20',
	},
];

const Offer = () => (
	<section className="py-24 bg-secondary/30">
		<div className="section-container">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<span className="text-primary font-semibold text-sm uppercase tracking-wider">Oferta</span>
				<h2 className="text-3xl sm:text-4xl font-bold mt-2">
					Jak mogę Ci <span className="gradient-text">pomóc</span>?
				</h2>
				<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
					Oferuję kompleksowe usługi programistyczne - od prostych stron internetowych po zaawansowane systemy AI i
					automatyzacje biznesowe.
				</p>
			</motion.div>

			{/* Bento Grid */}
			<div className="grid md:grid-cols-2 gap-6">
				{offers.map((offer, index) => (
					<motion.div
						key={offer.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
					>
						<Link href={offer.link} className="group block glass-card p-8 h-full hover-lift relative overflow-hidden">
							{/* Background gradient */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							/>

							<div className="relative z-10">
								{/* Icon */}
								<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<offer.icon className="w-7 h-7 text-primary" />
								</div>

								{/* Content */}
								<h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{offer.title}</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">{offer.description}</p>

								{/* Link */}
								<span className="inline-flex items-center text-primary font-medium">
									Dowiedz się więcej
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

export default Offer;
