import styled, { css } from 'styled-components';
import { fadeIn } from 'theme/animations';

export const StyleFloatBase = styled.div<{ animated: boolean }>`
	position: fixed;
	bottom: 0;
	height: 300px;
	width: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 0;
	animation-name: ${fadeIn};
	animation-duration: 5s;
	animation-delay: 1s;

	${({ animated }) =>
		animated &&
		css`
			opacity: 1;
		`}
`;

export const StyledLeftFloatWrapper = styled(StyleFloatBase)`
	left: 40px;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		text-decoration: none;
		height: 100%;
		padding: 0;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 0.1em;
		color: ${({ theme }) => theme.text};

		:hover {
			color: ${({ theme }) => theme.secondaryColor};
		}
		::after {
			content: '';
			display: block;
			width: 1px;
			height: 120px;
			margin-top: 30px;
			background-color: ${({ theme }) => theme.text};
		}

		a {
			width: 40px;
			height: 40px;
			padding: 10px;
			font-size: 12px;
			line-height: 18px;
			letter-spacing: 0.1em;
			writing-mode: vertical-rl;
			color: ${({ theme }) => theme.text};

			:hover {
				color: ${({ theme }) => theme.secondaryColor};
				transform: translateY(-3px);
				transition: ${({ theme }) => theme.transition};
			}
		}
	}
`;

export const StyledRightFloatWrapper = styled(StyleFloatBase)`
	right: 40px;
	height: 330px;

	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		padding: 0;
		font-size: 14px;
		line-height: 21px;
		letter-spacing: 0.15em;
		writing-mode: vertical-rl;
		color: ${({ theme }) => theme.text};

		:hover {
			color: ${({ theme }) => theme.secondaryColor};
			transform: translateY(-3px);
			transition: ${({ theme }) => theme.transition};
		}
		::after {
			content: '';
			display: block;
			width: 1px;
			min-height: 120px;
			margin-top: 30px;
			background-color: ${({ theme }) => theme.text};
		}
	}
`;

export const StyledLayout = styled.div`
	position: relative;
	min-width: 100%;
	min-height: 100%;
`;

export const StyledBodyContainer = styled.div<{ menuIsOpen: boolean }>`
	margin: 0px auto;
	margin-top: 100px;
	padding: 100px 100px;
	max-width: 1100px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		max-width: 1300px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		max-width: 1600px;
	}

	${({ menuIsOpen }) =>
		menuIsOpen &&
		css`
			overflow: hidden;

			> * {
				filter: blur(5px) brightness(0.7);
				transition: ${({ theme }) => theme.transition};
				pointer-events: none;
				user-select: none;
			}
		`}
`;
