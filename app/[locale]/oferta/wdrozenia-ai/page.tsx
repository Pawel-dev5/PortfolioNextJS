import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata.offer_ai' });

	return {
		title: t('title'),
		description: t('description'),
		keywords: t('keywords'),
		openGraph: {
			title: t('title'),
			description: t('description'),
			locale: locale,
			type: 'website',
		},
	};
}

const WdrozeniaAI = async () => {
	const t = await getTranslations('Subpages');
	return (
		<div className="section-container py-20">
			<h1 className="text-4xl font-bold mb-6">{t('ai')}</h1>
			<p className="text-muted-foreground text-lg mb-8">{t('aiDescription')}</p>
		</div>
	);
};

export default WdrozeniaAI;
