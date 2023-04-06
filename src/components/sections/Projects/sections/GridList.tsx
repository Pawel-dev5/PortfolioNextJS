import { useState } from 'react';

// I18N
import { projectsContent } from 'locales/projects';

// COMPONENTS
import { Icon } from 'components/Icons';

// STYLES
import {
	StyledProject,
	StyledProjectsSection,
	StyledGridLinks,
	StyledGridTop,
	StyledTitle,
	StyledGridDescription,
	StyledProjectInner,
	StyledGridStackList,
	StyledGridMoreButton,
	StyledGridWrapper,
} from 'components/sections/Projects/sections/StylesGrid';

export const GridList = ({ locale }: { locale: string }) => {
	const { projects } = projectsContent[locale];
	const [showMore, setShowMore] = useState(false);
	const firstSix = projects.slice(0, 6);
	const projectsToShow = showMore ? projects : firstSix;

	return (
		<StyledProjectsSection>
			<StyledGridWrapper>
				{projectsToShow?.map(({ title, stack, links, description }, projectIndex) => (
					<StyledProject key={projectIndex}>
						<StyledProjectInner>
							<header>
								<StyledGridTop>
									<Icon name="Folder" />

									{links && links?.length > 0 && (
										<StyledGridLinks>
											{links?.map(({ id: linkId, url, type }) => (
												<a key={linkId} href={url} aria-label={`${type} Link`}>
													<Icon name={type} />
												</a>
											))}
										</StyledGridLinks>
									)}
								</StyledGridTop>

								<StyledTitle>{title}</StyledTitle>
								<StyledGridDescription>{description}</StyledGridDescription>
							</header>

							<footer>
								{stack && stack?.length > 0 && (
									<StyledGridStackList>
										{stack?.map((tech, index) => (
											<li key={index}>{tech}</li>
										))}
									</StyledGridStackList>
								)}
							</footer>
						</StyledProjectInner>
					</StyledProject>
				))}
			</StyledGridWrapper>

			<StyledGridMoreButton onClick={() => setShowMore(!showMore)} type="button">
				Show {showMore ? 'Less' : 'More'}
			</StyledGridMoreButton>
		</StyledProjectsSection>
	);
};
