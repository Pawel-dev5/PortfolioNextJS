import styled, { css } from 'styled-components';
import Image from 'next/image';

// ------- START FEATURES ----------

export const StyledImage = styled(Image)`
	border-radius: 4px;
`;

export const StyledProjectsGrid = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	a {
		position: relative;
		z-index: 1;
	}
`;

export const StyledContent = styled.div<{ odd: boolean }>`
	position: relative;
	grid-column: 1 / 7;
	grid-row: 1 / -1;

	> * {
		text-align: left;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-column: 1 / 9;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		grid-column: 1 / -1;
		padding: 40px 40px 30px;
		z-index: 5;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 30px 25px 20px;
	}

	${({ odd }) =>
		odd &&
		css`
			grid-column: 7 / -1;
			> * {
				text-align: right;
			}
			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				grid-column: 5 / -1;
			}
			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				grid-column: 1 / -1;
				padding: 40px 40px 30px;
				text-align: left;
			}
			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				padding: 25px 25px 20px;
			}
		`}
`;

export const StyledStackList = styled.div<{ odd: boolean }>`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 2;
	margin: 25px 0 10px;
	padding: 0;
	list-style: none;

	li {
		margin: 0 20px 5px 0;
		color: ${({ theme }) => theme.navText};
		font-family: ${({ theme }) => theme.fontMono};
		font-size: 13px;
		white-space: nowrap;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 10px 0;

		li {
			margin: 0 10px 5px 0;
			color: ${({ theme }) => theme.text};
		}
	}

	${({ odd }) =>
		odd &&
		css`
			justify-content: flex-end;

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				justify-content: flex-start;
			}

			li {
				margin: 0 0 5px 20px;

				@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
					margin: 0 10px 5px 0;
				}
			}
		`}
`;

export const StyledLinks = styled.div<{ odd: boolean }>`
	display: flex;
	align-items: center;
	position: relative;
	margin-top: 10px;
	margin-left: -10px;
	color: ${({ theme }) => theme.text};

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;

		svg {
			width: 20px;
			height: 20px;
			margin-top: -4px;
			color: ${({ theme }) => theme.textSecond};
		}
	}

	${({ odd }) =>
		odd &&
		css`
			justify-content: flex-end;
			margin-left: 0;
			margin-right: -10px;

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				justify-content: flex-start;
				margin-left: -10px;
				margin-right: 0;
			}
		`}
`;

export const StyledProject = styled.li`
	position: relative;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
		transition: ${({ theme }) => theme.transition};

		&:hover,
		&:focus {
			box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
		}
	}

	&:not(:last-of-type) {
		margin-bottom: 100px;

		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-bottom: 70px;
		}

		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-bottom: 30px;
		}
	}
`;

export const StyledImageWrapper = styled.div<{ odd: boolean }>`
	box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
	transition: ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
	}
	grid-column: 6 / -1;
	grid-row: 1 / -1;
	position: relative;
	z-index: 1;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-column: 1 / -1;
		height: 100%;
		opacity: 0.25;
	}
	width: 100%;
	height: 100%;
	min-height: 300px;

	${({ odd }) =>
		odd &&
		css`
			grid-column: 1 / 8;

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				grid-column: 1 / -1;
			}
		`}
`;

export const StyledTitle = styled.h3`
	color: ${({ theme }) => theme.text};
	font-size: clamp(24px, 5vw, 28px);

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0 0 20px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		color: #e6f1ff;
	}
`;

export const StyledOverline = styled.p`
	margin: 10px 0;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ theme }) => theme.fontMono};
	font-size: 13px;
	font-weight: 400;
`;

export const StyledDescription = styled.p`
	box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
	transition: ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
	}
	position: relative;
	z-index: 2;
	padding: 25px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.lightNavy};
	color: ${({ theme }) => theme.textSecond};
	font-size: 18px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 20px 0;
		background-color: transparent;
		box-shadow: none;

		&:hover {
			box-shadow: none;
		}
	}

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: ${({ theme }) => theme.transition};
		color: ${({ theme }) => theme.secondaryColor};

		&:hover,
		&:focus,
		&:active {
			color: ${({ theme }) => theme.secondaryColor};
			outline: 0;
			&:after {
				width: 100%;
			}
			& > * {
				color: ${({ theme }) => theme.secondaryColor} !important;
				transition: ${({ theme }) => theme.transition};
			}
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			position: relative;
			bottom: 0.37em;
			background-color: ${({ theme }) => theme.secondaryColor};
			transition: ${({ theme }) => theme.transition};
			opacity: 0.5;
		}
	}

	strong {
		color: #e6f1ff;
		font-weight: normal;
	}
`;
// ------- END FEATURES ----------
