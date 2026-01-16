import { getTranslations } from 'next-intl/server';

const Automatyzacje = async () => {
	const t = await getTranslations('Subpages');
	return (
		<div className="section-container py-20">
			<h1 className="text-4xl font-bold mb-6">{t('automation')}</h1>
			<p className="text-muted-foreground text-lg mb-8">{t('inProgress')}</p>
		</div>
	);
};

export default Automatyzacje;
