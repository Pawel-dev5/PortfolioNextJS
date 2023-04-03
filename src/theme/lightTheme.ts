import { globalTheme } from 'theme/globalStyles';

const lightTheme = () => {
	const theme = {
		text: '#0B192E',
		textSecond: '#8892AF',
		body: '#CCD6F6',
		secondaryColor: '#64ffda',

		...globalTheme(),
	};

	return theme;
};

export default lightTheme;
