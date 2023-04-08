import styled from 'styled-components';

export const StyledMenu = styled.div`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: block;
	}
`;

export const StyledHamburgerButton = styled.button<{ menuOpen: boolean }>`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 10;
		margin-right: -15px;
		padding: 15px;
		border: 0;
		background-color: transparent;
		color: inherit;
		text-transform: none;
		transition-timing-function: linear;
		transition-duration: 0.15s;
		transition-property: opacity, filter;
	}

	.ham-box {
		display: inline-block;
		position: relative;
		width: 30px;
		height: 24px;
	}

	.ham-box-inner {
		position: absolute;
		top: 50%;
		right: 0;
		width: 30px;
		height: 2px;
		border-radius: ${({ theme }) => theme.radius};
		background-color: ${({ theme }) => theme.secondaryColor};
		transition-duration: 0.22s;
		transition-property: transform;
		transition-delay: ${({ menuOpen }) => (menuOpen ? `0.12s` : `0s`)};
		transform: rotate(${({ menuOpen }) => (menuOpen ? `225deg` : `0deg`)});
		transition-timing-function: cubic-bezier(
			${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
		);
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			left: auto;
			right: 0;
			width: 30px;
			height: 2px;
			border-radius: ${({ theme }) => theme.radius};
			background-color: ${({ theme }) => theme.secondaryColor};
			transition-timing-function: ease;
			transition-duration: 0.15s;
			transition-property: transform;
		}
		&:before {
			width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
			top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			opacity: ${(props) => (props.menuOpen ? 0 : 1)};
			transition: ${({ menuOpen }) =>
				menuOpen ? 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s,opacity 0.1s ease-in'};
		}
		&:after {
			width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
			bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
			transition: ${({ menuOpen }) =>
				menuOpen
					? 'bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s'
					: 'bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)'};
		}
	}
`;

export const StyledSidebar = styled.aside<{ menuOpen: boolean }>`
	display: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		padding: 50px 10px;
		width: min(75vw, 400px);
		height: 100vh;
		outline: 0;
		background-color: ${({ theme }) => theme.navBackground};
		box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
		z-index: 9;
		transform: translateX(${({ menuOpen }) => (menuOpen ? 0 : 100)}vw);
		visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-direction: column;
		color: ${({ theme }) => theme.grey};
		text-align: center;
	}

	ol {
		padding: 0;
		margin: 0;
		list-style: none;
		width: 100%;

		li {
			position: relative;
			margin: 0 auto 20px;
			counter-increment: item 1;

			@media (max-width: 600px) {
				margin: 0 auto 10px;
			}

			&:before {
				content: '0' counter(item) '.';
				display: block;
				margin-bottom: 5px;
				color: ${({ theme }) => theme.secondaryColor};
			}
		}

		button {
			background: transparent;
			border: none;
			display: inline-block;
			text-decoration: none;
			text-decoration-skip-ink: auto;
			color: inherit;
			position: relative;
			transition: ${({ theme }) => theme.transition};
			&:hover,
			&:active,
			&:focus {
				color: ${({ theme }) => theme.secondaryColor};
				outline: 0;
			}
			width: 100%;
			padding: 3px 20px 20px;
		}
	}

	.resume-link {
		padding: 18px 50px;
		margin: 10% auto 0;
		width: max-content;
	}
`;
