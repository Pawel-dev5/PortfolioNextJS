import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

// THEMES
import { GlobalStyle } from 'theme/globalStyles';
import lightTheme from 'theme/lightTheme';
import darkTheme from 'theme/darkTheme';

const App = ({ Component, pageProps }: AppProps) => {
	const { locale, defaultLocale } = useRouter();

	const [theme, setTheme] = useState('dark');
	const isDarkTheme = theme === 'dark';

	const toggleTheme = () => {
		const updatedTheme = isDarkTheme ? 'light' : 'dark';
		setTheme(updatedTheme);
		localStorage.setItem('theme', updatedTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
			setTheme(savedTheme);
		} else if (prefersDark) {
			setTheme('dark');
		}
	}, []);

	const localeHandler = () => {
		let currentLocale = defaultLocale || 'en';
		if (locale) currentLocale = locale;

		return currentLocale;
	};

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Component {...pageProps} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} locale={localeHandler()} />
		</ThemeProvider>
	);
};

export default App;
