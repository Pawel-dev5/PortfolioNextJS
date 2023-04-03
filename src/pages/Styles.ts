import styled, { css } from 'styled-components';

export const StyledLayout = styled.main`
	min-width: 100%;
	min-height: 100%;
`;

export const StyledBodyContainer = styled.div<{ menuIsOpen: boolean }>`
	margin-top: 100px;

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
