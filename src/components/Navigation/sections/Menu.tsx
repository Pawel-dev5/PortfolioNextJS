import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// STYLES
import { StyledMenu, StyledHamburgerButton, StyledSidebar } from 'components/Navigation/sections/Styles';

// UTILS
import { navLinks } from 'components/Navigation/constans';
import { KEY_CODES } from 'utils';
import { useOnClickOutside } from 'helpers/useOnClickOutside';

// MODELS
import { NavigationInterface } from 'components/Navigation/models/views';

const Menu = ({ toggleTheme, isDarkTheme, menuIsOpen, setMenuIsOpen }: NavigationInterface) => {
	const { asPath, locale } = useRouter();

	const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

	const buttonRef = useRef(null);
	const navRef = useRef(null);

	let menuFocusables: any;
	let firstFocusableEl: any;
	let lastFocusableEl: any;

	const setFocusables = () => {
		menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
		// eslint-disable-next-line prefer-destructuring
		firstFocusableEl = menuFocusables[0];
		lastFocusableEl = menuFocusables[menuFocusables.length - 1];
	};

	const handleBackwardTab = (e: { preventDefault: () => void }) => {
		if (document.activeElement === firstFocusableEl) {
			e.preventDefault();
			lastFocusableEl.focus();
		}
	};

	const handleForwardTab = (e: { preventDefault: () => void }) => {
		if (document.activeElement === lastFocusableEl) {
			e.preventDefault();
			firstFocusableEl.focus();
		}
	};

	const onKeyDown = (e: { key?: any; preventDefault: any; shiftKey?: any }) => {
		switch (e.key) {
			case KEY_CODES.ESCAPE:
			case KEY_CODES.ESCAPE_IE11: {
				setMenuIsOpen(false);
				break;
			}

			case KEY_CODES.TAB: {
				if (menuFocusables && menuFocusables.length === 1) {
					e.preventDefault();
					break;
				}
				if (e.shiftKey) {
					handleBackwardTab(e);
				} else {
					handleForwardTab(e);
				}
				break;
			}

			default: {
				break;
			}
		}
	};

	const onResize = (e: { currentTarget: { innerWidth: number } }) => {
		if (e.currentTarget.innerWidth > 768) {
			setMenuIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		window.addEventListener('resize', onResize);

		setFocusables();

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, () => setMenuIsOpen(false));

	return (
		<StyledMenu>
			<div ref={wrapperRef as never}>
				<StyledHamburgerButton onClick={toggleMenu} menuOpen={menuIsOpen} ref={buttonRef} aria-label="Menu">
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar menuOpen={menuIsOpen} aria-hidden={!menuIsOpen} tabIndex={menuIsOpen ? 1 : -1}>
					<nav ref={navRef}>
						{navLinks && (
							<ol>
								{navLinks.map(({ url, name }, i) => (
									<li key={i}>
										<Link href={url} onClick={() => setMenuIsOpen(false)}>
											{name}
										</Link>
									</li>
								))}
							</ol>
						)}

						<div>
							<Link href={asPath} locale={locale === 'pl' ? 'en' : 'pl'}>
								{locale === 'pl' ? 'en' : 'pl'}
							</Link>
						</div>
						<button onClick={toggleTheme} type="button">
							<span aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'} role="img">
								{isDarkTheme ? <>🌞</> : <>🌜</>}
							</span>
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
