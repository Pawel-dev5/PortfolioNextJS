import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

// I18N
import { newsContent } from 'translations/content';

// COMPONENTS
import { Loader } from 'components/Loader';

// MODELS
import { HomeInterface } from 'pages/models/home';

// STYLES
import { StyledLayout } from 'pages/Styles';

const Home = ({ toggleTheme, isDarkTheme, locale }: HomeInterface) => {
	const { asPath } = useRouter();
	const { title } = newsContent[locale];

	const [loadingStatus, setLoadingStatus] = useState('PENDING');

	useEffect(() => {
		setLoadingStatus('LOADING');
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
						<span>Current Language: </span>
						<span
							style={{
								borderRadius: '3px',
								backgroundColor: 'blue',
								color: 'white',
								padding: '2px',
							}}
						>
							{locale}
						</span>
						<div>
							<Link href={asPath} locale="pl">
								pl
							</Link>

							<Link href={asPath} locale="en">
								en
							</Link>
						</div>
						<span
							style={{
								borderRadius: '3px',
								backgroundColor: 'blue',
								color: 'white',
								padding: '2px',
							}}
						>
							{title}
						</span>

						<button onClick={toggleTheme} type="button">
							<span aria-label={isDarkTheme ? 'Light mode' : 'Dark mode'} role="img">
								{isDarkTheme ? <>🌞</> : <>🌜</>}
							</span>
						</button>
					</>
				)}
			</StyledLayout>
		</>
	);
};

export default Home;
