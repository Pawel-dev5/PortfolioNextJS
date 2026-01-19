import { TECHNOLOGIES } from '@/lib/technologies';

export type ProjectLink = {
	id: number;
	type: 'GitHub' | 'External';
	url: string | null;
};

export type ProjectCategoryKey =
	| 'ai'
	| 'websites'
	| 'ecommerce'
	| 'mobile'
	| 'systems'
	| 'automation'
	| 'cms'
	| 'marketing'
	| 'email'
	| 'games'
	| 'tools';

export type LocalizedField<T> = {
	en: T;
	pl: T;
};

export type PortfolioProject = {
	id: number;
	stack: string[];
	categories: ProjectCategoryKey[];
	links: ProjectLink[];
	imageUrl?: string;
	imageFit?: 'contain' | 'cover';
	gallery: string[];
	title: LocalizedField<string>;
	description: LocalizedField<string>;
	fullDescription: LocalizedField<string>;
	challenge: LocalizedField<string>;
	solution: LocalizedField<string>;
	results: LocalizedField<string[]>;
	categoryLabel?: LocalizedField<string>;
};

export type LocalizedPortfolioProject = Omit<
	PortfolioProject,
	'title' | 'description' | 'fullDescription' | 'challenge' | 'solution' | 'results' | 'categoryLabel'
> & {
	title: string;
	description: string;
	fullDescription: string;
	challenge: string;
	solution: string;
	results: string[];
	categoryLabel?: string;
};

export type FeaturedProjectKey = 'irrify' | 'chow' | 'suzuki' | 'hagen';

export type FeaturedProject = PortfolioProject & {
	key: FeaturedProjectKey;
	imageUrl: string;
};

export type LocalizedFeaturedProject = Omit<
	FeaturedProject,
	'title' | 'description' | 'fullDescription' | 'challenge' | 'solution' | 'results' | 'categoryLabel'
