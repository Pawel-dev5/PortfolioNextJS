import styled, { css, keyframes } from 'styled-components';

export const StyledNavigationContainer = styled.nav<{ scrolledToTop: boolean }>`
	width: 100%;
	height: 100px;
	padding: 0px 40px;
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

const fadeIn = keyframes`
	from { opacity: 0; }
	to { 
		opacity: 1;
		transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
   	}
`;

const fadeDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20px);
		visibility: hidden;
	}
	to { 
		opacity: 1;
		transform: translateY(0px);
		visibility: initial;
		transition: visibility, opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
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

export const StyledLink = styled.li<{ delay: string; animated: boolean; withoutCounter?: boolean }>`
	animation-name: ${fadeDown};
	animation-duration: 1s;
	visibility: hidden;
	margin: 0 5px;
	counter-increment: item 1;

	a {
		padding: 10px;
		text-decoration: none;
		color: ${({ theme }) => theme.text};
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
	}

	${({ delay }) =>
		delay &&
		css`
			animation-delay: ${delay};
		`}
	${({ animated }) =>
		animated &&
		css`
			visibility: initial;
		`}
`;

export const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}

	ol {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.resume-button {
		margin-left: 15px;
	}
`;
