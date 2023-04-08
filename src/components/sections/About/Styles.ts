import Image from 'next/image';
import styled, { css } from 'styled-components';

export const StyledAboutMeContainer = styled.section`
	margin-top: 300px;
`;

export const StyledTextWrapper = styled.div`
	max-width: 525px;
`;

export const StyledFotoWrapper = styled.div`
	position: relative;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0 auto;
		width: 300px;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 100px;
	}
`;

export const StyledFotoBackground = styled.div<{ isHovered: boolean }>`
	position: absolute;
	border: 2px solid ${({ theme }) => theme.secondaryColor};
	top: 20px;
	left: 20px;
	z-index: -1;
	display: block;
	position: absolute;
	width: 300px;
	height: 300px;
	border-radius: ${({ theme }) => theme.radius};
	transition: ${({ theme }) => theme.transition};

	${({ isHovered }) =>
		isHovered &&
		css`
			top: 15px;
			left: 15px;
			transform: scale(1.01);
			transition: ${({ theme }) => theme.transition};
		`}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		top: 70px;
	}
`;

export const StyledAboutMeFoto = styled(Image)`
	border-radius: ${({ theme }) => theme.radius};
	object-fit: cover;
`;

export const StyledParagraph = styled.p`
	line-height: 1.3;
	font-size: 20px;
	color: ${({ theme }) => theme.textSecond};
	margin: 0px 0px 15px;
`;

export const StyledStackHeader = styled(StyledParagraph)`
	color: ${({ theme }) => theme.secondaryColor};
`;

export const StyledInnerWrapper = styled.div`
	width: 100%;
	display: block;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: grid;
		grid-template-columns: 3fr 2fr;
		gap: 50px;
	}
`;

export const StyledStackList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, minmax(140px, 200px));
	gap: 0px 10px;
	padding-top: 10px;
	overflow: hidden;
	list-style: none;

	li {
		position: relative;
		margin-bottom: 10px;
		padding-left: 20px;
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 13px;

		::before {
			content: '▹';
			position: absolute;
			left: 0px;
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 14px;
			line-height: 12px;
		}
	}
`;
