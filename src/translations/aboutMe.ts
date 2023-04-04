import { AboutMeContentType } from 'translations/models/content';

const stackList: string[] = [
	'JavaScript (ES6+)',
	'TypeScript',
	'React',
	'React Native',
	'Expo',
	'Next.js',
	'Wordpress',
	'Woocommerce',
	'Redux',
	'Saga',
];

export const aboutMeContent: AboutMeContentType = {
	en: {
		sectionTitle: 'About me',
		paragraph1:
			'Hello! I like to create things that live on the Internet, are functional and look nice. My interest in web development started in 2017 when I decided to try editing standard Worspress themes - it taught me a lot about HTML and CSS and turned me towards React!',
		paragraph2:
			'Fast-forward to today, and I’ve had the privilege of working at 10a, a software house focused on creating high-quality digital solutions. I focus mainly on creating new functionalities for our mobile and web applications. clients',
		paragraph3:
			'Recently, I started working on my application, which focuses on improving stationary shopping, searching for promotions or sharing a shopping list in real time.',
		paragraph4: 'Here are a few technologies I’ve been works on a daily basis:',
		stackList,
	},
	pl: {
		sectionTitle: 'O mnie',
		paragraph1:
			"Hej! Lubię tworzyć rzeczy, które żyją w Internecie, są funkcjonalne oraz ładnie wygladają. Moje zainteresowanie tworzeniem stron internetowych zaczęło się w 2017 roku, kiedy zdecydowałem się spróbować edytować standardowe motywy Worspress — to nauczyło mnie wiele o HTML i CSS oraz skierowało w stronę JS'a i React'a!",
		paragraph2:
			"Aktualnie pracuje w 10a, software house'ie skoncentrowanym na tworzeniu wysokiej jakości rozwiązań cyfrowych. Skupiam się głównie na tworzeniu nowych funkcjonalności dla aplikacji mobilnych oraz webowych naszych klientów.",
		paragraph3:
			'Niedawno rozpocząłem pracę nad swoją aplikacją, która skupia się na usprawnieniu zakupów stacjonarnych, wyszukiwaniu promocji czy dzielenia listy zakupów w czasie rzeczywistym.',
		paragraph4: 'Oto kilka technologii, z którymi pracuje na codzień:',
		stackList,
	},
};
