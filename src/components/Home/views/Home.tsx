import { useEffect, useState } from 'react';

// I18N
import { newsContent } from 'translations/content';

// STYLES
import { StyledHomeContainer } from 'components/Home/views/Styles';

export const Home = ({ locale }: { locale: string }) => {
	const { title } = newsContent[locale];
	const [isAnimated, setIsAnimated] = useState(false);

	useEffect(() => {
		const timeoutRest = setTimeout(() => {
			setIsAnimated(true);
		}, 1100);

		return () => {
			clearTimeout(timeoutRest);
		};
	}, []);

	return (
		<StyledHomeContainer animated={isAnimated}>
			<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam venenatis, tristique sapien eget, placerat
				enim. Donec a pretium orci. Nam vel lectus varius, rhoncus augue a, pharetra libero. Aenean tincidunt, velit congue
				pellentesque condimentum, sem libero efficitur tortor, non auctor orci urna ultricies augue. Praesent vehicula arcu
				id sapien ultrices, quis luctus est tempor. Duis malesuada risus a massa consequat, vel vulputate enim molestie.
				Morbi feugiat, dolor sodales euismod interdum, dui risus auctor lacus, ac euismod ligula est at sapien. Phasellus
				blandit ultricies orci, sit amet consectetur nulla aliquet ac. Duis eget libero risus. Nunc congue finibus semper.
				Quisque quis commodo metus. Etiam id pellentesque ex. Aliquam eleifend ipsum eget mi maximus finibus. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu convallis sapien. Curabitur
				sit amet elit nisi. Suspendisse ullamcorper vitae erat eget venenatis. Maecenas convallis, augue luctus tristique
				sodales, elit est pretium magna, et mollis ante ipsum at augue. Nam euismod dui in odio molestie, et blandit sem
				finibus. Cras viverra ac turpis non feugiat. Etiam ornare imperdiet interdum. Curabitur a ultrices risus. Morbi id
				nisl sollicitudin, cursus mi id, mattis erat. Etiam placerat sed ligula eget feugiat. Vestibulum in vehicula nunc.
				Donec id sapien in urna hendrerit pharetra quis non erat. Vivamus scelerisque nulla molestie mollis efficitur. Donec
				aliquam erat quis nisl mollis eleifend. Proin auctor lectus libero, ut malesuada sem posuere eu. Quisque pharetra mi
				at rhoncus lobortis. Phasellus ipsum tortor, facilisis at sagittis vitae, varius in libero. Duis eget venenatis
				lectus, ac pulvinar mauris. Etiam egestas dapibus elit ut rutrum. Fusce vel ligula sed tellus ultricies pulvinar. Ut
				aliquet dui ac justo venenatis blandit. Etiam laoreet nisl nec ligula semper scelerisque. Ut quis tincidunt erat.
				Vivamus in turpis aliquet, semper risus vel, laoreet sapien. Nullam pretium arcu mi, non aliquam orci blandit in.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur quis
				efficitur ligula, eget sagittis elit. Nam luctus velit nunc, sed pharetra leo sodales ac. Morbi tincidunt massa ut
				felis sodales, sed tristique purus vestibulum. Curabitur a vulputate tellus. Duis congue, ipsum id ullamcorper
				ornare, sapien dui condimentum arcu, a malesuada urna sem ac mauris. Nulla mi urna, dignissim eu ligula vitae,
				consectetur volutpat turpis. Nam pellentesque nibh vitae nunc suscipit feugiat. Vivamus interdum enim ut odio aliquam
				consectetur. Cras efficitur odio ut mattis tempus. Aenean congue ante ac risus tempus, non mollis sem pretium. Orci
				varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eget erat tempor, faucibus
				dui eget, tristique libero. Sed sit amet.
			</span>
			<br />

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
		</StyledHomeContainer>
	);
};
