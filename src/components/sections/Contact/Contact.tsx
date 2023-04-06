// I18N
import { contactContent } from 'locales/contact';

// COMPONENTS
import { SectionTitle } from 'components/common';

// STYLES
import { StyledContactSection, StyledTitle, StyledEmailLink, StyledDescription } from 'components/sections/Contact/Styles';

export const Contact = ({ locale }: { locale: string }) => {
	const { sectionTitle, title, description, cta } = contactContent[locale];

	return (
		<section>
			<SectionTitle counter={4} title={sectionTitle} id="contact" />

			<StyledContactSection>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{description}</StyledDescription>
				<StyledEmailLink href="mailto:p.nowecki@gmail.com">{cta}</StyledEmailLink>
			</StyledContactSection>
		</section>
	);
};
