import { globalTheme } from 'theme/globalStyles';

const darkTheme = () => {
	const theme = {
		text: '#CCD6F6',
		textSecond: '#8892AF',
		body: '#0B192E',
		secondaryColor: '#64ffda',
		navBackground: '#112240',
		navText: ' #a8b2d1',

		...globalTheme(),
	};

	return theme;
};

export default darkTheme;
