import { useState } from 'react';

// COMPONENTS
import { SectionTitle } from 'components/common';

// I18N
import { aboutMeContent } from 'translations/aboutMe';

// STYLES
import {
	StyledAboutMeContainer,
	StyledInnerWrapper,
	StyledStackList,
	StyledAboutMeFoto,
	StyledFotoWrapper,
	StyledFotoBackground,
	StyledStackHeader,
	StyledParagraph,
	StyledTextWrapper,
} from 'components/sections/About/views/Styles';

export const AboutMe = ({ locale }: { locale: string }) => {
	const { sectionTitle, paragraph1, paragraph2, paragraph3, paragraph4, stackList } = aboutMeContent[locale];
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseOver = () => setIsHovered(true);
	const handleMouseOut = () => setIsHovered(false);

	return (
		<StyledAboutMeContainer>
			<SectionTitle counter={1} title={sectionTitle} />

			<StyledInnerWrapper>
				<StyledTextWrapper>
					<StyledParagraph>{paragraph1}</StyledParagraph>
					<StyledParagraph>{paragraph2}</StyledParagraph>
					<StyledParagraph>{paragraph3}</StyledParagraph>
					<StyledStackHeader>{paragraph4}</StyledStackHeader>

					<StyledStackList>
						{stackList?.map((item) => (
							<li key={item}>{item}</li>
						))}
					</StyledStackList>
				</StyledTextWrapper>

				<StyledFotoWrapper>
					<StyledAboutMeFoto
						src="/assets/pawelnowecki.jpeg"
						alt="Paweł Nowecki"
						width={300}
						height={300}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					/>
					<StyledFotoBackground isHovered={isHovered} />
				</StyledFotoWrapper>
			</StyledInnerWrapper>
		</StyledAboutMeContainer>
	);
};
