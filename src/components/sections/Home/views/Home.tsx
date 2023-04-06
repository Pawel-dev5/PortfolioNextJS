import { useEffect, useState } from 'react';

// I18N
import { homeContent } from 'locales/home';

// STYLES
import {
	StyledHomeContainer,
	StyledHomeTitle,
	StyledHomeName,
	StyledHomeHeadline,
	StyledHomeDescription,
	StyledButton,
} from 'components/sections/Home/views/Styles';
import { CompanyLink } from 'components/common';

export const Home = ({ locale }: { locale: string }) => {
	const { title, name, headline, description, company, button } = homeContent[locale];
	const [isVisible, setIsVisible] = useState(false);
	const startDuration = 500;

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 700);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<StyledHomeContainer>
			<StyledHomeTitle duration={isVisible ? `${startDuration}ms` : null}>{title}</StyledHomeTitle>
			<StyledHomeName duration={isVisible ? `${startDuration * 2}ms` : null}>{name}</StyledHomeName>
			<StyledHomeHeadline duration={isVisible ? `${startDuration * 3}ms` : null}>{headline}</StyledHomeHeadline>

			<StyledHomeDescription duration={isVisible ? `${startDuration * 4}ms` : null}>
				<span>{description}</span>
				<CompanyLink company={company} url="https://10a.io/" />
			</StyledHomeDescription>

			<StyledButton duration={isVisible ? `${startDuration * 5}ms` : null}>{button}</StyledButton>
		</StyledHomeContainer>
	);
};
