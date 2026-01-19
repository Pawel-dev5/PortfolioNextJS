'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import { sendEmail } from '@/app/actions/sendEmail';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { cn } from '@/lib/utils';
import * as gtag from '@/lib/gtag';

const socialLinks = [
	{ icon: Linkedin, href: 'https://linkedin.com/in/pawel-nowecki', label: 'LinkedIn', display: 'Paweł Nowecki' },
	{ icon: Github, href: 'https://github.com/Pawel-dev5', label: 'GitHub', display: 'Pawel-dev5' },
];

const Contact = () => {
	const t = useTranslations('Contact');
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [token, setToken] = useState<string>('');
	const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
	const [generalError, setGeneralError] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const turnstileRef = useRef<TurnstileInstance>(null);
	const mapErrorMessage = (message: string) => {
		const mappedMessages: Record<string, string> = {
			'Name must be at least 2 characters': t('form.validation.nameMin'),
			'Invalid email address': t('form.validation.emailInvalid'),
			'Subject must be at least 3 characters': t('form.validation.subjectMin'),
			'Message must be at least 10 characters': t('form.validation.messageMin'),
			'Verification failed': t('form.validation.tokenMissing'),
			'Please check the form for errors.': t('form.validation.checkForm'),
		};

		return mappedMessages[message] ?? message;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFieldErrors({});
		setGeneralError('');
		setIsSuccess(false);
		setIsSubmitting(true);

		const formData = new FormData(e.currentTarget);
		// Append turnstile token manually as it might not be in the form if we use state
		formData.append('token', token);

		try {
			const result = await sendEmail(null, formData);

			if (result.success) {
				gtag.event({
					action: 'submit',
					category: 'Contact',
					label: 'Contact Form Success',
				});
				toast({
					title: t('toast.successTitle'),
					description: t('toast.successDescription'),
				});
				formRef.current?.reset();
				turnstileRef.current?.reset();
				setToken('');
				setFieldErrors({});
				setGeneralError('');
				setIsSuccess(true);
			} else {
				const nextFieldErrors: Record<string, string> = {};
				const generalMessages: string[] = [];
				const fieldKeys = new Set(['name', 'email', 'subject', 'message']);

				if (result.errors) {
					for (const [key, messages] of Object.entries(result.errors)) {
						const firstMessage = messages?.[0];
						if (!firstMessage) continue;
						if (fieldKeys.has(key)) {
							nextFieldErrors[key] = mapErrorMessage(firstMessage);
						} else {
							generalMessages.push(mapErrorMessage(firstMessage));
						}
					}
				}

				if (result.message && generalMessages.length === 0) {
					generalMessages.push(mapErrorMessage(result.message));
				}

				if (generalMessages.length === 0 && Object.keys(nextFieldErrors).length === 0) {
					generalMessages.push(t('form.error'));
				}

				setFieldErrors(nextFieldErrors);
				setGeneralError(Object.keys(nextFieldErrors).length > 0 ? '' : (generalMessages[0] ?? ''));
			}
		} catch {
			setGeneralError(t('form.error'));
		} finally {
			setIsSubmitting(false);
		}
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
									<a
										href="mailto:p.nowecki@gmail.com"
										className="font-medium hover:text-primary transition-colors"
										onClick={() =>
											gtag.event({
												action: 'click',
												category: 'Contact',
												label: 'Email',
											})
										}
									>
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
									<a
										href="tel:+48791893867"
										className="font-medium hover:text-primary transition-colors"
										onClick={() =>
											gtag.event({
												action: 'click',
												category: 'Contact',
												label: 'Phone',
											})
										}
									>
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
											onClick={() =>
												gtag.event({
													action: 'click',
													category: 'Contact',
													label: `Social - ${link.label}`,
												})
											}
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
						{isSuccess ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className="glass-card p-8 h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[500px]"
							>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
									className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-2"
								>
									<CheckCircle2 className="w-12 h-12 text-primary" />
								</motion.div>

								<div>
									<h3 className="text-2xl font-bold mb-2">{t('success.title')}</h3>
									<p className="text-muted-foreground max-w-xs mx-auto">{t('success.description')}</p>
								</div>

								<Button
									onClick={() => setIsSuccess(false)}
									variant="outline"
									className="mt-4 border-primary/20 hover:bg-primary/5"
								>
									{t('success.button')}
								</Button>
							</motion.div>
						) : (
							<form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 relative" autoComplete="off">
								{/* Honeypot Field - Hidden */}
								<div className="hidden" aria-hidden="true">
									<label htmlFor="company_fax">Company fax</label>
									<input type="text" name="company_fax" id="company_fax" tabIndex={-1} autoComplete="off" inputMode="none" />
								</div>

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
											aria-invalid={!!fieldErrors.name}
											className={cn(
												'bg-background',
												fieldErrors.name && 'border-destructive focus-visible:ring-destructive',
											)}
										/>
										{fieldErrors.name && <p className="mt-1 text-sm text-destructive">{fieldErrors.name}</p>}
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
											aria-invalid={!!fieldErrors.email}
											className={cn(
												'bg-background',
												fieldErrors.email && 'border-destructive focus-visible:ring-destructive',
											)}
										/>
										{fieldErrors.email && <p className="mt-1 text-sm text-destructive">{fieldErrors.email}</p>}
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
										aria-invalid={!!fieldErrors.subject}
										className={cn(
											'bg-background',
											fieldErrors.subject && 'border-destructive focus-visible:ring-destructive',
										)}
									/>
									{fieldErrors.subject && <p className="mt-1 text-sm text-destructive">{fieldErrors.subject}</p>}
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
										aria-invalid={!!fieldErrors.message}
										className={cn(
											'bg-background resize-none',
											fieldErrors.message && 'border-destructive focus-visible:ring-destructive',
										)}
									/>
									{fieldErrors.message && <p className="mt-1 text-sm text-destructive">{fieldErrors.message}</p>}
								</div>

								<div className="mb-4 w-full">
									<Turnstile
										ref={turnstileRef}
										siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
										onSuccess={(validatedToken) => setToken(validatedToken)}
										options={{
											theme: 'light',
											size: 'flexible',
										}}
									/>
								</div>

								{generalError && <p className="mb-4 text-sm text-destructive">{generalError}</p>}

								<Button
									type="submit"
									size="lg"
									className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
									disabled={isSubmitting || !token}
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
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
