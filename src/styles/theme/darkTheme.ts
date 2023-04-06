import { DefaultTheme } from 'styled-components';

// STYLES
import { globalTheme } from 'styles/theme/globalTheme';

// MODELS
import { DefaultThemeInterface } from 'styles/theme/models';

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultThemeInterface {} // eslint-disable-line no-shadow
}

const darkTheme = () => {
	const theme: DefaultTheme = {
		text: '#CCD6F6',
		textSecond: '#8892AF',
		body: '#0B192E',
		secondaryColor: '#64ffda',
		greenHover: 'rgba(100, 255, 218, 0.1)',
		navBackground: '#112240',
		navText: ' #a8b2d1',
		lightNavy: '#112240',
		lightestNavy: '#233554',

		...globalTheme(),
	};

	return theme;
};

export default darkTheme;
