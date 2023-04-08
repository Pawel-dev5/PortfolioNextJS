import { useEffect, useState } from 'react';

// COMPONENTS
import { Icon } from 'components/Icons';

// STYLES
import {
	StyledProject,
	StyledGridLinks,
	StyledGridTop,
	StyledTitle,
	StyledGridDescription,
	StyledProjectInner,
	StyledGridStackList,
} from 'components/sections/Projects/sections/StylesGrid';

// MODELS
import { GridItemInterface } from 'components/sections/Projects/models/items';

export const GridItem = ({ projectIndex, links, title, description, stack, projectsToShow }: GridItemInterface) => {
	const [isVisible, setIsvisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsvisible(true), 100 * projectIndex);
		return () => clearTimeout(timeout);
	}, [projectsToShow]);

	if (!isVisible) return null;

	return (
		<StyledProject key={projectIndex} duration={isVisible ? '500ms' : undefined}>
			<StyledProjectInner>
				<div>
					<StyledGridTop>
						<Icon name="Folder" />

						{links && links?.length > 0 && (
							<StyledGridLinks>
								{links?.map(({ id: linkId, url, type }) => (
									<>
										{url && (
											<a key={linkId} href={url} target="_blank" aria-label={`${type} Link`}>
												<Icon name={type} />
											</a>
										)}
									</>
								))}
							</StyledGridLinks>
						)}
					</StyledGridTop>

					<StyledTitle>{title}</StyledTitle>
					<StyledGridDescription>{description}</StyledGridDescription>
				</div>

				{stack && stack?.length > 0 && (
					<StyledGridStackList>
						{stack?.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</StyledGridStackList>
				)}
			</StyledProjectInner>
		</StyledProject>
	);
};
