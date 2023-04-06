// STYLES
import {
	StyledSectionTitleLine,
	StyledSectionTitleContainer,
	StyledSectionTitleWrapper,
	StyledCounter,
	StyledTitle,
} from 'components/common/views/Styles';

// MODELS
import { SectionTitleInterface } from 'components/common/models/views';

export const SectionTitle = ({ counter, title, id }: SectionTitleInterface) => (
	<StyledSectionTitleContainer id={id}>
		<StyledCounter>0{counter}.</StyledCounter>

		<StyledSectionTitleWrapper>
			<StyledTitle>{title}</StyledTitle>

			<StyledSectionTitleLine />
		</StyledSectionTitleWrapper>
	</StyledSectionTitleContainer>
);
