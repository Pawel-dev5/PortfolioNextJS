import styled, { css } from 'styled-components';

// MODELS
import { CompanyLinkTypes } from 'components/common/models/views';

// SECTION TITLE
export const StyledSectionTitleContainer = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 250px 0px 40px;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 200px 0px 40px;
	}
`;

export const StyledSectionTitleLine = styled.div`
	height: 1px;
	margin-left: 20px;
	background-color: ${({ theme }) => theme.lightestNavy};

	width: 100%;
	max-width: 300px;
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		min-width: 350px;
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
	font-weight: ${({ theme }) => theme.bold};
	font-size: clamp(24px, 5vw, 32px);
	white-space: nowrap;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	height: 100%;
	padding-top: 5px;
`;

// COMPANY
export const StyledCompany = styled.a<{ variant: CompanyLinkTypes }>`
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
		bottom: 4px;
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

	${({ variant }) => {
		switch (variant) {
			case 'BIG':
				return css`
					font-size: clamp(16px, 5vw, 23px);
					margin-bottom: -18px;
					bottom: 6px;
				`;
			default:
				return null;
		}
	}}
`;
