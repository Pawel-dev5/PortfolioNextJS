import styled from 'styled-components';

export const StyledLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	min-width: 100%;
	min-height: 100%;
	background-color: ${({ theme }) => theme.body};
	z-index: 99;
`;

export const StyledLogoWrapper = styled.div<{ isMounted: boolean }>`
	width: max-content;
	max-width: 100px;
	transition: ${({ theme }) => theme.transition};
	opacity: ${({ isMounted }) => (isMounted ? 1 : 0)};

	svg {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		fill: none;
		user-select: none;
		color: ${({ theme }) => theme.secondaryColor};
		#B {
			opacity: 0;
		}
	}
`;
