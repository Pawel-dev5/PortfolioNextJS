import { useState, useEffect } from 'react';
import Head from 'next/head';

// COMPONENTS
import { Loader } from 'components/Loader';
import { Navigation } from 'components/Navigation';
import { IconGitHub, IconLinkedin, IconFacebook } from 'components/Icons';
import { Home, AboutMe, Jobs } from 'components/sections';

// MODELS
import { HomeInterface } from 'pages/models/home';

// STYLES
import { StyledLayout, StyledBodyContainer, StyledRightFloatWrapper, StyledLeftFloatWrapper } from 'pages/Styles';

const App = ({ toggleTheme, isDarkTheme, locale }: HomeInterface) => {
	const [loadingStatus, setLoadingStatus] = useState('PENDING');
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [floatedIsVisible, setFloatedIsVisible] = useState(false);

	useEffect(() => {
		// setLoadingStatus('LOADING');
		// TMP
		setLoadingStatus('DONE');
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
									<IconGitHub />
								</a>
								<a href="https://www.linkedin.com/in/pawe%C5%82-nowecki/" target="_blank">
									<IconLinkedin />
								</a>
								<a href="https://www.facebook.com/p.nowecki" target="_blank">
									<IconFacebook />
								</a>
							</div>
						</StyledLeftFloatWrapper>

						<StyledBodyContainer menuIsOpen={menuIsOpen}>
							<Home locale={locale} />
							<AboutMe locale={locale} />
							<Jobs locale={locale} />
						</StyledBodyContainer>
					</>
				)}
			</StyledLayout>
		</>
	);
};

export default App;
