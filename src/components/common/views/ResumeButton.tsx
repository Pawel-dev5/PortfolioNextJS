import { StyledLink } from 'components/Navigation/views/Styles';

// CONSTANS
import { navLinks } from 'components/Navigation/constans';

export const ResumeButton = ({ customMargin }: { customMargin?: string }) => (
	<StyledLink
		href="https://drive.google.com/file/d/1ZT9ErhQNIX9IsQtoZJ8KN3W_XX_bDKs0/view?usp=share_link"
		target="_blank"
		rel="noopener noreferrer"
		withoutCounter
		resume
		duration={`${navLinks.length * 530}ms`}
		customMargin={customMargin}
	>
		Resume
	</StyledLink>
);
