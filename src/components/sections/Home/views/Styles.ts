import styled, { css } from 'styled-components';
import { fadeUp } from 'styles/animations';

export const StyledHomeContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

export const StyledHomeTitle = styled.h1<{ duration: string | null }>`
	margin: 1.5rem 0;
	margin-left: 4px;
	color: ${({ theme }) => theme.secondaryColor};
	line-height: 1.1;
	font-family: ${({ theme }) => theme.fontMono};
	font-weight: ${({ theme }) => theme.semiBold};
	font-size: clamp(14px, 5vw, 17px);

	opacity: 0;
	${({ duration }) =>
		duration &&
		css`
			opacity: 1;
			animation-name: ${fadeUp};
			animation-duration: ${duration};
		`}
`;

export const StyledHomeName = styled.h2<{ duration: string | null }>`
	font-weight: ${({ theme }) => theme.bold};
	color: ${({ theme }) => theme.text};
	line-height: 1.1;
	margin: 0;
	font-size: clamp(40px, 8vw, 75px);

	opacity: 0;
	${({ duration }) =>
		duration &&
		css`
			opacity: 1;
			animation-name: ${fadeUp};
			animation-duration: ${duration};
		`}
`;

export const StyledHomeHeadline = styled.h3<{ duration: string | null }>`
	margin: 5px 0;
	color: ${({ theme }) => theme.textSecond};
	line-height: 0.9;
	font-size: clamp(40px, 8vw, 75px);
	font-weight: ${({ theme }) => theme.bold};

	opacity: 0;
	${({ duration }) =>
		duration &&
		css`
			opacity: 1;
			animation-name: ${fadeUp};
			animation-duration: ${duration};
		`}
`;

export const StyledCompany = styled.a`
	color: ${({ theme }) => theme.secondaryColor};
	display: inline-block;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	font-size: clamp(14px, 5vw, 20px);
	text-decoration: none;
	margin-bottom: -10px;

	:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.1em;
		background-color: ${({ theme }) => theme.secondaryColor};
		transition: opacity 300ms, transform 300ms;
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	:hover::after,
	:focus::after {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

export const StyledHomeDescription = styled.p<{ duration: string | null }>`
	max-width: 550px;
	margin-top: 2rem;

	span:first-child {
		margin: 20px 0px 0px;
		font-weight: 400;
		color: ${({ theme }) => theme.textSecond};
		font-size: clamp(14px, 5vw, 20px);
		line-height: 1.3;
		white-space: pre-wrap;
	}

	opacity: 0;
	${({ duration }) =>
		duration &&
		css`
			opacity: 1;
			animation-name: ${fadeUp};
			animation-duration: ${duration};
		`}
`;

export const StyledButton = styled.a<{ duration: string | null }>`
	color: ${({ theme }) => theme.secondaryColor};
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.secondaryColor};
	border-radius: 4px;
	padding: 1.25rem 1.75rem;
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fontMono};
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition: ${({ theme }) => theme.transition};
	margin-top: 50px;
	width: fit-content;

	:hover {
		background-color: ${({ theme }) => theme.greenHover};
		outline: none;
	}

	opacity: 0;
	${({ duration }) =>
		duration &&
		css`
			opacity: 1;
			animation-name: ${fadeUp};
			animation-duration: ${duration};
		`}
`;
