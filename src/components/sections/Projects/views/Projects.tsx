// I18N
import { projectsContent } from 'locales/projects';

// COMPONENTS
import { SectionTitle } from 'components/common';
import { GridList, Featured } from 'components/sections/Projects/sections';

// STYLES
import { StyledSubTitle } from 'components/sections/Projects/views/Styles';

export const Projects = ({ locale }: { locale: string }) => {
	const { sectionTitle, subTitle } = projectsContent[locale];

	return (
		<section>
			<SectionTitle counter={3} title={sectionTitle} id="projects" />
			<Featured locale={locale} />
			<StyledSubTitle>{subTitle}</StyledSubTitle>
			<GridList locale={locale} />
		</section>
	);
};
