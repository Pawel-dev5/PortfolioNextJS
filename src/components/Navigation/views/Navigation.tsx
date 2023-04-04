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

	const handleScroll = () => setScrolledToTop(window.pageYOffset < 50);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
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
							<StyledLink key={i} duration={`${(i + 1) * 500}ms`}>
								<Link href={url}>{name}</Link>
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
							{ResumeLink}
						</StyledLink>
					</ol>
				</StyledLinks>
			</StyledElementsWrapper>

			<Menu {...props} />
		</StyledNavigationContainer>
	);
};
