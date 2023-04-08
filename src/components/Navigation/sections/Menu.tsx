import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// STYLES
import { StyledMenu, StyledHamburgerButton, StyledSidebar } from 'components/Navigation/sections/Styles';

// UTILS
import { navLinks } from 'components/Navigation/constans';
import { useOnClickOutside } from 'helpers/useOnClickOutside';
import { scrollToId } from 'utils';

// MODELS
import { NavigationInterface } from 'components/Navigation/models/views';

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

						<Link href={asPath} locale={locale === 'pl' ? 'en' : 'pl'}>
							{locale === 'pl' ? 'en' : 'pl'}
						</Link>

						<button onClick={toggleTheme} type="button" aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'}>
							{isDarkTheme ? <>🌞</> : <>🌜</>}
						</button>

						<a href="/resume.pdf" className="resume-link">
							Resume
						</a>
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	);
};

export default Menu;
