import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://pawelnowecki.pl';

	const routes = [
		'',
		'/portfolio',
		'/oferta/automatyzacje',
		'/oferta/strony-internetowe',
		'/oferta/systemy-dedykowane-crm',
		'/oferta/wdrozenia-ai',
	];

	const locales = ['pl', 'en'];

	return routes.flatMap((route) =>
		locales.map((locale) => ({
			url: `${baseUrl}/${locale}${route}`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: route === '' ? 1 : 0.8,
		})),
	);
}
