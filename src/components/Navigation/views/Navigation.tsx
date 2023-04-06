import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// CONSTANS
import { navLinks } from 'components/Navigation/constans';

// COMPONENTS
import { IconLogo } from 'components/Icons/IconLogo';
import Menu from 'components/Navigation/sections/Menu';

// STYLES
import {
	StyledNavigationContainer,
	StyledElementsWrapper,
	StyledLinks,
	StyledLink,
	StyledIconWrapper,
} from 'components/Navigation/views/Styles';

// MODELS
import { NavigationInterface } from 'components/Navigation/models/views';

export const Navigation = (props: NavigationInterface) => {
	const { asPath, locale } = useRouter();
	const { toggleTheme, isDarkTheme } = props;

	const [scrolledToTop, setScrolledToTop] = useState(true);

	const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToId = (id: string) => {
		const element = document.getElementById(id);
		if (element) window.scrollTo(0, element.offsetTop - 50);
	};

	return (
		<StyledNavigationContainer scrolledToTop={scrolledToTop}>
			<StyledIconWrapper>
				<IconLogo />
			</StyledIconWrapper>

			<StyledElementsWrapper>
				<StyledLinks>
					<ol>
						{navLinks?.map(({ url, name }, i) => (
							<StyledLink key={i} duration={`${(i + 1) * 500}ms`} as="button" type="button" onClick={() => scrollToId(url)}>
								{name}
							</StyledLink>
						))}

						<StyledLink
							href={asPath}
							locale={locale === 'pl' ? 'en' : 'pl'}
							withoutCounter
							duration={`${navLinks.length * 500}ms`}
						>
							{locale === 'pl' ? 'EN' : 'PL'}
						</StyledLink>

						<StyledLink
							as="button"
							type="button"
							onClick={toggleTheme}
							withoutCounter
							duration={`${navLinks.length * 510}ms`}
							aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'}
							role="img"
						>
							{isDarkTheme ? <>🌞</> : <>🌜</>}
						</StyledLink>

						<StyledLink
							href="https://drive.google.com/file/d/1lxdlStYPmAqSzIvYhrrF1oxdPFWg7S0C/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							withoutCounter
							resume
							duration={`${navLinks.length * 530}ms`}
						>
							Resume
						</StyledLink>
					</ol>
				</StyledLinks>
			</StyledElementsWrapper>

			<Menu {...props} />
		</StyledNavigationContainer>
	);
};
