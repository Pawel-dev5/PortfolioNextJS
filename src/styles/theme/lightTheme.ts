import { globalTheme } from 'styles/theme/globalTheme';

const lightTheme = () => {
	const theme = {
		text: '#0B192E',
		textSecond: '#8892AF',
		body: '#CCD6F6',
		secondaryColor: '#64ffda',
		greenHover: 'rgba(100, 255, 218, 0.1)',
		navBackground: ' #a8b2d1',
		navText: '#112240',
		lightNavy: '#233554',

		...globalTheme(),
	};

	return theme;
};

export default lightTheme;
