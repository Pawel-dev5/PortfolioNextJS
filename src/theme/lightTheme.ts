import { globalTheme } from 'theme/globalStyles';

const lightTheme = () => {
	const theme = {
		text: '#0B192E',
		textSecond: '#8892AF',
		body: '#CCD6F6',
		secondaryColor: '#64ffda',
		navBackground: ' #a8b2d1',
		navText: '#112240',

		...globalTheme(),
	};

	return theme;
};

export default lightTheme;
