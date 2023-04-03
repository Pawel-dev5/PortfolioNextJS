import { useState, useEffect } from 'react';
import Head from 'next/head';

// I18N
import { newsContent } from 'translations/content';

// COMPONENTS
import { Loader } from 'components/Loader';
import { Navigation } from 'components/Navigation';

// MODELS
import { HomeInterface } from 'pages/models/home';

// STYLES
import { StyledLayout, StyledBodyContainer } from 'pages/Styles';

const Home = ({ toggleTheme, isDarkTheme, locale }: HomeInterface) => {
	const { title } = newsContent[locale];

	const [loadingStatus, setLoadingStatus] = useState('PENDING');
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		// setLoadingStatus('LOADING');
		// TMP
		setLoadingStatus('DONE');
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
						<Navigation
							toggleTheme={toggleTheme}
							isDarkTheme={isDarkTheme}
							menuIsOpen={menuIsOpen}
							setMenuIsOpen={setMenuIsOpen}
						/>
						<StyledBodyContainer menuIsOpen={menuIsOpen}>
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
							<br />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam venenatis, tristique sapien eget,
								placerat enim. Donec a pretium orci. Nam vel lectus varius, rhoncus augue a, pharetra libero. Aenean
								tincidunt, velit congue pellentesque condimentum, sem libero efficitur tortor, non auctor orci urna ultricies
								augue. Praesent vehicula arcu id sapien ultrices, quis luctus est tempor. Duis malesuada risus a massa
								consequat, vel vulputate enim molestie. Morbi feugiat, dolor sodales euismod interdum, dui risus auctor
								lacus, ac euismod ligula est at sapien. Phasellus blandit ultricies orci, sit amet consectetur nulla aliquet
								ac. Duis eget libero risus. Nunc congue finibus semper. Quisque quis commodo metus. Etiam id pellentesque ex.
								Aliquam eleifend ipsum eget mi maximus finibus. Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Sed eu convallis sapien. Curabitur sit amet elit nisi. Suspendisse
								ullamcorper vitae erat eget venenatis. Maecenas convallis, augue luctus tristique sodales, elit est pretium
								magna, et mollis ante ipsum at augue. Nam euismod dui in odio molestie, et blandit sem finibus. Cras viverra
								ac turpis non feugiat. Etiam ornare imperdiet interdum. Curabitur a ultrices risus. Morbi id nisl
								sollicitudin, cursus mi id, mattis erat. Etiam placerat sed ligula eget feugiat. Vestibulum in vehicula nunc.
								Donec id sapien in urna hendrerit pharetra quis non erat. Vivamus scelerisque nulla molestie mollis
								efficitur. Donec aliquam erat quis nisl mollis eleifend. Proin auctor lectus libero, ut malesuada sem posuere
								eu. Quisque pharetra mi at rhoncus lobortis. Phasellus ipsum tortor, facilisis at sagittis vitae, varius in
								libero. Duis eget venenatis lectus, ac pulvinar mauris. Etiam egestas dapibus elit ut rutrum. Fusce vel
								ligula sed tellus ultricies pulvinar. Ut aliquet dui ac justo venenatis blandit. Etiam laoreet nisl nec
								ligula semper scelerisque. Ut quis tincidunt erat. Vivamus in turpis aliquet, semper risus vel, laoreet
								sapien. Nullam pretium arcu mi, non aliquam orci blandit in. Pellentesque habitant morbi tristique senectus
								et netus et malesuada fames ac turpis egestas. Curabitur quis efficitur ligula, eget sagittis elit. Nam
								luctus velit nunc, sed pharetra leo sodales ac. Morbi tincidunt massa ut felis sodales, sed tristique purus
								vestibulum. Curabitur a vulputate tellus. Duis congue, ipsum id ullamcorper ornare, sapien dui condimentum
								arcu, a malesuada urna sem ac mauris. Nulla mi urna, dignissim eu ligula vitae, consectetur volutpat turpis.
								Nam pellentesque nibh vitae nunc suscipit feugiat. Vivamus interdum enim ut odio aliquam consectetur. Cras
								efficitur odio ut mattis tempus. Aenean congue ante ac risus tempus, non mollis sem pretium. Orci varius
								natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eget erat tempor, faucibus
								dui eget, tristique libero. Sed sit amet enim a erat viverra eleifend et non nisi. Curabitur dignissim varius
								nisi, eu condimentum velit feugiat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia
								nostra, per inceptos himenaeos. Aliquam lorem purus, convallis sed augue sit amet, iaculis sollicitudin
								mauris. Ut aliquam sapien vel lacus lacinia maximus. Nunc eu commodo mi, a vehicula lectus. Sed non sapien ac
								dui mattis ultricies vel a ipsum. Donec id ornare felis. Nulla imperdiet magna id massa molestie, nec aliquet
								magna aliquet. Ut a eros a est facilisis fringilla a vitae lacus. Etiam pretium ligula tempor dui mattis,
								eget maximus ipsum egestas. Donec fermentum metus eget nibh mattis luctus. Nam dapibus augue sed metus
								vehicula, et interdum nunc pretium. Mauris tincidunt eu augue maximus porttitor. In in interdum leo. Etiam et
								leo eu ligula viverra interdum. Sed consequat lectus vel lacus fermentum lacinia. In dolor elit, volutpat eu
								urna vel, dictum dignissim augue. Quisque eget justo nisl. Mauris a sapien sapien. Aliquam vehicula tellus
								vitae nibh fermentum finibus. Vestibulum pharetra tellus vel arcu varius, ac dignissim mauris semper. In hac
								habitasse platea dictumst. Praesent mollis risus sed mi tempor, vitae tempor libero aliquet. Nulla fermentum
								a nulla et lobortis. Ut non mollis est, et maximus dolor. Maecenas sed rhoncus neque. Etiam placerat risus
								non aliquam pulvinar. Duis aliquam odio eu tellus faucibus, sit amet tempus est interdum. Aliquam placerat
								orci vel massa imperdiet, vel posuere purus elementum. Vestibulum at egestas enim. Fusce ut pellentesque
								nisl. Mauris eu orci in arcu vestibulum laoreet. Sed consequat lacinia mi, at euismod est sollicitudin vitae.
								Duis lobortis ultricies ornare. Maecenas commodo accumsan urna eu accumsan. Phasellus nec tellus ex.
								Curabitur at magna erat. Donec tincidunt ligula a lacus porta gravida semper maximus nisl. Etiam dignissim
								nulla et urna sollicitudin, sed dapibus quam euismod. Donec laoreet erat quis mauris malesuada pellentesque.
								Maecenas at sapien id purus hendrerit scelerisque vel eu enim. Nunc ornare in nibh sit amet feugiat. Sed nec
								euismod nunc, nec cursus mauris. Nulla congue metus sed lectus vehicula, a interdum ligula pretium. Aenean
								suscipit ex at tempor vestibulum. Integer nec odio sodales, laoreet velit id, fringilla elit. Ut at egestas
								nibh. Ut purus nunc, venenatis non pharetra ut, iaculis ac ligula. Quisque elit ante, aliquet vitae urna in,
								cursus hendrerit diam. Nam velit enim, auctor dignissim finibus maximus, dictum vitae ipsum. Praesent finibus
								nisl enim, eu pulvinar dui ultricies nec. Vestibulum tempus, leo in molestie convallis, elit odio pulvinar
								neque, vitae scelerisque urna neque nec ipsum. Donec id felis id nisi fermentum tempor ac id turpis.
								Suspendisse tincidunt pharetra pharetra. Sed et tellus lacinia, vestibulum odio ut, porttitor erat. Sed eu
								molestie ipsum. Mauris maximus dolor vel tellus vestibulum condimentum. Nullam ut ex odio. Aenean vel augue
								luctus, porttitor ipsum ut, vestibulum nulla. Aenean id orci vel nulla finibus euismod. Nulla a nunc
								volutpat, faucibus dui id, porttitor velit. Curabitur sodales pharetra massa, ut imperdiet metus rutrum a.
								Suspendisse in venenatis nibh. Nam fermentum mauris neque, eu vestibulum tellus dignissim ut. Interdum et
								malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae vehicula nisi. Sed ac nulla sollicitudin,
								tincidunt mi vel, luctus arcu. In hac habitasse platea dictumst. Nunc luctus lacus elit, vitae egestas massa
								eleifend quis. Sed at commodo nisi. Etiam semper diam vitae justo laoreet, ut scelerisque lacus lacinia. Ut
								accumsan diam quis augue consectetur ultricies. Praesent elementum, dui vitae iaculis condimentum, leo nibh
								eleifend tellus, ultrices feugiat tellus tortor nec sapien. Morbi porttitor egestas eros, vel lacinia ligula
								euismod eu. Sed et enim ut magna bibendum varius. Fusce placerat nunc nisl, id vestibulum leo tempus at. Duis
								odio sem, iaculis non tempor non, congue ut dui. Donec in lacinia erat. Vivamus facilisis odio sed purus
								fringilla, sed vehicula dui suscipit. Quisque sagittis mi a sapien efficitur, ac tristique ipsum feugiat.
								Aenean laoreet tellus quis augue suscipit dictum. Etiam purus urna, fringilla et feugiat vel, dapibus non
								orci. Cras nulla nisl, aliquet pretium pretium interdum, placerat in tellus. In bibendum, purus nec posuere
								facilisis, ipsum sapien luctus nisi, at iaculis orci lacus facilisis erat. Vestibulum ante ipsum primis in
								faucibus orci luctus et ultrices posuere cubilia curae; Praesent a ultrices augue. Suspendisse potenti.
								Aenean id pellentesque eros, vestibulum volutpat ipsum. Suspendisse pulvinar libero et justo auctor, a
								viverra augue faucibus. In rutrum velit vel lacus sollicitudin dictum. Etiam imperdiet id justo eu
								scelerisque. In mauris sem, sollicitudin in euismod a, porttitor eu mi. Nullam commodo dignissim ullamcorper.
								Quisque non varius felis. Mauris finibus eros ac mauris imperdiet pulvinar. Quisque mi nisl, eleifend eget
								metus ut, pretium venenatis elit. Sed id ante eget dolor scelerisque aliquet. Pellentesque vulputate dolor
								nec volutpat molestie. Sed in faucibus ante, posuere tempus felis. In ante erat, tempus et justo nec, blandit
								sollicitudin tellus. Morbi vitae odio leo. Morbi ac erat nunc. Quisque non dui id purus pharetra gravida.
								Donec in accumsan elit. Pellentesque egestas, lorem vitae mattis aliquam, libero dui molestie metus, in
								tempus orci nulla eget nisl. Sed porta magna ut placerat tristique. Etiam et elit non sem finibus congue.
								Nulla nec arcu quis nisi aliquam ornare. Suspendisse pharetra eu lectus commodo molestie. Aenean turpis diam,
								laoreet eu vulputate et, sodales quis risus. Sed in imperdiet magna. Pellentesque tristique urna sit amet
								augue feugiat gravida. Pellentesque maximus eu lorem vel rutrum. Cras nunc ligula, varius non ultricies nec,
								iaculis ac leo. Curabitur quis lacus efficitur, accumsan velit id, pretium sem. Nullam a metus ac mauris
								facilisis consequat. Ut pharetra finibus metus ut feugiat. In hac habitasse platea dictumst. Sed in mattis
								metus, sit amet efficitur mauris. In hac habitasse platea dictumst. Nullam vel pretium tellus, vel ultrices
								tellus. Praesent eu sem tempor, pellentesque nibh a, pulvinar leo. Fusce sed nibh mi. Suspendisse sit amet
								augue malesuada, dictum est ut, tincidunt metus. Nunc sit amet odio vitae lorem venenatis auctor at vel nisl.
								Fusce quis ipsum vel mauris ultrices egestas non sed nisi. Donec gravida massa id tincidunt iaculis. Nulla a
								rhoncus ipsum. Sed vel tortor vitae dui pellentesque placerat quis sed ipsum. Cras faucibus ornare risus et
								posuere. Nullam aliquam orci orci, vitae mattis orci facilisis nec. Nunc at metus tincidunt arcu venenatis
								fermentum sit amet in tortor. Donec faucibus ligula quis lectus imperdiet, id tempor dolor dictum. Sed sapien
								ligula, commodo at aliquet in, iaculis vitae quam. Sed at nulla mauris. Quisque ut egestas augue.
								Pellentesque eu tortor vel dolor pulvinar scelerisque ac in nisi. Nam neque libero, congue ut ligula sed,
								egestas viverra diam. Fusce finibus, orci non fringilla pellentesque, justo dolor sodales dolor, eu pulvinar
								elit metus id tortor. Nulla egestas quam tristique tellus suscipit, sit amet dictum quam pulvinar. Ut
								vehicula odio sit amet turpis pulvinar vulputate. Nunc blandit pellentesque augue eget maximus. Sed aliquet
								elit id odio facilisis, vitae tempus mauris pretium. Fusce blandit euismod quam vel ultrices. Quisque sed leo
								id magna vehicula placerat quis vel lacus. Nam pellentesque nulla ac sapien rhoncus finibus. Sed pulvinar,
								magna id venenatis ultricies, dolor neque sagittis turpis, in tempus quam turpis ac dolor. Proin tempor, nisl
								sed tincidunt lacinia, nunc lacus tempor sapien, sit amet viverra nisi augue non lacus. Quisque felis nisl,
								commodo at arcu vel, accumsan accumsan tortor. Donec id ipsum suscipit, finibus dui in, hendrerit nunc. Nam
								eu tincidunt lorem. Ut vitae tincidunt neque. Duis sed nunc ut quam sagittis mollis. Vestibulum ante ipsum
								primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur auctor neque nec ligula lacinia
								commodo. Duis consectetur tellus et ex iaculis, a faucibus diam aliquet. Aliquam erat volutpat. Donec ac
								auctor ex, id consectetur sem. Vestibulum interdum mi eu urna ornare, et venenatis enim dictum. Donec sem ex,
								sodales sed magna dictum, commodo gravida elit. Sed et lectus dui. Morbi at sagittis tellus, a suscipit nisi.
								Sed egestas nisl augue, sed pharetra odio ullamcorper at. Fusce malesuada justo quis odio dapibus auctor.
								Proin ut velit congue, ornare velit sed, gravida urna. Nulla et metus eget libero accumsan auctor lobortis
								non risus. Aenean in mollis leo. Curabitur velit ante, tempus pulvinar feugiat vitae, tempor quis quam. Sed
								sit amet urna sit amet est pellentesque ullamcorper non ac ante. Nulla vitae ante venenatis, pharetra mauris
								vitae, sollicitudin sapien. Nam sed tincidunt ante, sit amet euismod tellus. Ut aliquam feugiat nisl vel
								scelerisque. Proin id ultricies sapien, id scelerisque mi. Nam neque felis, dictum nec iaculis et, vehicula
								quis magna. Etiam porttitor quis eros eu volutpat. Morbi ex justo, dictum in euismod nec, mollis a est.
								Quisque id purus ultricies, porttitor massa at, pharetra nisi. Fusce pharetra sollicitudin justo, nec
								volutpat lorem lobortis eget. Cras non metus sapien. Etiam laoreet euismod hendrerit. Phasellus sollicitudin,
								urna id sodales fringilla, libero nibh pellentesque nisi, sed rhoncus augue dui luctus ligula. Ut vitae sem
								imperdiet, facilisis tortor in, convallis nunc. Praesent vel tempus erat. Phasellus sagittis leo non
								tristique venenatis. Suspendisse vulputate euismod sollicitudin. Phasellus posuere interdum eros, vel commodo
								odio pharetra sit amet. Duis nisi ex, vulputate sit amet arcu sit amet, rhoncus posuere neque. Proin
								imperdiet nisl eros, id blandit odio pellentesque ut. Sed hendrerit mattis velit, ac pharetra erat volutpat
								ac. Cras fringilla leo diam, ac interdum leo pulvinar eget. Phasellus ut ligula tincidunt tellus varius
								mollis. Curabitur nec odio justo. Proin ultricies odio euismod interdum hendrerit. Aenean condimentum nisi
								nulla, at porttitor orci consectetur et. Mauris nibh metus, sagittis sit amet libero accumsan, tincidunt
								efficitur dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
								Praesent non erat egestas, interdum arcu nec, egestas nibh. Cras eu volutpat ipsum, ut rhoncus diam. Fusce eu
								volutpat ligula. Aliquam nec varius augue. Phasellus bibendum gravida tellus, vitae hendrerit risus. Nulla
								pulvinar pellentesque dolor eget ultricies. Sed in eleifend massa. Mauris metus est, bibendum quis est vel,
								faucibus volutpat nulla. Suspendisse ac massa id mauris consectetur finibus. Morbi laoreet enim facilisis
								diam fermentum, sed faucibus ante venenatis. Quisque maximus lobortis libero et sodales. Maecenas urna dui,
								ornare sed metus et, sollicitudin porta massa. Vestibulum semper nulla sed lectus porttitor, ac auctor lectus
								placerat. Duis iaculis, justo nec convallis pharetra, lectus diam faucibus mauris, non vestibulum nisl ex ut
								metus. Nulla nulla lacus, lobortis eget nibh at, elementum tincidunt urna. In tempor condimentum nibh, ac
								consectetur nibh finibus aliquam. Etiam mollis mi mattis odio porttitor, nec consequat metus ultricies. Nunc
								a justo sit amet turpis pellentesque mollis. Proin placerat posuere nulla, sit amet vestibulum quam.
								Vestibulum ultricies odio nec leo viverra, nec gravida libero malesuada. Sed velit purus, viverra in finibus
								accumsan, maximus pharetra urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
								inceptos himenaeos. Donec lobortis, elit id iaculis interdum, mi orci suscipit arcu, ut blandit leo diam id
								orci. Vestibulum laoreet sapien ex, s
							</span>
						</StyledBodyContainer>
					</>
				)}
			</StyledLayout>
		</>
	);
};

export default Home;
