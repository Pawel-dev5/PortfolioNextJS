import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'Metadata.portfolio' });

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

const PortfolioPage = () => (
	<div className="section-container py-20">
		<h1 className="text-4xl font-bold mb-6">Portfolio</h1>
		<p className="text-muted-foreground text-lg mb-8">Pełna lista projektów wkrótce.</p>
	</div>
);

export default PortfolioPage;
