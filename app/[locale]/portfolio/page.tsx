import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PortfolioPage from '@/components/Portfolio/PortfolioPage';

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

const PortfolioPageRoute = async ({ params }: { params: { locale: string } }) => {
	const { locale } = await params;
	return <PortfolioPage locale={locale} />;
};

export default PortfolioPageRoute;
