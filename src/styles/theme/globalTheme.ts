import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { transparentize, darken } from 'polished';

// STYLES
import { TransitionStyles } from 'styles/transitions';
import { CustomFonts } from 'styles/customFonts';

// MODELS
import { DefaultThemeInterface } from 'styles/theme/models';

declare module 'styled-components' {
	export interface DefaultTheme extends DefaultThemeInterface {} // eslint-disable-line no-shadow
}

export const GlobalStyle = createGlobalStyle`
  ${CustomFonts};
	html{
		scroll-behavior: smooth;
	}
	
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
	margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;

	* {
      font-family: "Calibre", system-ui, sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      box-sizing: border-box;    
      overflow-wrap: break-word;          
    }

	${TransitionStyles};
  
  }
`;

export const globalTheme = () => {
	const theme: DefaultTheme = {
		fontMono: 'SF Mono, sans-serif',

		light: 400,
		semiBold: 500,
		bold: 600,

		radius: '4px',

		breakpoints: {
			xs: '0',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1550px',
		},
		transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
	};

	theme.transparentize = ({ amount, color }: { amount: number; color: string }) =>
		transparentize(amount ?? 0.2, color ?? 'black');
	theme.darken = ({ amount, color }: { amount: number; color: string }) => darken(amount ?? 0.2, color ?? 'black');

	return theme;
};
