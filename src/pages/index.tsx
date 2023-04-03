import { useState, useEffect } from 'react';
import Head from 'next/head';

// COMPONENTS
import { Loader } from 'components/Loader';
import { Navigation } from 'components/Navigation';
import { IconGitHub } from 'components/Icons/Github';
import { IconLinkedin } from 'components/Icons/LinkedIn';
import { IconFacebook } from 'components/Icons/Facebook';

// MODELS
import { HomeInterface } from 'pages/models/home';

// STYLES
import { StyledLayout, StyledBodyContainer, StyledRightFloatWrapper, StyledLeftFloatWrapper } from 'pages/Styles';
import { Home } from 'components/Home';

const App = ({ toggleTheme, isDarkTheme, locale }: HomeInterface) => {
	const [loadingStatus, setLoadingStatus] = useState('PENDING');
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		// setLoadingStatus('LOADING');
		// TMP
		setLoadingStatus('DONE');

		const timeoutRest = setTimeout(() => {
			setIsAnimated(true);
		}, 1100);

		return () => {
			clearTimeout(timeoutRest);
		};
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

						<StyledRightFloatWrapper animated={isAnimated}>
							<a href="mailto:p.nowecki@gmail.com">p.nowecki@gmail.com</a>
						</StyledRightFloatWrapper>

						<StyledLeftFloatWrapper animated={isAnimated}>
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
						</StyledBodyContainer>
					</>
				)}
			</StyledLayout>
		</>
	);
};

export default App;
