import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Paweł Nowecki - Fullstack Developer & AI Automation Expert',
	description: 'Portfolio Senior Frontend Developera & AI Eksperta. Wdrożenia AI, Automatyzacje, Systemy Dedykowane.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="pl">
		<body className="antialiased min-h-screen relative">{children}</body>
	</html>
);

export default RootLayout;
