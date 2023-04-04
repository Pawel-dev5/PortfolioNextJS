import { globalTheme } from 'styles/theme/globalTheme';

const darkTheme = () => {
	const theme = {
		text: '#CCD6F6',
		textSecond: '#8892AF',
		body: '#0B192E',
		secondaryColor: '#64ffda',
		greenHover: 'rgba(100, 255, 218, 0.1)',
		navBackground: '#112240',
		navText: ' #a8b2d1',
		lightNavy: '#233554',

		...globalTheme(),
	};

	return theme;
};

export default darkTheme;
