import '../globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata' });

	return {
		title: t('title'),
		description: t('description'),
		openGraph: {
			title: t('title'),
			description: t('description'),
			images: ['/assets/pawelnowecki.jpeg'],
			locale: locale,
			type: 'website',
			url: 'https://pawelnowecki.pl',
			siteName: t('title'),
		},
	};
}

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: { locale: string } }) => {
	const { locale } = await params;
	// Ensure that the incoming `locale` is valid
	if (!(routing.locales as readonly string[]).includes(locale)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale} className="scroll-smooth">
			<body className="antialiased min-h-screen relative overflow-x-hidden">
				<NextIntlClientProvider messages={messages}>
					<div className="min-h-screen bg-background">
						<Header />
						<main className="overflow-x-hidden">{children}</main>
						<Contact />
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
