import styled from 'styled-components';

// SECTION TITLE
export const StyledSectionTitleContainer = styled.div`
	width: 100%;
	margin: 100px 0px 40px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const StyledSectionTitleLine = styled.div`
	height: 1px;
	margin-left: 20px;
	background-color: ${({ theme }) => theme.lightNavy};

	width: 100%;
	max-width: 300px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		min-width: 300px;
	}
`;

export const StyledSectionTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
	}
`;

export const StyledCounter = styled.span`
	margin-right: 10px;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ theme }) => theme.fontMono};
	font-size: clamp(16px, 3vw, 20px);
	font-weight: 400;
	padding-bottom: 3px;
`;

export const StyledTitle = styled.span`
	font-weight: ${({ theme }) => theme.semiBold};
	font-size: clamp(26px, 5vw, 32px);
	white-space: nowrap;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	height: 100%;
	padding-top: 5px;
`;