> & {
	title: string;
	description: string;
	fullDescription: string;
	challenge: string;
	solution: string;
	results: string[];
	categoryLabel?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
	{
		id: 0,
		key: 'irrify',
		imageUrl: 'irrifyPage.png',
		imageFit: 'cover',
		categories: ['ai', 'websites', 'ecommerce'],
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
		gallery: ['/assets/irrify.png'],
		title: { en: 'Irrify.ai', pl: 'Irrify.ai' },
		categoryLabel: { en: 'AI Platform', pl: 'AI Platform' },
		description: {
			en: 'Advanced platform for business process automation using artificial intelligence. The system enables the creation of intelligent AI agents, workflow automation, and integration with popular tools.',
			pl: 'Zaawansowana platforma do automatyzacji procesów biznesowych z wykorzystaniem sztucznej inteligencji. System umożliwia tworzenie inteligentnych agentów AI, automatyzację workflow oraz integrację z popularnymi narzędziami.',
		},
		fullDescription: {
			en: 'Irrify.ai is a comprehensive SaaS platform that helps companies automate business processes with AI. It enables building intelligent agents, automating workflows, and integrating with tools like Slack, Gmail, and CRM systems.',
			pl: 'Irrify.ai to kompleksowa platforma SaaS umożliwiająca firmom automatyzację procesów biznesowych z użyciem AI. Pozwala tworzyć inteligentnych agentów, automatyzować workflow i integrować się z narzędziami takimi jak Slack, Gmail czy CRM.',
		},
		challenge: {
			en: 'Design a no-code platform that lets non-technical teams build reliable AI automations while keeping performance and security at scale.',
			pl: 'Zaprojektować no‑code platformę, która umożliwi osobom nietechnicznym budowanie stabilnych automatyzacji AI przy zachowaniu wydajności i bezpieczeństwa.',
		},
		solution: {
			en: 'A visual workflow builder with drag-and-drop, secure auth, and modular integrations. The system optimizes prompts and manages conversational context automatically.',
			pl: 'Wizualny builder workflow z drag‑and‑drop, bezpieczne uwierzytelnianie i modułowe integracje. System automatycznie optymalizuje prompty i zarządza kontekstem rozmów.',
		},
		results: {
			en: ['500+ active users in the first month', 'Automation creation time reduced by 80%', '98% positive user feedback'],
			pl: [
				'500+ aktywnych użytkowników w pierwszym miesiącu',
				'Skrócenie czasu tworzenia automatyzacji o 80%',
				'98% pozytywnych opinii',
			],
		},
	},
	{
		id: 1,
		key: 'chow',
		imageUrl: 'chow.png',
		imageFit: 'contain',
		categories: ['mobile'],
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
		gallery: [
			'/assets/chow.png',
			'/assets/chow1.webp',
			'/assets/chow2.webp',
			'/assets/chow3.webp',
			'/assets/chow4.webp',
			'/assets/chow5.webp',
			'/assets/chow6.webp',
			'/assets/chow7.webp',
			'/assets/chow8.webp',
		],
		title: { en: 'cHow', pl: 'cHow' },
		categoryLabel: { en: 'Mobile App', pl: 'Mobile App' },
		description: {
			en: 'The cHow system is used to quickly and conveniently collect and analyze information from field employees about your own sales network, competitive networks, and the environment.',
			pl: 'System cHow służy do szybkiego i wygodnego zbierania oraz analizowania informacji od pracowników terenowych na temat własnej sieci sprzedaży, sieci konkurencyjnych oraz otoczenia.',
		},
		fullDescription: {
			en: 'cHow is a mobile solution used to collect and analyze field data from sales teams, competitors, and the surrounding environment in real time.',
			pl: 'cHow to aplikacja mobilna do szybkiego zbierania i analizowania danych od pracowników terenowych dotyczących sprzedaży, konkurencji i otoczenia.',
		},
		challenge: {
			en: 'Enable fast data collection in the field with offline support and a simple UX that works for distributed teams.',
			pl: 'Zapewnić błyskawiczne zbieranie danych w terenie, także offline, przy maksymalnie prostej obsłudze dla rozproszonych zespołów.',
		},
		solution: {
			en: 'A React Native app with Firebase sync, role-based access, and structured forms for consistent reporting.',
			pl: 'Aplikacja React Native z synchronizacją w Firebase, rolami użytkowników i ustrukturyzowanymi formularzami.',
		},
		results: {
			en: ['Faster field reporting across teams', 'Better data quality and consistency', 'Improved decision-making speed'],
			pl: ['Szybsze raportowanie w terenie', 'Wyższa jakość danych', 'Sprawniejsze decyzje operacyjne'],
		},
	},
	{
		id: 2,
		key: 'suzuki',
		imageUrl: 'suzuki.png',
		imageFit: 'contain',
		categories: ['mobile'],
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
		gallery: [
			'/assets/MojeSuzuki1.webp',
			'/assets/MojeSuzuki2.webp',
			'/assets/MojeSuzuki3.webp',
			'/assets/MojeSuzuki4.webp',
			'/assets/MojeSuzuki5.webp',
			'/assets/MojeSuzuki6.webp',
		],
		title: { en: 'Moje Suzuki', pl: 'Moje Suzuki' },
		categoryLabel: { en: 'Mobile App', pl: 'Mobile App' },
		description: {
			en: 'Development of new functionalities in the My Suzuki application, allowing convenient service history review, receiving notifications about inspections, and service/recall actions.',
			pl: 'Rozwój nowych funkcjonalności w aplikacji Moje Suzuki, dzięki której możesz wygodnie przeglądać historię serwisu swojego Suzuki, otrzymywać powiadomienia o przeglądach oraz akcjach serwisowych i przywoławczych.',
		},
		fullDescription: {
			en: 'The My Suzuki mobile application delivers service history, notifications, and recalls for drivers while improving customer engagement.',
			pl: 'Aplikacja Moje Suzuki dostarcza historię serwisową, powiadomienia i akcje przywoławcze, zwiększając zaangażowanie klientów.',
		},
		challenge: {
			en: 'Expand app functionality without disrupting existing users and maintain a reliable update cadence.',
			pl: 'Rozwijać aplikację bez wpływu na istniejących użytkowników oraz utrzymać stabilny rytm wydań.',
		},
		solution: {
			en: 'Iterative feature development, improved notification flows, and streamlined service history access using React Native and Firebase.',
			pl: 'Iteracyjne wdrażanie funkcji, ulepszone powiadomienia i dostęp do historii serwisowej w oparciu o React Native i Firebase.',
		},
		results: {
			en: ['Higher engagement with service features', 'Reduced support requests', 'Stable release cadence'],
			pl: ['Większe zaangażowanie użytkowników', 'Mniej zgłoszeń do wsparcia', 'Stabilny cykl wydań'],
		},
	},
	{
		id: 3,
		key: 'hagen',
		imageUrl: 'hagen.png',
		imageFit: 'cover',
		categories: ['websites', 'cms'],
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
		gallery: [
			'/assets/hagen.png',
			'/assets/hagen_gallery1.png',
			'/assets/hagen_gallery2.png',
			'/assets/hagenGallery3.png',
			'/assets/hagen_gallery4.png',
			'/assets/hagen_gallery5.png',
		],
		title: { en: 'Hagen', pl: 'Hagen' },
		categoryLabel: { en: 'Website', pl: 'Website' },
		description: {
			en: 'Website for Hagen company. Modern design and SEO optimization.',
			pl: 'Strona internetowa dla firmy Hagen. Nowoczesny design i optymalizacja pod kątem SEO.',
		},
		fullDescription: {
			en: 'Website for Hagen company featuring modern design, SEO optimization, and a CMS-driven content model.',
			pl: 'Strona internetowa dla firmy Hagen z nowoczesnym designem, optymalizacją SEO i treściami zarządzanymi z poziomu CMS.',
		},
		challenge: {
			en: 'Modernize the brand online presence and improve performance and SEO.',
			pl: 'Unowocześnić wizerunek online i poprawić wydajność oraz SEO.',
		},
		solution: {
			en: 'A Next.js website with Sanity CMS, optimized assets, and structured content for SEO.',
			pl: 'Serwis w Next.js z CMS Sanity, optymalizacją zasobów i strukturą treści pod SEO.',
		},
		results: {
			en: ['Faster load times', 'Improved SEO visibility', 'Easier content updates'],
			pl: ['Szybsze ładowanie strony', 'Lepsza widoczność w SEO', 'Łatwiejsza edycja treści'],
		},
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

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
	{
		id: 0,
		stack: [
			TECHNOLOGIES.REACT_NATIVE.name,
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.REACT.name,
			TECHNOLOGIES.REDUX.name,
			TECHNOLOGIES.AXIOS.name,
		],
		categories: ['mobile', 'websites'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://learnn.com/v2/' },
			{
				id: 2,
				type: 'External',
				url: 'https://play.google.com/store/apps/details?id=com.learnn.app',
			},
		],
		imageUrl: 'learnn.png',
		gallery: ['/assets/learnnGallery1.webp', '/assets/learnnGallery2.webp', '/assets/learnnGallery3.webp'],
		title: { en: 'Learnn', pl: 'Learnn' },
		description: {
			en: 'Educational platform for learning digital skills with video courses and progress tracking.',
			pl: 'Platforma edukacyjna do nauki kompetencji cyfrowych z kursami wideo i śledzeniem postępów.',
		},
		fullDescription: {
			en: 'A comprehensive mobile and web platform for learning digital skills, featuring video courses, progress tracking, and interactive quizzes.',
			pl: 'Kompleksowa platforma mobilna i webowa do nauki umiejętności cyfrowych, oferująca kursy wideo, śledzenie postępów i interaktywne quizy.',
		},
		challenge: {
			en: 'Maintaining and stabilizing a production application by fixing critical bugs and upgrading key dependencies like React Native.',
			pl: 'Utrzymanie i stabilizacja aplikacji produkcyjnej poprzez naprawę błędów krytycznych oraz aktualizację kluczowych zależności, takich jak React Native.',
		},
		solution: {
			en: 'Refactoring legacy code, resolving production issues, and performing a major upgrade of React Native and related libraries.',
			pl: 'Refaktoryzacja kodu legacy, rozwiązywanie problemów produkcyjnych oraz przeprowadzenie dużej aktualizacji React Native i powiązanych bibliotek.',
		},
		results: {
			en: ['Improved application stability', 'Up-to-date technology stack', 'Reduced technical debt'],
			pl: ['Poprawa stabilności aplikacji', 'Aktualny stos technologiczny', 'Zredukowany dług technologiczny'],
		},
	},
	{
		id: 1,
		stack: [
			TECHNOLOGIES.JAVASCRIPT.name,
			TECHNOLOGIES.NEXT_JS.name,
			TECHNOLOGIES.STYLED_COMPONENTS.name,
			TECHNOLOGIES.WORDPRESS.name,
			TECHNOLOGIES.ACF.name,
			TECHNOLOGIES.GRAPHQL.name,
		],
		categories: ['websites', 'cms', 'ecommerce'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://www.restauracja-nadzalewem.pl/' },
		],
		imageUrl: 'restauracja-nad-zalewem.jpeg',
		gallery: [
			'/assets/restauracjaNadZalewemGallery1.png',
			'/assets/restauracjaNadZalewemGallery2.png',
			'/assets/restauracjaNadZalewemGallery3.png',
		],
		title: { en: 'Restauracja nad zalewem', pl: 'Restauracja nad zalewem' },
		description: {
			en: 'WordPress used as a headless CMS and, with Advanced Custom Fields and GraphQL, connected to a Next.js frontend. The scope also included a food ordering module. Thanks to the combination of these technologies and maintaining all possible standards, the website achieved the maximum possible result in Google tests.',
			pl: 'WordPress wykorzystany jako headless CMS i za pomocą Advanced Custom Fields oraz GraphQL skomunikowany z frontendem stworzonym z użyciem Next.js. W zakresie był też moduł zamówień jedzenia. Dzięki połączeniu tych technologii i zachowaniu wszystkich możliwych standardów strona osiągnęła maksymalny możliwy wynik w testach Google.',
		},
		fullDescription: {
			en: 'Headless WordPress with ACF and GraphQL powering a Next.js frontend, plus a dedicated food ordering module. The focus was on performance, SEO, and an editing experience that stays familiar for the content team.',
			pl: 'Headless WordPress z ACF i GraphQL, który zasila frontend w Next.js, oraz dedykowany moduł zamówień jedzenia. Nacisk położono na wydajność, SEO i doświadczenie edycji treści, które pozostaje znajome dla zespołu.',
		},
		challenge: {
			en: 'Deliver a fast, SEO-friendly site while keeping content editing easy for the team and enabling online food ordering.',
			pl: 'Dostarczyć szybką, przyjazną SEO stronę, utrzymując prostą edycję treści oraz uruchamiając zamówienia jedzenia online.',
		},
		solution: {
			en: 'Headless WordPress with ACF and GraphQL, Next.js rendering, optimized assets, and a food ordering module.',
			pl: 'Headless WordPress z ACF i GraphQL, renderowanie w Next.js, zoptymalizowane zasoby oraz moduł zamówień jedzenia.',
		},
		results: {
			en: [
				'Lighthouse scores 95+ on key pages',
				'Faster content publishing',
				'Improved search visibility',
				'Online food ordering enabled',
			],
			pl: [
				'Wyniki Lighthouse 95+ na kluczowych stronach',
				'Szybsza publikacja treści',
				'Lepsza widoczność w wyszukiwarce',
				'Uruchomione zamówienia jedzenia online',
			],
		},
	},
	{
		id: 2,
		stack: [
			TECHNOLOGIES.JAVASCRIPT.name,
			TECHNOLOGIES.REACT.name,
			TECHNOLOGIES.REDUX.name,
			TECHNOLOGIES.SASS.name,
			TECHNOLOGIES.BOOTSTRAP.name,
			TECHNOLOGIES.DRAFT_JS.name,
		],
		categories: ['systems', 'cms', 'websites'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://suzuki.pl/' },
		],
		gallery: ['/assets/suzuki.png'],
		title: { en: 'Suzuki CMS', pl: 'Suzuki CMS' },
		imageUrl: 'suzukipl.png',
		description: {
			en: 'CMS web application to manage the My Suzuki mobile application.',
			pl: 'Aplikacja webowa CMS do zarządzania aplikacją mobilną Moje Suzuki.',
		},
		fullDescription: {
			en: 'CMS web application built to manage content, users, and configuration for the My Suzuki mobile ecosystem.',
			pl: 'Aplikacja webowa CMS umożliwiająca zarządzanie treściami, konfiguracją i użytkownikami w ekosystemie aplikacji Moje Suzuki.',
		},
		challenge: {
			en: 'Unify content and admin workflows for a large mobile product with multiple roles.',
			pl: 'Spójne zarządzanie treściami i uprawnieniami dla dużej aplikacji mobilnej.',
		},
		solution: {
			en: 'React + Redux CMS with structured forms, permissions, and validation.',
			pl: 'Panel CMS w React + Redux z formularzami, walidacją i rolami użytkowników.',
		},
		results: {
			en: ['Centralized content management', 'Fewer publishing errors', 'Faster updates across teams'],
			pl: ['Centralizacja treści', 'Mniej błędów publikacji', 'Szybsze aktualizacje'],
		},
	},
	{
		id: 3,
		imageUrl: 'gridalyWebapp.webp',
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
		categories: ['systems', 'websites'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
		],
		gallery: [
			'/assets/gridalyWebapp.webp',
			'/assets/gridaly_gallery.webp',
			'/assets/gridaly_gallery4.webp',
			'/assets/gridaly_gallery5.webp',
			'/assets/gridaly_gallery6.webp',
		],
		title: { en: 'Gridaly Web App', pl: 'Gridaly Web App' },
		description: {
			en: 'In the Gridaly team, I co-created the frontend layer of a web application for handling online and hybrid events.',
			pl: 'W zespole Gridaly współtworzyłem warstwę frontendową aplikacji webowowej do obsługi wydarzeń online i hybrydowych.',
		},
		fullDescription: {
			en: 'Web application for hosting online and hybrid events with real-time interactions, multilingual UI, and scalable frontend architecture.',
			pl: 'Aplikacja webowa do obsługi wydarzeń online i hybrydowych z funkcjami realtime, wielojęzycznością i wysoką skalowalnością.',
		},
		challenge: {
			en: 'Build a real-time event experience that stays reliable under peak traffic.',
			pl: 'Zapewnić stabilne działanie w czasie rzeczywistym podczas dużych wydarzeń.',
		},
		solution: {
			en: 'React + Redux with Pusher for live updates and i18n for multi-language support.',
			pl: 'React + Redux, Pusher do realtime oraz pełne wsparcie i18n.',
		},
		results: {
			en: ['Stable hybrid events at scale', 'Improved attendee engagement', 'Multi-language experience delivered'],
			pl: ['Stabilne wydarzenia online', 'Wyższe zaangażowanie uczestników', 'Wielojęzyczny interfejs'],
		},
	},
	{
		id: 4,
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
		categories: ['systems', 'cms'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
		],
		imageUrl: 'GridalyAdmin.png',
		gallery: [
			'/assets/gridalyWebapp.webp',
			'/assets/gridaly_gallery.webp',
			'/assets/gridaly_gallery4.webp',
			'/assets/gridaly_gallery5.webp',
			'/assets/gridaly_gallery6.webp',
		],
		title: { en: 'Gridaly Admin Panel', pl: 'Gridaly Admin Panel' },
		description: {
			en: 'A new admin panel to manage the online and hybrid event platform.',
			pl: 'Nowy panel administracyjny do zarządzania platformą do obsługi wydarzeń online i hybrydowych.',
		},
		fullDescription: {
			en: 'Admin panel for managing events, users, and operational data for the Gridaly online and hybrid event platform.',
			pl: 'Panel administracyjny do zarządzania wydarzeniami, użytkownikami i danymi operacyjnymi platformy Gridaly.',
		},
		challenge: {
			en: 'Handle complex datasets and permissions in a clear admin UI.',
			pl: 'Uporządkować skomplikowane dane i role w czytelnym panelu.',
		},
		solution: {
			en: 'Redux Toolkit + Saga, tested forms, and structured admin workflows.',
			pl: 'Redux Toolkit + Saga, testy Cypress i uporządkowane formularze.',
		},
		results: {
			en: ['Streamlined admin workflows', 'Reduced manual errors', 'Improved reporting visibility'],
			pl: ['Usprawnione workflow admina', 'Mniej błędów manualnych', 'Lepsze raportowanie'],
		},
	},
	{
		id: 5,
		stack: [
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.REACT.name,
			TECHNOLOGIES.REACT_HOOK_FORM.name,
			TECHNOLOGIES.I18N.name,
			TECHNOLOGIES.STYLED_COMPONENTS.name,
		],
		categories: ['websites'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
		],
		imageUrl: 'gridalyPage.png',
		gallery: [
			'/assets/gridalyWebapp.webp',
			'/assets/gridaly_gallery.webp',
			'/assets/gridaly_gallery4.webp',
			'/assets/gridaly_gallery5.webp',
			'/assets/gridaly_gallery6.webp',
		],
		title: { en: 'Gridaly Page', pl: 'Gridaly Page' },
		description: {
			en: 'The new Gridaly website with a description of the platform, a list of the most important functionalities and a knowledge base.',
			pl: 'Nowa strona internetowa Gridaly z opisem platformy, listą najważniejszych funkcjonalności czy bazą wiedzy.',
		},
		fullDescription: {
			en: 'Marketing website describing the platform, key functionalities, and a knowledge base for customers and partners.',
			pl: 'Strona marketingowa Gridaly z opisem platformy, kluczowymi funkcjami i bazą wiedzy dla klientów.',
		},
		challenge: {
			en: 'Present a complex platform in a clear, SEO-friendly way.',
			pl: 'Jasno wytłumaczyć wartość platformy i zadbać o SEO.',
		},
		solution: {
			en: 'Structured React site with reusable sections and content hierarchy.',
			pl: 'Strukturalna strona w React z modułowymi sekcjami treści.',
		},
		results: {
			en: ['Clear product positioning', 'Improved SEO visibility', 'Reusable content structure'],
			pl: ['Czytelny przekaz marketingowy', 'Lepsza widoczność w SEO', 'Modułowa struktura treści'],
		},
	},
	{
		id: 6,
		stack: [
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.REACT_NATIVE.name,
			TECHNOLOGIES.EXPO.name,
			TECHNOLOGIES.REDUX.name,
			TECHNOLOGIES.AXIOS.name,
		],
		categories: ['mobile'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'http://gridaly.pl/' },
		],
		imageUrl: 'gridalyApp.webp',
		gallery: [
			'/assets/gridaly_gallery1.webp',
			'/assets/gridaly_gallery2.webp',
			'/assets/gridaly_gallery3.webp',
			'/assets/gridaly_gallery7.webp',
		],
		title: { en: 'Gridaly Event Check-in', pl: 'Gridaly Event Check-in' },
		description: {
			en: 'Gridaly Event Check-in is an application with which you can quickly scan tickets of participants of your event.',
			pl: 'Gridaly Event Check-in to aplikacja, z którą szybko zeskanujesz bilety uczestników Twojego wydarzenia.',
		},
		fullDescription: {
			en: 'Mobile application for fast ticket scanning and attendee check-in during live events.',
			pl: 'Aplikacja mobilna do szybkiego skanowania biletów i sprawnego wpuszczania uczestników na wydarzenia.',
		},
		challenge: {
			en: 'Speed up entry queues and reduce manual check-in errors.',
			pl: 'Przyspieszyć wejście na wydarzenia i ograniczyć błędy przy check‑in.',
		},
		solution: {
			en: 'React Native app with QR scanning and real-time sync.',
			pl: 'React Native z obsługą skanowania QR i synchronizacją online.',
		},
		results: {
			en: ['Faster check-in process', 'Lower entry queues', 'Real-time attendance stats'],
			pl: ['Szybszy check‑in', 'Mniej kolejek', 'Statystyki w czasie rzeczywistym'],
		},
	},
	{
		id: 7,
		stack: [
			TECHNOLOGIES.TYPESCRIPT.name,
			TECHNOLOGIES.REACT_NATIVE.name,
			TECHNOLOGIES.EXPO.name,
			TECHNOLOGIES.STRAPI.name,
			TECHNOLOGIES.REDUX.name,
		],
		categories: ['mobile', 'ecommerce'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: null },
		],
		gallery: [],
		title: { en: 'Easygrocery', pl: 'Easygrocery' },
		description: {
			en: 'An application focused on improving stationary shopping, searching for promotions or sharing a shopping list in real time.',
			pl: 'Aplikacja skupiająca się na usprawnieniu zakupów stacjonarnych, wyszukiwaniu promocji czy dzielenia listy zakupów w czasie rzeczywistym.',
		},
		fullDescription: {
			en: 'Mobile app that improves in-store shopping through promotions, shared lists, and real-time collaboration.',
			pl: 'Aplikacja mobilna usprawniająca zakupy dzięki promocjom, współdzielonym listom i pracy w czasie rzeczywistym.',
		},
		challenge: {
			en: 'Combine shared lists and promo discovery in a single, simple UX.',
			pl: 'Połączyć listy zakupów, promocje i współpracę w jednej aplikacji.',
		},
		solution: {
			en: 'React Native app with Strapi backend and Redux state management.',
			pl: 'React Native + Strapi oraz zarządzanie stanem w Redux.',
		},
		results: {
			en: ['Simplified shopping planning', 'Shared lists in real time', 'Improved promo discovery'],
			pl: ['Łatwiejsze planowanie zakupów', 'Współdzielone listy na żywo', 'Lepsze odkrywanie promocji'],
		},
	},
	{
		id: 8,
		stack: [TECHNOLOGIES.WORDPRESS.name],
		categories: ['websites', 'marketing', 'cms'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://finlux.com.pl/' },
		],
		imageUrl: 'finlux.png',
		gallery: [],
		title: { en: 'Finlux Biuro Rachunkowe', pl: 'Finlux Biuro Rachunkowe' },
		description: {
			en: 'Website of the accounting office with a blog managed from the CMS level, prepared on the basis of a Wordpress template. Preparation of the website and mailboxes, Facebook fanpage, Google Ads campaign plan, Facebook Ads campaign plan.',
			pl: 'Strona biura rachunkowego z blogiem zarządzanym z poziomu CMSa, przygotowana na postawie szablonu Wordpress. Przygotowanie strony jak i skrzynek pocztowych, fanpageu na Facebooku, planu kampanii Google Ads, planu kampanii Facebook Ads.',
		},
		fullDescription: {
			en: 'WordPress-based website with a CMS-managed blog plus preparation of mailboxes and initial marketing assets.',
			pl: 'Strona WordPress z blogiem i przygotowaniem podstawowych kanałów marketingowych dla biura rachunkowego.',
		},
		challenge: {
			en: 'Launch a professional site quickly and prepare marketing channels.',
			pl: 'Szybko uruchomić stronę i przygotować podstawy marketingu.',
		},
		solution: {
			en: 'WordPress site setup with CMS blog and initial ad campaign planning.',
			pl: 'WordPress z CMS‑owym blogiem oraz przygotowaniem planu kampanii.',
		},
		results: {
			en: ['Online presence established', 'CMS-managed blog live', 'Prepared marketing plan'],
			pl: ['Widoczność online', 'Blog w CMS', 'Gotowy plan kampanii'],
		},
	},
	{
		id: 9,
		stack: [TECHNOLOGIES.WORDPRESS.name, TECHNOLOGIES.WOOCOMMERCE.name],
		categories: ['websites', 'ecommerce', 'cms'],
		links: [
			{ id: 0, type: 'GitHub', url: null },
			{ id: 1, type: 'External', url: 'https://www.choinkizdowozem.pl/' },
		],
		gallery: [],
		title: { en: 'Choinki z dowozem.pl', pl: 'Choinki z dowozem.pl' },
		description: {
			en: 'A website with a shop selling Christmas trees seasonally with delivery.',
			pl: 'Strona internetowa wraz ze sklepem sprzedająca sezonowo choinki z dostawą.',
		},
		fullDescription: {
			en: 'Seasonal e-commerce website selling Christmas trees with delivery and an easy-to-use ordering flow.',
			pl: 'Sezonowy sklep internetowy sprzedający choinki z dostawą, z prostym procesem zamówień.',
		},
		challenge: {
			en: 'Build a seasonal store with fast content updates and simple checkout.',
			pl: 'Uprościć proces zakupowy i umożliwić szybkie zmiany oferty sezonowej.',
		},
		solution: {
			en: 'WooCommerce store with streamlined ordering and delivery options.',
			pl: 'WooCommerce z uproszczonym checkoutem i konfiguracją dostaw.',
		},
		results: {
			en: ['Seasonal sales supported', 'Simpler order management', 'Faster catalog updates'],
			pl: ['Obsługa sezonowej sprzedaży', 'Sprawne zamówienia', 'Szybkie aktualizacje oferty'],
		},
	},
	{
		id: 10,
		stack: [
			TECHNOLOGIES.JAVASCRIPT.name,
			TECHNOLOGIES.NEXT_JS.name,
			TECHNOLOGIES.STYLED_COMPONENTS.name,
			TECHNOLOGIES.AXIOS.name,
		],
		categories: ['websites'],
		links: [
			{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/audience-front' },
			{ id: 1, type: 'External', url: 'https://audiencenetwork.pl/' },
		],
		imageUrl: 'audienceNetwork.png',
		gallery: [],
		title: { en: 'Audience Network', pl: 'Audience Network' },
		description: {
			en: 'A website for Data Consulting pioneers in Poland.',
			pl: 'Strona internetowa dla pionierów Data Consultingu w Polsce.',
		},
		fullDescription: {
			en: 'Marketing website for a data consulting company, focused on credibility, performance, and lead generation.',
			pl: 'Strona internetowa dla firmy Data Consulting z naciskiem na wiarygodność, wydajność i pozyskiwanie leadów.',
		},
		challenge: {
			en: 'Present consulting services clearly while keeping strong performance and SEO.',
			pl: 'Silnie zaprezentować ofertę konsultingową przy zachowaniu wysokiej wydajności i SEO.',
		},
		solution: {
			en: 'Next.js site with styled-components and optimized assets.',
			pl: 'Serwis Next.js z optymalizacją zasobów i nowoczesnym UI.',
		},
		results: {
			en: ['Improved lead generation', 'Better SEO visibility', 'Modernized brand presence'],
			pl: ['Więcej leadów', 'Lepsze SEO', 'Nowoczesny wizerunek marki'],
		},
	},
	{
		id: 11,
		stack: [TECHNOLOGIES.HTML.name, TECHNOLOGIES.CSS.name],
		categories: ['email', 'marketing'],
		links: [
			{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/Mailing-HOS' },
			{ id: 1, type: 'External', url: 'https://mailing-hos.netlify.app/' },
		],
		imageUrl: 'newsletterHOS.png',
		gallery: [],
		title: { en: 'Newsletter House of Skills', pl: 'Newsletter House of Skills' },
		description: {
			en: 'A series of newsletters for one of the largest training companies in Poland.',
			pl: 'Seria newsletterów dla jednej z największych firm szkoleniowych w Polsce.',
		},
		fullDescription: {
			en: 'Responsive email templates and a consistent newsletter system for a large training company.',
			pl: 'Zestaw responsywnych szablonów newsletterów i spójny system wysyłek dla dużej firmy szkoleniowej.',
		},
		challenge: {
			en: 'Deliver consistent rendering across email clients.',
			pl: 'Zapewnić spójne wyświetlanie w różnych klientach pocztowych.',
		},
		solution: {
			en: 'Hand-coded HTML/CSS templates with tested layouts.',
			pl: 'Ręcznie kodowane szablony HTML/CSS z przetestowanym layoutem.',
		},
		results: {
			en: ['Consistent cross-client rendering', 'Faster newsletter creation', 'Reusable template system'],
			pl: ['Spójny wygląd w klientach poczty', 'Szybsza produkcja newsletterów', 'System szablonów'],
		},
	},
	{
		id: 12,
		stack: [TECHNOLOGIES.JAVASCRIPT.name, TECHNOLOGIES.REACT.name],
		categories: ['games'],
		links: [
			{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/card-game' },
			{ id: 1, type: 'External', url: 'https://cardgame.pawelnowecki.pl/' },
		],
		imageUrl: 'cardGame.png',
		gallery: [],
		title: { en: 'Card game', pl: 'Card game' },
		description: {
			en: 'Card game.',
			pl: 'Gra karciana.',
		},
		fullDescription: {
			en: 'A simple browser card game created as a personal project.',
			pl: 'Prosta gra karciana w przeglądarce stworzona jako projekt własny.',
		},
		challenge: {
			en: 'Build a fun, smooth experience with simple game rules.',
			pl: 'Stworzyć płynną rozgrywkę i prosty interfejs.',
		},
		solution: {
			en: 'React UI with clean state management for game flow.',
			pl: 'React z logiką gry i prostą obsługą stanu.',
		},
		results: {
			en: ['Playable MVP', 'Smooth animations', 'Positive user feedback'],
			pl: ['Działające MVP', 'Płynne animacje', 'Pozytywny feedback użytkowników'],
		},
	},
	{
		id: 13,
		stack: [TECHNOLOGIES.TYPESCRIPT.name, TECHNOLOGIES.REACT.name],
		categories: ['tools'],
		links: [
			{ id: 0, type: 'GitHub', url: 'https://github.com/Pawel-dev5/morse-code-translator' },
			{ id: 1, type: 'External', url: 'https://morse-code-translator-kohl.vercel.app/' },
		],
		imageUrl: 'morseTranslator.png',
		gallery: [],
		title: { en: 'Morse Translator', pl: 'Translator Morse' },
		description: {
			en: 'Morse code translator',
			pl: 'Translator alfabetu morsa',
		},
		fullDescription: {
			en: 'A small web tool that translates text into Morse code instantly.',
			pl: 'Narzędzie webowe do tłumaczenia tekstu na alfabet Morse’a w czasie rzeczywistym.',
		},
		challenge: {
			en: 'Create a fast, accessible translator with a clean UI.',
			pl: 'Zapewnić szybkie tłumaczenie i czytelny interfejs.',
		},
		solution: {
			en: 'React + TypeScript tool with instant conversion.',
			pl: 'Aplikacja React + TypeScript z natychmiastową konwersją.',
		},
		results: {
			en: ['Fast translation', 'Simple interface', 'Public demo deployed'],
			pl: ['Natychmiastowe tłumaczenie', 'Prosty interfejs', 'Publiczne demo'],
		},
	},
];

export const getPortfolioPageContent = (locale: string) =>
	PORTFOLIO_PAGE_CONTENT[locale as keyof typeof PORTFOLIO_PAGE_CONTENT] ?? PORTFOLIO_PAGE_CONTENT.en;

const getLocaleKey = (locale: string): keyof LocalizedField<string> => (locale === 'pl' ? 'pl' : 'en');

const getLocalizedFields = (project: PortfolioProject, locale: string) => {
	const key = getLocaleKey(locale);
	return {
		title: project.title[key],
		description: project.description[key],
		fullDescription: project.fullDescription[key],
		challenge: project.challenge[key],
		solution: project.solution[key],
		results: project.results[key],
		categoryLabel: project.categoryLabel ? project.categoryLabel[key] : undefined,
	};
};

export const getPortfolioProjects = (locale: string): LocalizedPortfolioProject[] =>
	PORTFOLIO_PROJECTS.map((project) => ({
		...project,
		...getLocalizedFields(project, locale),
	}));

export const getFeaturedProjects = (locale: string): LocalizedFeaturedProject[] =>
	FEATURED_PROJECTS.map((project) => ({
		...project,
		...getLocalizedFields(project, locale),
	}));

export const createProjectSlug = (value: string, fallback: string) => {
	const slug = value
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');

	return slug || fallback;
};
