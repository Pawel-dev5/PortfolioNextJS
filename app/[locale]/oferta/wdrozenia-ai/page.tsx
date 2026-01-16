import { getTranslations } from 'next-intl/server';

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
