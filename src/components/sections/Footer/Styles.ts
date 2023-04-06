import styled from 'styled-components';

export const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	min-height: 70px;
	padding: 15px;
	font-family: ${({ theme }) => theme.fontMono};

	> a {
		text-align: center;
		text-decoration: none;
		color: ${({ theme }) => theme.navText};
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 12px;
		line-height: 1;
		padding: 10px;

		:hover {
			color: ${({ theme }) => theme.secondaryColor};
			transition: ${({ theme }) => theme.transition};
		}
	}
`;
