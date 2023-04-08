import { useRef } from 'react';
import { useRouter } from 'next/router';

// COMPONENTS
import { ResumeButton } from 'components/common';

// STYLES
import { StyledMenu, StyledHamburgerButton, StyledSidebar } from 'components/Navigation/sections/Styles';

// UTILS
import { navLinks } from 'components/Navigation/constans';
import { useOnClickOutside } from 'helpers/useOnClickOutside';
import { scrollToId } from 'utils';

// MODELS
import { NavigationInterface } from 'components/Navigation/models/views';
import { StyledLink } from '../views/Styles';

const Menu = ({ toggleTheme, isDarkTheme, menuIsOpen, setMenuIsOpen }: NavigationInterface) => {
	const { asPath, locale } = useRouter();

	const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, () => setMenuIsOpen(false));

	return (
		<StyledMenu>
			<div ref={wrapperRef as never}>
				<StyledHamburgerButton onClick={toggleMenu} menuOpen={menuIsOpen} aria-label="Menu">
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar menuOpen={menuIsOpen} aria-hidden={!menuIsOpen} tabIndex={menuIsOpen ? 1 : -1}>
					<nav>
						<ol>
							{navLinks?.map(({ url, name }, i) => (
								<li key={i}>
									<button onClick={() => scrollToId(url)} type="button">
										{name}
									</button>
								</li>
							))}
						</ol>

						<StyledLink href={asPath} locale={locale === 'pl' ? 'en' : 'pl'} withoutCounter>
							{locale === 'pl' ? 'EN' : 'PL'}
						</StyledLink>

						<StyledLink
							as="button"
							type="button"
							onClick={toggleTheme}
							withoutCounter
							aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'}
							role="img"
						>
							{isDarkTheme ? <>🌞</> : <>🌜</>}
						</StyledLink>

						<ResumeButton customMargin="30px 0 0" />
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	);
};

export default Menu;
