import styled, { css } from 'styled-components';
import { fadeUp } from 'theme/animations';

export const StyledHomeContainer = styled.div<{ animated: boolean }>`
	/* opacity: 0; */

	animation-name: ${fadeUp};
	animation-duration: 5s;
	animation-delay: 1s;

	${({ animated }) =>
		animated &&
		css`
			/* opacity: 1; */
		`}
`;
