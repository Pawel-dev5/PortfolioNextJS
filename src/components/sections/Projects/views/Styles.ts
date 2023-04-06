import styled from 'styled-components';

export const StyledSubTitle = styled.h1`
	margin-top: 250px;
	text-align: center;
	font-size: clamp(26px, 5vw, 32px);
	font-weight: ${({ theme }) => theme.bold};
`;
