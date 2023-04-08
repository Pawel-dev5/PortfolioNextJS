import styled from 'styled-components';

// TAB PANELS
export const StyledTabPanels = styled.div`
	position: relative;
	width: 100%;
	margin-left: 20px;

	@media (max-width: 600px) {
		margin-left: 0;
	}
`;
export const StyledTabPanel = styled.div`
	width: 100%;
	height: auto;
	padding: 0 5px;

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		font-size: 19px;

		li {
			position: relative;
			padding-left: 30px;
			margin-bottom: 10px;

			&:before {
				content: '▹';
				position: absolute;
				left: 0;
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}

	h3 {
		margin-bottom: 2px;
		font-size: 24px;
		font-weight: 600;
		line-height: 1.3;

		.company {
			color: ${({ theme }) => theme.secondaryColor};
			margin-left: 10px;
			text-decoration: none;
		}
	}

	.range {
		margin-bottom: 25px;
		color: ${({ theme }) => theme.grey};
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 13px;
	}
`;
