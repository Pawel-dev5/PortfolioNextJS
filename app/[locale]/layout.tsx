import '../globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Contact from '@/components/homepage/Contact';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata.default' });

	return {
		title: t('title'),
		description: t('description'),
		keywords: t('keywords'),
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

const RootLayout = async ({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) => {
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
			<head></head>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YH9V81TG9H" />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YH9V81TG9H', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<body className="antialiased min-h-screen relative overflow-x-hidden bg-background">
				<JsonLd />
				<NextIntlClientProvider messages={messages}>
					<Header />
					<main className="overflow-x-hidden">{children}</main>
					<Contact />
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
