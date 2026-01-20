'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import * as gtag from '@/lib/gtag';

const Header = () => {
	const t = useTranslations('Header');
	const locale = useLocale();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const [prevPathname, setPrevPathname] = useState(pathname);

	const navLinks = [
		{ label: t('about'), href: '#about' },
		{ label: t('experience'), href: '#experience' },
		{ label: t('portfolio'), href: '/portfolio' },
		{ label: t('offer'), href: '/oferta' },
		{ label: t('contact'), href: '#contact' },
	];

	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		setIsMobileMenuOpen(false);
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		if (href.startsWith('#')) {
			const element = document.querySelector(href);
			if (element) {
				const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
				const beforeScrollY = window.scrollY;
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				requestAnimationFrame(() => {
					const afterScrollY = window.scrollY;
					const rectTopAfter = element.getBoundingClientRect().top;
					if (Math.abs(afterScrollY - beforeScrollY) < 2 && (rectTopAfter < -8 || rectTopAfter > headerHeight + 8)) {
						const targetTop = Math.max(rectTopAfter + window.scrollY - headerHeight, 0);
						window.scrollTo({ top: targetTop, behavior: 'smooth' });
					}
				});
			} else {
				const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/';
				if (!isHomePage) {
					window.location.assign(`/${locale}${href}`);
				}
			}
		} else {
			window.location.assign(`/${locale}${href}`);
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass' : ''}`}
		>
			<div className={`section-container flex items-center justify-between ${isScrolled ? 'py-3' : 'py-5'}`}>
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-2"
					onClick={() =>
						gtag.event({
							action: 'click',
							category: 'Navigation',
							label: 'Logo',
						})
					}
				>
					<span className="text-xl md:text-2xl font-bold">
						Paweł <span className="text-primary">Nowecki</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) =>
						link.href.startsWith('#') ? (
							<button
								key={link.href}
								onClick={() => {
									scrollToSection(link.href);
									gtag.event({
										action: 'click',
										category: 'Navigation',
										label: link.label,
									});
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
							</button>
						) : (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
								onClick={() =>
									gtag.event({
										action: 'click',
										category: 'Navigation',
										label: link.label,
									})
								}
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
							</Link>
						),
					)}

					<Link
						href={pathname}
						locale={locale === 'pl' ? 'en' : 'pl'}
						className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Change language"
						onClick={() =>
							gtag.event({
								action: 'click',
								category: 'Navigation',
								label: `Language Switcher - ${locale === 'pl' ? 'en' : 'pl'}`,
							})
						}
					>
						<Globe className="w-4 h-4" />
						<span className="uppercase">{locale === 'pl' ? 'en' : 'pl'}</span>
					</Link>
				</nav>

				{/* CTA Button */}
				<div className="hidden md:block">
					<Button
						onClick={() => {
							scrollToSection('#contact');
							gtag.event({
								action: 'click',
								category: 'Navigation',
								label: 'CTA Header',
							});
						}}
						className="bg-primary hover:bg-primary/90 text-primary-foreground"
					>
						{t('cta')}
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center gap-4">
					<Link
						href={pathname}
						locale={locale === 'pl' ? 'en' : 'pl'}
						className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Change language"
						onClick={() =>
							gtag.event({
								action: 'click',
								category: 'Navigation',
								label: `Language Switcher - ${locale === 'pl' ? 'en' : 'pl'}`,
							})
						}
					>
						<Globe className="w-5 h-5" />
						<span className="uppercase">{locale === 'pl' ? 'en' : 'pl'}</span>
					</Link>

					<button
						onClick={() => {
							setIsMobileMenuOpen(!isMobileMenuOpen);
						}}
						className="p-2"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white/70 backdrop-blur-xl border-t border-border shadow-none overflow-hidden"
					>
						<nav className="section-container py-6 flex flex-col gap-4">
							{navLinks.map((link) =>
								link.href.startsWith('#') ? (
									<button
										key={link.href}
										onClick={() => {
											scrollToSection(link.href);
											gtag.event({
												action: 'click',
												category: 'Mobile Navigation',
												label: link.label,
											});
										}}
										className="text-left text-lg font-medium py-2 hover:text-primary transition-colors"
									>
										{link.label}
									</button>
								) : (
									<Link
										key={link.href}
										href={link.href}
										className="text-left text-lg font-medium py-2 hover:text-primary transition-colors"
										onClick={() => {
											setIsMobileMenuOpen(false);
											gtag.event({
												action: 'click',
												category: 'Mobile Navigation',
												label: link.label,
											});
										}}
									>
										{link.label}
									</Link>
								),
							)}
							<Button
								onClick={() => {
									scrollToSection('#contact');
									gtag.event({
										action: 'click',
										category: 'Mobile Navigation',
										label: 'CTA Mobile',
									});
								}}
								className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
							>
								{t('cta')}
							</Button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
