import Link from 'next/link';
import styled, { css } from 'styled-components';
import { fadeDown, fadeIn } from 'styles/animations';

export const StyledNavigationContainer = styled.nav<{ scrolledToTop: boolean }>`
	width: 100%;
	height: 100px;
	padding: 0px 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0px;
	z-index: 11;
	background-color: rgba(10, 25, 47, 0.85);
	backdrop-filter: blur(10px);
	pointer-events: auto;
	user-select: auto;

	${({ scrolledToTop }) =>
		!scrolledToTop &&
		css`
			box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
		`}

	* {
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 0.9rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0px 40px;
	}
`;

export const StyledElementsWrapper = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 16px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const StyledIconWrapper = styled.div`
	width: 42px;
	height: 42px;

	animation-name: ${fadeIn};
	animation-duration: 5s;

	svg {
		fill: none;
		color: ${({ theme }) => theme.secondaryColor};
	}
`;

export const StyledLink = styled(Link)<{
	duration?: string;
	withoutCounter?: boolean;
	resume?: boolean;
	customMargin?: string;
}>`
	animation-name: ${fadeDown};
	margin: 0 5px;
	counter-increment: item 1;
	background-color: transparent;
	border: none;
	text-decoration: none;
	cursor: pointer;
	background: transparent;
	border: none;
	padding: 10px;
	color: ${({ theme }) => theme.navText};

	&:hover,
	&:active {
		color: ${({ theme }) => theme.secondaryColor};
	}

	${({ withoutCounter }) =>
		!withoutCounter &&
		css`
			&:before {
				content: '0' counter(item) '.';
				margin-right: 5px;
				color: ${({ theme }) => theme.secondaryColor};
				text-align: right;
			}
		`}

	${({ duration }) =>
		duration &&
		css`
			animation-duration: ${duration};
		`}

	${({ customMargin }) =>
		customMargin &&
		css`
			margin: ${customMargin};
		`}

	${({ resume }) =>
		resume &&
		css`
			color: ${({ theme }) => theme.secondaryColor};
			background-color: transparent;
			border: 1px solid ${({ theme }) => theme.secondaryColor};
			border-radius: ${({ theme }) => theme.radius};
			padding: 0.75rem 1rem;
			line-height: 1;
			text-decoration: none;
			cursor: pointer;
			transition: ${({ theme }) => theme.transition};
			margin-left: 15px;

			:hover {
				background-color: ${({ theme }) => theme.greenHover};
				outline: none;
			}

			a {
				padding: 0px;
				font-weight: ${({ theme }) => theme.semiBold};
				margin-left: 0;
				color: ${({ theme }) => theme.secondaryColor};
			}
		`}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-left: 0;
	}
`;

export const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}
`;
