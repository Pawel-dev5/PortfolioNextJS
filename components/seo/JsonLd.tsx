export const JsonLd = () => {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Paweł Nowecki',
		url: 'https://pawelnowecki.pl',
		image: 'https://pawelnowecki.pl/assets/pawelnowecki.jpeg',
		jobTitle: 'Fullstack Developer',
		sameAs: ['https://linkedin.com/in/pawel-nowecki', 'https://github.com/Pawel-dev5'],
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+48-791-893-867',
			contactType: 'customer service',
			email: 'p.nowecki@gmail.com',
		},
		knowsAbout: [
			'Web Development',
			'Mobile Applications',
			'Artificial Intelligence',
			'Process Automation',
			'React',
			'Next.js',
			'React Native',
		],
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default JsonLd;
