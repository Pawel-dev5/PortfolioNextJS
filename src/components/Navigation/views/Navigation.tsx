import { useEffect, useState } from 'react';
import Link from 'next/link';
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
		const element = document?.getElementById(id);
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
							<StyledLink key={i} duration={`${(i + 1) * 500}ms`}>
								<button onClick={() => scrollToId(url)} type="button">
									{name}
								</button>
							</StyledLink>
						))}

						<StyledLink withoutCounter duration={`${navLinks.length * 500}ms`}>
							<Link href={asPath} locale={locale === 'pl' ? 'en' : 'pl'}>
								{locale === 'pl' ? 'EN' : 'PL'}
							</Link>
						</StyledLink>

						<StyledLink
							as="button"
							type="button"
							onClick={toggleTheme}
							withoutCounter
							duration={`${navLinks.length * 510}ms`}
						>
							<span aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'} role="img">
								{isDarkTheme ? <>🌞</> : <>🌜</>}
							</span>
						</StyledLink>

						<StyledLink withoutCounter resume duration={`${navLinks.length * 530}ms`}>
							<a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
								Resume
							</a>
						</StyledLink>
					</ol>
				</StyledLinks>
			</StyledElementsWrapper>

			<Menu {...props} />
		</StyledNavigationContainer>
	);
};
