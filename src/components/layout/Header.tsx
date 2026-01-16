'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
	{ label: 'O mnie', href: '#about' },
	{ label: 'Doświadczenie', href: '#experience' },
	{ label: 'Portfolio', href: '#portfolio' },
	{ label: 'Oferta', href: '#offer' },
	{ label: 'Kontakt', href: '#contact' },
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const [prevPathname, setPrevPathname] = useState(pathname);

	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		if (pathname !== '/' && href.startsWith('#')) {
			window.location.assign(`/${href}`);
			return;
		}

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}
		>
			<div className="section-container flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					<span className="text-xl md:text-2xl font-bold">
						Paweł <span className="text-primary">Nowecki</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<button
							key={link.href}
							onClick={() => scrollToSection(link.href)}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
						>
							{link.label}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
						</button>
					))}
				</nav>

				{/* CTA Button */}
				<div className="hidden md:block">
					<Button
						onClick={() => scrollToSection('#contact')}
						className="bg-primary hover:bg-primary/90 text-primary-foreground"
					>
						Porozmawiajmy
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
					{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden glass border-t border-border"
					>
						<nav className="section-container py-6 flex flex-col gap-4">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() => scrollToSection(link.href)}
									className="text-left text-lg font-medium py-2 hover:text-primary transition-colors"
								>
									{link.label}
								</button>
							))}
							<Button
								onClick={() => scrollToSection('#contact')}
								className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
							>
								Porozmawiajmy
							</Button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
