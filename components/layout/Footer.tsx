'use client';

import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Footer');
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-secondary/50 border-t border-border">
			<div className="section-container py-8 text-center">
				<p className="text-sm text-muted-foreground">{t('copyright', { year: currentYear })}</p>
			</div>
		</footer>
	);
};

export default Footer;
