// I18N
import { projectsContent } from 'locales/projects';

// COMPONENTS
import { Icon } from 'components/Icons';

// STYLES
import {
	StyledProject,
	StyledProjectsGrid,
	StyledImageWrapper,
	StyledTitle,
	StyledOverline,
	StyledDescription,
	StyledImage,
	StyledContent,
	StyledStackList,
	StyledLinks,
} from 'components/sections/Projects/sections/Styles';

export const Featured = ({ locale }: { locale: string }) => {
	const { featured } = projectsContent[locale];

	return (
		<StyledProjectsGrid>
			{featured?.map(({ id, title, description, stack, links, imageUrl }, featureIndex) => (
				<StyledProject key={id}>
					<StyledContent odd={featureIndex % 2 === 0}>
						<StyledOverline>Featured Project</StyledOverline>
						<StyledTitle>{title}</StyledTitle>
						<StyledDescription>{description}</StyledDescription>

						{stack && stack?.length > 0 && (
							<StyledStackList odd={featureIndex % 2 === 0}>
								{stack?.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</StyledStackList>
						)}

						{links && links?.length > 0 && (
							<StyledLinks odd={featureIndex % 2 === 0}>
								{links?.map(({ id: linkId, url, type }) => (
									<>
										{url && (
											<a key={linkId} href={url} target="_blank" aria-label={`${type} Link`}>
												<Icon name={type} />
											</a>
										)}
									</>
								))}
							</StyledLinks>
						)}
					</StyledContent>

					{imageUrl && (
						<StyledImageWrapper odd={featureIndex % 2 === 0} jpg={imageUrl?.includes('.jpg') || imageUrl?.includes('.jpeg')}>
							<StyledImage src={`/assets/${imageUrl}`} alt={`Featured-project-${imageUrl}`} layout="fill" />
						</StyledImageWrapper>
					)}
				</StyledProject>
			))}
		</StyledProjectsGrid>
	);
};
