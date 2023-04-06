import styled, { css } from 'styled-components';
import { fadeIn } from 'styles/animations';

export const StyledGridDescription = styled.div`
	color: ${({ theme }) => theme.navText};
	font-size: 17px;

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: ${({ theme }) => theme.transition};
		color: ${({ theme }) => theme.secondaryColor};
		&:hover,
		&:focus,
		&:active {
			color: ${({ theme }) => theme.secondaryColor};
			outline: 0;
			&:after {
				width: 100%;
			}
			& > * {
				color: ${({ theme }) => theme.secondaryColor} !important;
				transition: ${({ theme }) => theme.transition};
			}
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			position: relative;
			bottom: 0.37em;
			background-color: ${({ theme }) => theme.secondaryColor};
			transition: ${({ theme }) => theme.transition};
			opacity: 0.5;
		}
	}
`;

export const StyledGridLinks = styled.div`
	display: flex;
	align-items: center;
	margin-right: -10px;
	color: ${({ theme }) => theme.navText};

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 7px;

		svg {
			width: 22px;
			height: 22px;
			margin-top: -4px;
			color: ${({ theme }) => theme.textSecond};
		}

		svg {
			width: 20px;
			height: 20px;
		}
	}
`;

export const StyledTitle = styled.h3`
	margin: 0 0 10px;
	color: ${({ theme }) => theme.navText};
	font-size: 22px;
	font-weight: ${({ theme }) => theme.bold};

	a {
		position: static;

		&:before {
			content: '';
			display: block;
			position: absolute;
			z-index: 0;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}
`;

export const StyledGridTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 35px;

	svg {
		color: ${({ theme }) => theme.secondaryColor};
		width: 40px;
		height: 40px;
	}
`;

export const StyledProjectsSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: clamp(24px, 5vw, 32px);
	}

	.archive-link {
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 14px;
		&:after {
			bottom: 0.1em;
		}
	}
`;

export const StyledProjectInner = styled.div`
	@media (prefers-reduced-motion: no-preference) {
		&:hover,
		&:focus-within {
			transform: translateY(-7px);
		}
	}

	:hover {
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
		}
	}

	box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
	transition: ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	height: 100%;
	padding: 2rem 1.75rem;
	border-radius: ${({ theme }) => theme.radius};
	background-color: ${({ theme }) => theme.lightNavy};
	transition: ${({ theme }) => theme.transition};
	overflow: auto;
`;

export const StyledProject = styled.li<{ duration: string }>`
	position: relative;
	cursor: default;
	transition: ${({ theme }) => theme.transition};

	a {
		position: relative;
		z-index: 1;
	}

	animation-name: ${fadeIn};

	${({ duration }) =>
		duration &&
		css`
			animation-duration: ${duration};
		`}
`;

export const StyledGridStackList = styled.ul`
	display: flex;
	align-items: flex-end;
	flex-grow: 1;
	flex-wrap: wrap;
	padding: 0;
	margin: 20px 0 0 0;
	list-style: none;

	li {
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 12px;
		line-height: 1.75;

		&:not(:last-of-type) {
			margin-right: 15px;
		}
	}
`;

export const StyledGridMoreButton = styled.button`
	color: ${({ theme }) => theme.secondaryColor};
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.secondaryColor};
	border-radius: ${({ theme }) => theme.radius};
	font-size: 13px;
	font-family: ${({ theme }) => theme.fontMono};
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition: ${({ theme }) => theme.transition};
	padding: 1.25rem 1.75rem;

	&:hover,
	&:focus,
	&:active {
		background-color: ${({ theme }) => theme.greenHover};
		outline: none;
	}
	&:after {
		display: none !important;
	}
	margin: 80px auto 0;
`;

export const StyledGridWrapper = styled.ul`
	width: 100%;
	list-style: none;
	padding: 0;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 15px;
	position: relative;
	margin-top: 50px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;
