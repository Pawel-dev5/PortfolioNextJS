import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// THEMES
import { DefaultGlobalStyles } from 'theme/globalStyles';
import lightTheme from 'theme/lightTheme';
import darkTheme from 'theme/darkTheme';

const App = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] = useState('light');
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

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<DefaultGlobalStyles />
			<Component {...pageProps} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
		</ThemeProvider>
	);
};

export default App;
