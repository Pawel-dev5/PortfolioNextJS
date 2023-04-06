import styled from 'styled-components';

export const StyledEmailLink = styled.a`
	color: ${({ theme }) => theme.secondaryColor};
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.secondaryColor};
	border-radius: ${({ theme }) => theme.radius};
	padding: 1.25rem 1.75rem;
	font-size: 14px;
	font-family: ${({ theme }) => theme.fontMono};
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	margin: 50px auto;
	transition: ${({ theme }) => theme.transition};

	&:hover {
		background-color: ${({ theme }) => theme.greenHover};
		outline: none;
	}
`;

export const StyledTitle = styled.h2`
	display: block;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ theme }) => theme.fontMono};
	font-weight: 400;
	font-size: clamp(40px, 5vw, 60px);
`;

export const StyledDescription = styled.p`
	color: ${({ theme }) => theme.textSecond};
	font-size: 20px;
	line-height: 1.3;
`;

export const StyledContactSection = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin: 50px auto 120px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0 auto 50px;
	}
`;
