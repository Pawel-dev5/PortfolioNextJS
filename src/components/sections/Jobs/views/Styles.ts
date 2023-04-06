import styled from 'styled-components';

export const StyledJobsConteiner = styled.section`
	min-height: 300px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 300px;
	}
`;

export const StyledTabsWrapper = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
	}
`;

export const StyledTabList = styled.div`
	position: relative;
	z-index: 3;
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;
	padding-bottom: 10px;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: flex;
		overflow-x: auto;
		width: calc(100% + 50px);
		padding-left: 25px;
		margin-left: -25px;
		margin-bottom: 30px;
	}
`;

export const StyledTabButton = styled.button<{ isActive: boolean }>`
	cursor: pointer;
	border: 0px;
	border-radius: 0px;
	display: flex;
	align-items: center;
	width: 100%;
	min-width: 170px;
	height: 42px;
	padding: 0 20px 2px;
	border-left: 2px solid ${({ theme }) => theme.lightestNavy};
	background-color: ${({ isActive, theme }) => (isActive ? theme.lightestNavy : 'transparent')};
	color: ${({ isActive, theme }) => (isActive ? theme.secondaryColor : theme.textSecond)};

	font-family: ${({ theme }) => theme.fontMono};
	font-size: 13px;
	text-align: left;
	white-space: nowrap;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 15px 2px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 120px;
		padding: 0 15px;
		border-left: 0;
		border-bottom: 2px solid ${({ theme }) => theme.lightestNavy};
		text-align: center;
	}

	&:hover {
		background-color: ${({ theme }) => theme.lightestNavy};
		color: ${({ theme }) => theme.secondaryColor};
		outline: 0;
	}
`;

export const StyledHighlight = styled.div<{ activeTabId: number }>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 2px;
	height: 42px;
	border-radius: ${({ theme }) => theme.radius};
	background: ${({ theme }) => theme.secondaryColor};
	transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
	transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition-delay: 0.1s;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		top: 40px;
		bottom: 0;
		width: 100%;
		max-width: 120px;
		height: 2px;
		margin-left: 25px;
		transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
	}
`;
