import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['pl', 'en'],

	// Used when no locale matches
	defaultLocale: 'pl',
});

export const config = {
	// Match all pathnames except for
	// - api routes
	// - _next/static (static files)
	// - _next/image (image optimization files)
	// - favicon.ico (favicon file)
	// - sitemap.xml and robots.txt (SEO files)
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|catalog/products|landingPage|Irrify_logo.png|Irrify_logo_small.png|web.png|email.png|phone.png|facebook.png|instagram.png|video).*)',
	],
};
