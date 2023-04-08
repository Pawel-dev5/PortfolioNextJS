import { useState } from 'react';

// I18N
import { projectsContent } from 'locales/projects';

// COMPONENTS
import { GridItem } from 'components/sections/Projects/items';

// STYLES
import {
	StyledProjectsSection,
	StyledGridMoreButton,
	StyledGridWrapper,
} from 'components/sections/Projects/sections/StylesGrid';

export const GridList = ({ locale }: { locale: string }) => {
	const { projects, moreButton, lessButton } = projectsContent[locale];
	const [showMore, setShowMore] = useState(false);
	const firstSix = projects.slice(0, 6);
	const projectsToShow = showMore ? projects : firstSix;

	return (
		<StyledProjectsSection>
			<StyledGridWrapper>
				{projectsToShow?.map((item, projectIndex) => (
					<GridItem key={projectIndex} projectIndex={projectIndex} projectsToShow={projectsToShow} {...item} />
				))}
			</StyledGridWrapper>

			<StyledGridMoreButton onClick={() => setShowMore(!showMore)} type="button">
				{showMore ? lessButton : moreButton}
			</StyledGridMoreButton>
		</StyledProjectsSection>
	);
};
