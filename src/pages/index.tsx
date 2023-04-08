import { useState, useEffect } from 'react';
import Head from 'next/head';

// COMPONENTS
import { Loader } from 'components/Loader';
import { Navigation } from 'components/Navigation';
import { Home, AboutMe, Jobs, Projects, Footer, Contact } from 'components/sections';
import { Icon } from 'components/Icons';

// MODELS
import { HomeInterface } from 'components/models/home';

// STYLES
import { StyledLayout, StyledBodyContainer, StyledRightFloatWrapper, StyledLeftFloatWrapper } from 'styles/Styles';

const App = ({ toggleTheme, isDarkTheme, locale }: HomeInterface) => {
	const [loadingStatus, setLoadingStatus] = useState('PENDING');
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [floatedIsVisible, setFloatedIsVisible] = useState(false);

	useEffect(() => {
		setLoadingStatus('LOADING');
		// TMP OFF INITIAL LOADER
		// setLoadingStatus('DONE');
		const timeout = setTimeout(() => setFloatedIsVisible(true), 700);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<Head>
				<title>Paweł Nowecki</title>
				<meta name="description" content="Frontend Developer Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StyledLayout>
				{loadingStatus === 'LOADING' && <Loader finishLoading={() => setLoadingStatus('DONE')} />}
				{loadingStatus === 'DONE' && (
					<>
						<Navigation
							toggleTheme={toggleTheme}
							isDarkTheme={isDarkTheme}
							menuIsOpen={menuIsOpen}
							setMenuIsOpen={setMenuIsOpen}
						/>

						<StyledRightFloatWrapper floatedIsVisible={floatedIsVisible}>
							<a href="mailto:p.nowecki@gmail.com">p.nowecki@gmail.com</a>
						</StyledRightFloatWrapper>

						<StyledLeftFloatWrapper floatedIsVisible={floatedIsVisible}>
							<div>
								<a href="https://github.com/Pawel-dev5" target="_blank">
									<Icon name="GitHub" />
								</a>
								<a href="https://www.linkedin.com/in/pawe%C5%82-nowecki/" target="_blank">
									<Icon name="LinkedIn" />
								</a>
								<a href="https://www.facebook.com/p.nowecki" target="_blank">
									<Icon name="Facebook" />
								</a>
							</div>
						</StyledLeftFloatWrapper>

						<StyledBodyContainer menuIsOpen={menuIsOpen}>
							<Home locale={locale} />
							<AboutMe locale={locale} />
							<Jobs locale={locale} />
							<Projects locale={locale} />
							<Contact locale={locale} />
							<Footer />
						</StyledBodyContainer>
					</>
				)}
			</StyledLayout>
		</>
	);
};

export default App;
