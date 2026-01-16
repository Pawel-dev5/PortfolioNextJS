'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';

const socialLinks = [
	{ icon: Linkedin, href: 'https://linkedin.com/in/pawel-nowecki', label: 'LinkedIn', display: 'Paweł Nowecki' },
	{ icon: Github, href: 'https://github.com/Pawel-dev5', label: 'GitHub', display: 'Pawel-dev5' },
];

const Contact = () => {
	const t = useTranslations('Contact');
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: t('toast.successTitle'),
			description: t('toast.successDescription'),
		});

		setIsSubmitting(false);
		(e.target as HTMLFormElement).reset();
	};

	return (
		<section id="contact" className="py-24 bg-background">
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

				<div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{/* Contact Info */}
					<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
						<h3 className="text-2xl font-bold mb-6">{t('infoTitle')}</h3>
						<p className="text-muted-foreground mb-8 leading-relaxed">{t('infoDescription')}</p>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
									<Mail className="w-5 h-5 text-primary" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">{t('email')}</p>
									<a href="mailto:p.nowecki@gmail.com" className="font-medium hover:text-primary transition-colors">
										p.nowecki@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
									<Phone className="w-5 h-5 text-primary" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">{t('phone')}</p>
									<a href="tel:+48791893867" className="font-medium hover:text-primary transition-colors">
										+48 791 893 867
									</a>
								</div>
							</div>

							{socialLinks.map((link) => (
								<div key={link.label} className="flex items-center gap-4">
									<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
										<link.icon className="w-5 h-5 text-primary" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">{link.label}</p>
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium hover:text-primary transition-colors"
										>
											{link.display}
										</a>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
						<form onSubmit={handleSubmit} className="glass-card p-8">
							<div className="grid sm:grid-cols-2 gap-4 mb-4">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-2">
										{t('form.name')}
									</label>
									<Input
										id="name"
										name="name"
										placeholder={t('form.placeholders.name')}
										required
										className="bg-background"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium mb-2">
										{t('form.email')}
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder={t('form.placeholders.email')}
										required
										className="bg-background"
									/>
								</div>
							</div>

							<div className="mb-4">
								<label htmlFor="subject" className="block text-sm font-medium mb-2">
									{t('form.subject')}
								</label>
								<Input
									id="subject"
									name="subject"
									placeholder={t('form.placeholders.subject')}
									required
									className="bg-background"
								/>
							</div>

							<div className="mb-6">
								<label htmlFor="message" className="block text-sm font-medium mb-2">
									{t('form.message')}
								</label>
								<Textarea
									id="message"
									name="message"
									placeholder={t('form.placeholders.message')}
									rows={5}
									required
									className="bg-background resize-none"
								/>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									t('form.submitting')
								) : (
									<>
										<Send className="mr-2 w-4 h-4" />
										{t('form.submit')}
									</>
								)}
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
