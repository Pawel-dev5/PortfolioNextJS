/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = withFonts({
	webpack(config) {
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'static/fonts/',
					publicPath: '/_next/static/fonts/',
				},
			},
		});

		return config;
	},

	reactStrictMode: true,
	i18n: {
		locales: ['en', 'pl'],
		defaultLocale: 'en',
	},
});
