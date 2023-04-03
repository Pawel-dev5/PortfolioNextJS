import { createGlobalStyle } from 'styled-components';
import { transparentize, darken } from 'polished';

export const GlobalStyle = createGlobalStyle`
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
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      box-sizing: border-box;    
      overflow-wrap: break-word;    
      overflow: hidden;
      
    }
  }
  
`;

export const globalTheme = () => {
	const theme = {
		white: '#fff',
		black: 'hsl(0, 0%, 0%)',
		red: '#ff0000',

		grey100: 'hsl(0, 0%, 96%)',
		grey200: 'hsl(0, 0%, 90%)',
		grey300: 'hsl(0, 0%, 80%)',
		grey400: 'hsl(0, 0%, 70%)',
		grey500: 'hsl(0, 0%, 60%)',
		grey600: 'hsl(0, 0%, 50%)',
		grey700: 'hsl(0, 0%, 40%)',
		grey800: 'hsl(0, 0%, 30%)',
		grey900: 'hsl(0, 0%, 20%)',
		grey1000: 'hsl(0, 0%, 10%)',

		shadow: `
            -webkit-box-shadow: 0px 8px 12px -3px rgb(0 0 0 / 80%), 0px 0px 2px 0 rgb(0 0 0 / 15%);
            box-shadow: 0px 8px 12px -3px rgb(0 0 0 / 80%), 0px 0px 2px 0 rgb(0 0 0 / 15%);
        `,

		overlay: `
        background-color: #000000;
        opacity: 0.4;
        * {
          opacity: 1;
        }
        `,

		light: 400,
		semiBold: 500,
		bold: 600,

		breakpoints: {
			xs: '0',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
		transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
	};

	theme.transparentize = ({ amount, color }: { amount: number; color: string }) =>
		transparentize(amount ?? 0.2, color ?? 'black');
	theme.darken = ({ amount, color }: { amount: number; color: string }) => darken(amount ?? 0.2, color ?? 'black');

	return theme;
};
