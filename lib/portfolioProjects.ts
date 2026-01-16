import { TECHNOLOGIES } from '@/lib/technologies';

export type ProjectLink = {
	id: number;
	type: 'GitHub' | 'External';
	url: string | null;
};

export type PortfolioProject = {
	id: number;
	title: string;
	description: string;
	stack: string[];
	links: ProjectLink[];
	imageUrl?: string;
};

export type FeaturedProjectKey = 'irrify' | 'chow' | 'suzuki' | 'hagen';

export type FeaturedProjectBase = {
	id: number;
	key: FeaturedProjectKey;
	stack: string[];
	links: ProjectLink[];
	imageUrl: string;
	imageFit?: 'contain' | 'cover';
};

export const FEATURED_PROJECTS_BASE: FeaturedProjectBase[] = [
	{
		id: 0,
		key: 'irrify',
		imageUrl: 'irrify.png',
		imageFit: 'cover',
		stack: [
			TECHNOLOGIES.NEXT_JS.name,
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.VERTEX_AI.name,
			TECHNOLOGIES.REACT.name,
			TECHNOLOGIES.KONVA.name,
			TECHNOLOGIES.KEYCLOAK.name,
			TECHNOLOGIES.PRISMA.name,
			TECHNOLOGIES.ZUSTAND.name,
			TECHNOLOGIES.SUPABASE.name,
			TECHNOLOGIES.STRIPE.name,
			TECHNOLOGIES.REACT_QUERY.name,
			TECHNOLOGIES.NODEMAILER.name,
			TECHNOLOGIES.HUSKY.name,
		],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://irrify.ai' },
		],
	},
	{
		id: 1,
		key: 'chow',
		imageUrl: 'chow.png',
		imageFit: 'contain',
		stack: [
			TECHNOLOGIES.JAVASCRIPT.name,
			TECHNOLOGIES.REACT_NATIVE.name,
			TECHNOLOGIES.REDUX.name,
			TECHNOLOGIES.FIREBASE.name,
			TECHNOLOGIES.FORMIK.name,
			TECHNOLOGIES.I18N.name,
			TECHNOLOGIES.AXIOS.name,
		],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{
				id: 1,
				type: 'External',
				url: 'https://play.google.com/store/apps/details?id=pl.chow.app&hl=pl&gl=US',
			},
		],
	},
	{
		id: 2,
		key: 'suzuki',
		imageUrl: 'suzuki.png',
		imageFit: 'contain',
		stack: [
			TECHNOLOGIES.JAVASCRIPT.name,
			TECHNOLOGIES.REACT_NATIVE.name,
			TECHNOLOGIES.REDUX.name,
			TECHNOLOGIES.FIREBASE.name,
			TECHNOLOGIES.FORMIK.name,
			TECHNOLOGIES.I18N.name,
			TECHNOLOGIES.AXIOS.name,
		],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{
				id: 1,
				type: 'External',
				url: 'https://play.google.com/store/apps/details?id=com.mojesuzukiapp&hl=pl&gl=US',
			},
		],
	},
	{
		id: 3,
		key: 'hagen',
		imageUrl: 'hagen.png',
		imageFit: 'cover',
		stack: [
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.NEXT_JS.name,
			TECHNOLOGIES.STYLED_COMPONENTS.name,
			TECHNOLOGIES.SANITY.name,
		],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://agencjahagen.pl/' },
		],
	},
];

const PORTFOLIO_PAGE_CONTENT = {
	en: {
		sectionTitle: 'Portfolio',
		subTitle: 'A full list of selected work and delivered products.',
		featuredTitle: 'Featured projects',
		projectsTitle: 'Other noteworthy projects',
	},
	pl: {
		sectionTitle: 'Projekty',
		subTitle: 'Pełna lista wybranych realizacji i produktów.',
		featuredTitle: 'Projekty wyróżnione',
		projectsTitle: 'Inne warte uwagi projekty',
	},
} as const;

