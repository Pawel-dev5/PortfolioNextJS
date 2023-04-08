export type DefaultThemeInterface = {
	body?: string;
	text?: string;
	fontMono: string;
	light: number;
	semiBold: number;
	bold: number;
	radius: string;
	breakpoints: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		xxl: string;
	};
	transition: string;
	transparentize?: ({ amount, color }: { amount: number; color: string }) => string; // eslint-disable-line no-unused-vars
	darken?: ({ amount, color }: { amount: number; color: string }) => string; // eslint-disable-line no-unused-vars

	textSecond?: string;
	secondaryColor?: string;
	greenHover?: string;
	navBackground?: string;
	grey?: string;
	navText?: string;
	lightNavy?: string;
	lightestNavy?: string;
};
