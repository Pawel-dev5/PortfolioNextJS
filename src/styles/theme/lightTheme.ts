import { DefaultTheme } from 'styled-components';

// STYLES
import { globalTheme } from 'styles/theme/globalTheme';

// MODELS
import { DefaultThemeInterface } from 'styles/theme/models';

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultThemeInterface {} // eslint-disable-line no-shadow
}

const lightTheme = () => {
	const theme: DefaultTheme = {
		text: '#0B192E',
		textSecond: '#233554',
		body: '#a8b2d1',
		secondaryColor: '#64ffda',
		greenHover: 'rgba(100, 255, 218, 0.1)',
		navBackground: ' #a8b2d1',
		navText: '#112240',
		lightNavy: '#a8b2d1',
		lightestNavy: '#233554',

		...globalTheme(),
	};

	return theme;
};

export default lightTheme;
