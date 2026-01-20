'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const CONSENT_KEY = 'cookie-consent';

const CookieModalContent = () => {
	const t = useTranslations('CookieBanner');
	const [isOpen, setIsOpen] = useState(() => window.localStorage.getItem(CONSENT_KEY) !== 'accepted');

	useEffect(() => {
		const storedConsent = window.localStorage.getItem(CONSENT_KEY);
		if (storedConsent === 'accepted') {
			window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
		}
	}, []);

	const handleAccept = () => {
		window.localStorage.setItem(CONSENT_KEY, 'accepted');
		window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
		setIsOpen(false);
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="cookie-modal-title"
				className="w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8"
			>
				<h2 id="cookie-modal-title" className="text-xl font-semibold text-foreground">
					{t('title')}
				</h2>
				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t('message')}</p>
				<div className="mt-6 flex justify-end">
					<Button onClick={handleAccept}>{t('accept')}</Button>
				</div>
			</div>
		</div>
	);
};

const emptySubscribe = () => () => {};

const CookieModal = () => {
	const isClient = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);

	if (!isClient) {
		return null;
	}

	return <CookieModalContent />;
};

export default CookieModal;
