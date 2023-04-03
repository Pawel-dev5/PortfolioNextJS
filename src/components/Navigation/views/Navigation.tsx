import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// COMPONENTS
import { IconLogo } from 'components/Icons/IconLogo';
import Menu from 'components/Navigation/sections/Menu';
import { navLinks } from 'config';

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
	const [isAnimatedMainNav, setIsAnimatedMainNav] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

	const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);

	useEffect(() => {
		const timeoutMainNav = setTimeout(() => {
			setIsAnimatedMainNav(true);
		}, 800);
		const timeoutRest = setTimeout(() => {
			setIsAnimated(true);
		}, 1100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			clearTimeout(timeoutMainNav);
			clearTimeout(timeoutRest);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const ResumeLink = (
		<a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
			Resume
		</a>
	);

	return (
		<StyledNavigationContainer scrolledToTop={scrolledToTop}>
			<StyledIconWrapper>
				<IconLogo />
			</StyledIconWrapper>

			<StyledElementsWrapper>
				<StyledLinks>
					<ol>
						{navLinks?.map(({ url, name }, i) => (
							<StyledLink key={i} animated={isAnimatedMainNav} delay={`${i * 100}ms`}>
								<Link href={url}>{name}</Link>
							</StyledLink>
						))}

						<StyledLink withoutCounter animated={isAnimated} delay={`${navLinks.length * 100}ms`}>
							<Link href={asPath} locale={locale === 'pl' ? 'en' : 'pl'}>
								{locale === 'pl' ? 'en' : 'pl'}
							</Link>
						</StyledLink>

						<StyledLink withoutCounter animated={isAnimated} delay={`${navLinks.length * 110}ms`}>
							<button onClick={toggleTheme} type="button">
								<span aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'} role="img">
									{isDarkTheme ? <>🌞</> : <>🌜</>}
								</span>
							</button>
						</StyledLink>

						<StyledLink withoutCounter animated={isAnimated} delay={`${navLinks.length * 130}ms`}>
							{ResumeLink}
						</StyledLink>
					</ol>
				</StyledLinks>
			</StyledElementsWrapper>

			<Menu {...props} />
		</StyledNavigationContainer>
	);
};
