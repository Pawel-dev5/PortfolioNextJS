/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.jsdelivr.net',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'nodemailer.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.worldvectorlogo.com',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
			{
				protocol: 'https',
				hostname: 'i0.wp.com',
			},
			{
				protocol: 'https',
				hostname: 'www.i18next.com',
			},
			{
				protocol: 'https',
				hostname: 'tanstack.com',
			},
			{
				protocol: 'https',
				hostname: 'zustand-demo.pmnd.rs',
			},
			{
				protocol: 'https',
				hostname: 'cdn.zapier.com',
			},
			{
				protocol: 'https',
				hostname: 'pexstudio.pl',
			},
		],
	},
};

module.exports = nextConfig;