export const PORTFOLIO_PROJECTS: Record<'en' | 'pl', PortfolioProject[]> = {
	en: [
		{
			id: 0,
			title: 'Restauracja nad zalewem',
			description:
				'Wordperss used as a headless CMS and using Advanced Custom Fildes and GraphQL connected to the frontend created using NextJS. Thanks to the combination of these technologies and maintaining all possible standards, the website achieved the maximum possible result in Google tests.',
			stack: [
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.NEXT_JS.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.WORDPRESS.name,
				TECHNOLOGIES.ACF.name,
				TECHNOLOGIES.GRAPHQL.name,
			],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'https://www.restauracja-nadzalewem.pl/' },
			],
			imageUrl: 'restauracja-nad-zalewem.jpeg',
		},
		{
			id: 1,
			title: 'Suzuki CMS',
			description: 'CMS web application to manage the My Suzuki mobile application.',
			stack: [
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.SASS.name,
				TECHNOLOGIES.BOOTSTRAP.name,
				TECHNOLOGIES.DRAFT_JS.name,
			],
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
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.FORMIK.name,
				TECHNOLOGIES.AXIOS.name,
				TECHNOLOGIES.DRAFT_JS.name,
				TECHNOLOGIES.STORYBOOK.name,
				TECHNOLOGIES.PUSHER.name,
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
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX_TOOLKIT.name,
				TECHNOLOGIES.REDUX_SAGA.name,
				TECHNOLOGIES.REACT_HOOK_FORM.name,
				TECHNOLOGIES.CYPRESS.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.STORYBOOK.name,
				TECHNOLOGIES.PUSHER.name,
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
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REACT_HOOK_FORM.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
			],
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
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT_NATIVE.name,
				TECHNOLOGIES.EXPO.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.AXIOS.name,
			],
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
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT_NATIVE.name,
				TECHNOLOGIES.EXPO.name,
				TECHNOLOGIES.STRAPI.name,
				TECHNOLOGIES.REDUX.name,
			],
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
			stack: [TECHNOLOGIES.WORDPRESS.name],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'https://finlux.com.pl/' },
			],
		},
		{
			id: 8,
			title: 'Choinki z dowozem.pl',
			description: 'A website with a shop selling Christmas trees seasonally with delivery.',
			stack: [TECHNOLOGIES.WORDPRESS.name, TECHNOLOGIES.WOOCOMMERCE.name],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'https://www.choinkizdowozem.pl/' },
			],
		},
		{
			id: 9,
			title: 'Audience Network',
			description: 'A website for Data Consulting pioneers in Poland.',
			stack: [
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.NEXT_JS.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.AXIOS.name,
			],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/audience-front' },
				{ id: 1, type: 'External', url: 'https://audiencenetwork.pl/' },
			],
		},
		{
			id: 10,
			title: 'Newsletter House of Skills',
			description: 'A series of newsletters for one of the largest training companies in Poland.',
			stack: [TECHNOLOGIES.HTML.name, TECHNOLOGIES.CSS.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/Mailing-HOS' },
				{ id: 1, type: 'External', url: 'https://mailing-hos.netlify.app/' },
			],
		},
		{
			id: 11,
			title: 'Card game',
			description: 'Card game.',
			stack: [TECHNOLOGIES.JAVASCRIPT.name, TECHNOLOGIES.REACT.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/card-game' },
				{ id: 1, type: 'External', url: 'https://cardgame.pawelnowecki.pl/' },
			],
		},
		{
			id: 12,
			title: 'Morse Translator',
			description: 'Morse code translator',
			stack: [TECHNOLOGIES.TYPESCRIPT.name, TECHNOLOGIES.REACT.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/morse-code-translator' },
				{ id: 1, type: 'External', url: 'https://morse-code-translator-kohl.vercel.app/' },
			],
		},
	],
	pl: [
		{
			id: 1,
			title: 'Suzuki CMS',
			description: 'Aplikacja webowa CMS do zarządzania aplikacją mobilną Moje Suzuki.',
			stack: [
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.SASS.name,
				TECHNOLOGIES.BOOTSTRAP.name,
				TECHNOLOGIES.DRAFT_JS.name,
			],
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
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.FORMIK.name,
				TECHNOLOGIES.AXIOS.name,
				TECHNOLOGIES.DRAFT_JS.name,
				TECHNOLOGIES.STORYBOOK.name,
				TECHNOLOGIES.PUSHER.name,
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
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REDUX_TOOLKIT.name,
				TECHNOLOGIES.REDUX_SAGA.name,
				TECHNOLOGIES.REACT_HOOK_FORM.name,
				TECHNOLOGIES.CYPRESS.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.STORYBOOK.name,
				TECHNOLOGIES.PUSHER.name,
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
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT.name,
				TECHNOLOGIES.REACT_HOOK_FORM.name,
				TECHNOLOGIES.I18N.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
			],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
			],
		},
		{
			id: 5,
			title: 'Gridaly Event Check-in',
			description: 'Gridaly Event Check-in to aplikacja, z którą szybko zeskanujesz bilety uczestników Twojego wydarzenia.',
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT_NATIVE.name,
				TECHNOLOGIES.EXPO.name,
				TECHNOLOGIES.REDUX.name,
				TECHNOLOGIES.AXIOS.name,
			],
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
			stack: [
				TECHNOLOGIES.TYPESCRIPT.name,
				TECHNOLOGIES.REACT_NATIVE.name,
				TECHNOLOGIES.EXPO.name,
				TECHNOLOGIES.STRAPI.name,
				TECHNOLOGIES.REDUX.name,
			],
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
			stack: [TECHNOLOGIES.WORDPRESS.name],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'https://finlux.com.pl/' },
			],
		},
		{
			id: 8,
			title: 'Choinki z dowozem.pl',
			description: 'Strona internetowa wraz ze sklepem sprzedająca sezonowo choinki z dostawą.',
			stack: [TECHNOLOGIES.WORDPRESS.name, TECHNOLOGIES.WOOCOMMERCE.name],
			links: [
				{ id: 0, type: 'GitHub', url: null },
				{ id: 1, type: 'External', url: 'https://www.choinkizdowozem.pl/' },
			],
		},
		{
			id: 9,
			title: 'Audience Network',
			description: 'Strona internetowa dla pionierów Data Consultingu w Polsce.',
			stack: [
				TECHNOLOGIES.JAVASCRIPT.name,
				TECHNOLOGIES.NEXT_JS.name,
				TECHNOLOGIES.STYLED_COMPONENTS.name,
				TECHNOLOGIES.AXIOS.name,
			],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/audience-front' },
				{ id: 1, type: 'External', url: 'https://audiencenetwork.pl/' },
			],
		},
		{
			id: 10,
			title: 'Newsletter House of Skills',
			description: 'Seria newsletterów dla jednej z największych firm szkoleniowych w Polsce.',
			stack: [TECHNOLOGIES.HTML.name, TECHNOLOGIES.CSS.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/Mailing-HOS' },
				{ id: 1, type: 'External', url: 'https://mailing-hos.netlify.app/' },
			],
		},
		{
			id: 11,
			title: 'Card game',
			description: 'Gra karciana.',
			stack: [TECHNOLOGIES.JAVASCRIPT.name, TECHNOLOGIES.REACT.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/card-game' },
				{ id: 1, type: 'External', url: 'https://cardgame.pawelnowecki.pl/' },
			],
		},
		{
			id: 12,
			title: 'Translator Morse',
			description: 'Translator alfabetu morsa',
			stack: [TECHNOLOGIES.TYPESCRIPT.name, TECHNOLOGIES.REACT.name],
			links: [
				{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/morse-code-translator' },
				{ id: 1, type: 'External', url: 'https://morse-code-translator-kohl.vercel.app/' },
			],
		},
	],
};

export const getPortfolioPageContent = (locale: string) =>
	PORTFOLIO_PAGE_CONTENT[locale as keyof typeof PORTFOLIO_PAGE_CONTENT] ?? PORTFOLIO_PAGE_CONTENT.en;

export const getPortfolioProjects = (locale: string) =>
	PORTFOLIO_PROJECTS[locale as keyof typeof PORTFOLIO_PROJECTS] ?? PORTFOLIO_PROJECTS.en;
