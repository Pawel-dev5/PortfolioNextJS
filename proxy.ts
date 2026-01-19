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
	// - public assets and other files with extensions
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)'],
};
