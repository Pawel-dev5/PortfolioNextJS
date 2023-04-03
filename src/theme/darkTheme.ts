import { globalTheme } from 'theme/globalStyles';

const darkTheme = () => {
	const theme = {
		text: '#CCD6F6',
		textSecond: '#8892AF',
		body: '#0B192E',
		secondaryColor: '#64ffda',

		...globalTheme(),
	};

	return theme;
};

export default darkTheme;
