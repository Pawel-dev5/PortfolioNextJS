import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Paweł Nowecki - Fullstack Developer',
	description:
		'Portfolio Senior Fullstack Developera. Strony internetowe, sklepy internetowe, aplikacje mobilne, systemy dedykowane, wdrożenia AI.',
	openGraph: {
		title: 'Paweł Nowecki - Fullstack Developer',
		description:
			'Portfolio Senior Fullstack Developera. Strony internetowe, sklepy internetowe, aplikacje mobilne, systemy dedykowane, wdrożenia AI.',
		images: ['/assets/pawelnowecki.jpeg'],
		locale: 'pl',
		type: 'website',
		url: 'https://pawelnowecki.pl',
		siteName: 'Paweł Nowecki - Fullstack Developer',
	},
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="pl" className="scroll-smooth">
		<body className="antialiased min-h-screen relative overflow-x-hidden">
			<div className="min-h-screen bg-background">
				<Header />
				<main className="overflow-x-hidden">{children}</main>
				<Contact />
				<Footer />
			</div>
		</body>
	</html>
);

export default RootLayout;
