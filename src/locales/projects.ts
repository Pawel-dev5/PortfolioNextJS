import { ProjectsContentType } from 'locales/models/content';

export const projectsContent: ProjectsContentType = {
	en: {
		sectionTitle: 'Some Things I’ve Built',
		subTitle: 'Other Noteworthy Projects',
		moreButton: 'Show more',
		lessButton: 'Show less',
		featured: [
			{
				id: 1,
				title: 'cHow',
				description:
					'The cHow system is used to quickly and conveniently collect and analyze information from field employees about your own sales network, competitive networks and the environment. The system consists of a web application available in a browser and a mobile application with which it is currently working on implementing new functionalities or fixing current errors.',
				stack: ['Javascript', 'React Native', 'Redux', 'Firebase', 'Formik', 'I18n', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://play.google.com/store/apps/details?id=pl.chow.app&hl=pl&gl=US' },
				],
				imageUrl: 'chow.png',
			},
			{
				id: 2,
				title: 'Moje Suzuki',
				description:
					'Development of new functionalities in the My Suzuki application, thanks to which you can conveniently review the service history of your Suzuki, receive notifications about inspections and service and recall actions. And you can also contact your dealer, conveniently send an Assistance request or use your card in the Suzuki Service Program. Recently added functionality is sailing weather and watermark database for users of Suzuki Marine products.',
				stack: ['Javascript', 'React Native', 'Redux', 'Firebase', 'Formik', 'I18n', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://play.google.com/store/apps/details?id=com.mojesuzukiapp&hl=pl&gl=US' },
				],
				imageUrl: 'suzuki.png',
			},
			{
				id: 3,
				title: 'Restauracja nad zalewem',
				description:
					'Wordperss used as a headless CMS and using Advanced Custom Fildes and GraphQL connected to the frontend created using NextJS. Thanks to the combination of these technologies and maintaining all possible standards, the website achieved the maximum possible result in Google tests.',
				stack: ['Javascript', 'Next', 'Styled-components', 'Wordpress', 'ACF', 'GraphQL'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://www.restauracja-nadzalewem.pl/' },
				],
				imageUrl: 'restauracja-nad-zalewem.jpeg',
			},
		],
		projects: [
			{
				id: 1,
				title: 'Suzuki CMS',
				description: 'CMS web application to manage the My Suzuki mobile application.',
				stack: ['Javascript', 'React', 'Redux', 'Sass', 'Bootstrap', 'Draft.js'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://suzuki.pl/' },
				],
			},
			{
				id: 2,
				title: 'Gridaly Web App',
				description:
					'In the Gridaly team, I co-created the frontend layer of a web application for handling online and hybrid events.',
				stack: [
					'Javascript',
					'React',
					'Redux',
					'I18n',
					'Styled-components',
					'Formik',
					'Axios',
					'Draft.js',
					'Storybook',
					'Pusher',
				],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 3,
				title: 'Gridaly Admin Panel',
				description: 'A new admin panel to manage the online and hybrid event platform.',
				stack: [
					'Typescript',
					'React',
					'Redux-toolkit',
					'Redux-saga',
					'React-hook-form',
					'Cypress',
					'I18n',
					'Styled-components',
					'Storybook',
					'Pusher',
				],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 4,
				title: 'Gridaly Page',
				description:
					'The new Gridaly website with a description of the platform, a list of the most important functionalities and a knowledge base.',
				stack: ['Typescript', 'React', 'React-hook-form', 'I18n', 'Styled-components'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 5,
				title: 'Gridaly Event Check-in',
				description:
					'Gridaly Event Check-in is an application with which you can quickly scan tickets of participants of your event.',
				stack: ['Typescript', 'React Native', 'Expo', 'Redux', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 6,
				title: 'Easygrocery',
				description:
					'An application focused on improving stationary shopping, searching for promotions or sharing a shopping list in real time.',
				stack: ['Typescript', 'React Native', 'Expo', 'Strapi', 'Redux'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: null },
				],
			},
			{
				id: 7,
				title: 'Finlux Biuro Rachunkowe',
				description:
					'Website of the accounting office with a blog managed from the CMS level, prepared on the basis of a Wordpress template. Preparation of the website and mailboxes, Facebook fanpage, Google Ads campaign plan, Facebook Ads campaign plan.',
				stack: ['Wordpress'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://finlux.com.pl/' },
				],
			},
			{
				id: 8,
				title: 'Choinki z dowozem.pl',
				description: 'A website with a shop selling Christmas trees seasonally with delivery.',
				stack: ['Wordpress', 'Woocommerce'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://www.choinkizdowozem.pl/' },
				],
			},
			{
				id: 9,
				title: 'Audience Network',
				description: 'A website for Data Consulting pioneers in Poland.',
				stack: ['Javascript', 'NextJS', 'Styled-components', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/audience-front' },
					{ id: 1, type: 'External', url: 'https://audiencenetwork.pl/' },
				],
			},
			{
				id: 10,
				title: 'Newsletter House of Skills',
				description: 'A series of newsletters for one of the largest training companies in Poland.',
				stack: ['HTML', 'CSS'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/Mailing-HOS' },
					{ id: 1, type: 'External', url: 'https://mailing-hos.netlify.app/' },
				],
			},
			{
				id: 11,
				title: 'Card game',
				description: 'Card game.',
				stack: ['Javascript', 'React'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/card-game' },
					{ id: 1, type: 'External', url: 'https://cardgame.pawelnowecki.pl/' },
				],
			},
			{
				id: 12,
				title: 'Morse Translator ',
				description: 'Morse code translator',
				stack: ['Typescript', 'React'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/morse-code-translator' },
					{ id: 1, type: 'External', url: 'https://morse-code-translator-kohl.vercel.app/' },
				],
			},
		],
	},
	pl: {
		sectionTitle: 'Projekty',
		subTitle: 'Inne warte uwagi projekty',
		moreButton: 'Pokaż więcej',
		lessButton: 'Pokaż mniej',
		featured: [
			{
				id: 1,
				title: 'cHow',
				description:
					'System cHow służy do szybkiego i wygodnego zbierania oraz analizowania informacji od pracowników terenowych na temat własnej sieci sprzedaży, sieci konkurencyjnych i otoczenia. System składa się z aplikacji internetowej dostępnej w przeglądarce oraz aplikacji mobilnej przy której właśnie pracuje nad wdrażaniem nowych funkcjonalności czy naprawą bieżących błędów.',
				stack: ['Javascript', 'React Native', 'Redux', 'Firebase', 'Formik', 'I18n', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://play.google.com/store/apps/details?id=pl.chow.app&hl=pl&gl=US' },
				],
				imageUrl: 'chow.png',
			},
			{
				id: 2,
				title: 'Moje Suzuki',
				description:
					'Rozwój nowych funkcjonalności w aplikacji Moje Suzuki dzięki której wygodnie przejrzysz historię serwisowania swojego Suzuki, otrzymasz powiadomienia o przeglądach oraz akcjach serwisowych i przywoławyczych. A także skontaktujesz się ze swoim dealerem, wygodnie wyślesz zgłoszenie Assistance czy wykorzystasz swoją kartę w Programie Serwisowym Suzuki. Ostatnio dodana funkcjonalność to pogoda żeglarska i baza znaków wodnych dla użytkowników produktów Suzuki Marine',
				stack: ['Javascript', 'React Native', 'Redux', 'Firebase', 'Formik', 'I18n', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://play.google.com/store/apps/details?id=com.mojesuzukiapp&hl=pl&gl=US' },
				],
				imageUrl: 'suzuki.png',
			},
			{
				id: 3,
				title: 'Restauracja nad zalewem',
				description:
					'Wordperss wykorzystany jako headless CMS i za pomocą Advanced Custom Fildes oraz GraphQL skomunikowany z frontendem stworzonym z użyciem NextJS. Dzięki połączeniu tych technologii i zachowaniu wszystkich możliwych standardów strona osiągnęła maksymalny możliwy wynik w testach Google',
				stack: ['Javascript', 'Next', 'Styled-components', 'Wordpress', 'ACF', 'GraphQL'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://www.restauracja-nadzalewem.pl/' },
				],
				imageUrl: 'restauracja-nad-zalewem.jpeg',
			},
		],
		projects: [
			{
				id: 1,
				title: 'Suzuki CMS',
				description: 'Aplikacja webowa CMS do zarządzania aplikacją mobilną Moje Suzuki.',
				stack: ['Javascript', 'React', 'Redux', 'Sass', 'Bootstrap', 'Draft.js'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://suzuki.pl/' },
				],
			},
			{
				id: 2,
				title: 'Gridaly Web App',
				description:
					'W zespole Gridaly współtworzyłem warstwę frontendową aplikacji webowowej do obsługi wydarzeń online i hybrydowych.',
				stack: [
					'Javascript',
					'React',
					'Redux',
					'I18n',
					'Styled-components',
					'Formik',
					'Axios',
					'Draft.js',
					'Storybook',
					'Pusher',
				],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 3,
				title: 'Gridaly Admin Panel',
				description: 'Nowy panel administracyjny do zarządzania platformą do obsługi wydarzeń online i hybrydowych.',
				stack: [
					'Typescript',
					'React',
					'Redux-toolkit',
					'Redux-saga',
					'React-hook-form',
					'Cypress',
					'I18n',
					'Styled-components',
					'Storybook',
					'Pusher',
				],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 4,
				title: 'Gridaly Page',
				description:
					'Nowa strona internetowa Gridaly z opisem platformy, listą najważniejszych funkcjonalności czy bazą wiedzy.',
				stack: ['Typescript', 'React', 'React-hook-form', 'I18n', 'Styled-components'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 5,
				title: 'Gridaly Event Check-in',
				description:
					'Gridaly Event Check-in to aplikacja, z którą szybko zeskanujesz bilety uczestników Twojego wydarzenia.',
				stack: ['Typescript', 'React Native', 'Expo', 'Redux', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
				],
			},
			{
				id: 6,
				title: 'Easygrocery',
				description:
					'Aplikacja skupiająca się na usprawnieniu zakupów stacjonarnych, wyszukiwaniu promocji czy dzielenia listy zakupów w czasie rzeczywistym.',
				stack: ['Typescript', 'React Native', 'Expo', 'Strapi', 'Redux'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: null },
				],
			},
			{
				id: 7,
				title: 'Finlux Biuro Rachunkowe',
				description:
					'Strona biura rachunkowego z blogiem zarządzanym z poziomu CMSa, przygotowana na postawie szablonu Wordpress. Przygotowanie strony jak i skrzynek pocztowych, fanpageu na Facebooku, planu kampanii Google Ads, planu kampanii Facebook Ads.',
				stack: ['Wordpress'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://finlux.com.pl/' },
				],
			},
			{
				id: 8,
				title: 'Choinki z dowozem.pl',
				description: 'Strona internetowa wraz ze sklepem sprzedająca sezonowo choinki z dostawą.',
				stack: ['Wordpress', 'Woocommerce'],
				links: [
					{ id: 0, type: 'GitHub', url: null },
					{ id: 1, type: 'External', url: 'https://www.choinkizdowozem.pl/' },
				],
			},
			{
				id: 9,
				title: 'Audience Network',
				description: 'Strona internetowa dla pionierów Data Consultingu w Polsce.',
				stack: ['Javascript', 'NextJS', 'Styled-components', 'Axios'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/audience-front' },
					{ id: 1, type: 'External', url: 'https://audiencenetwork.pl/' },
				],
			},
			{
				id: 10,
				title: 'Newsletter House of Skills',
				description: 'Seria newsletterów dla jednej z największych firm szkoleniowych w Polsce.',
				stack: ['HTML', 'CSS'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/Mailing-HOS' },
					{ id: 1, type: 'External', url: 'https://mailing-hos.netlify.app/' },
				],
			},
			{
				id: 11,
				title: 'Card game',
				description: 'Gra karciana.',
				stack: ['Javascript', 'React'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/card-game' },
					{ id: 1, type: 'External', url: 'https://cardgame.pawelnowecki.pl/' },
				],
			},
			{
				id: 12,
				title: 'Translator Morse',
				description: 'Translator alfabetu morsa',
				stack: ['Typescript', 'React'],
				links: [
					{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/morse-code-translator' },
					{ id: 1, type: 'External', url: 'https://morse-code-translator-kohl.vercel.app/' },
				],
			},
		],
	},
};
