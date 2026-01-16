const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-secondary/50 border-t border-border">
			<div className="section-container py-8 text-center">
				<p className="text-sm text-muted-foreground">© {currentYear} Paweł Nowecki. Wszelkie prawa zastrzeżone.</p>
			</div>
		</footer>
	);
};

export default Footer;
