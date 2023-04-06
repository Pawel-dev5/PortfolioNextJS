import { IconFacebook } from 'components/Icons/Facebook';
import { IconGitHub } from 'components/Icons/Github';
import { IconLinkedin } from 'components/Icons/LinkedIn';
import { IconLoader } from 'components/Icons/IconLoader';
import { IconLogo } from 'components/Icons/IconLogo';
import { IconExternal } from 'components/Icons/External';

export type IconTypes = 'GitHub' | 'LinkedIn' | 'Facebook' | 'Loader' | 'Logo' | 'External';

export const Icon = ({ name }: { name: IconTypes }) => {
	switch (name) {
		case 'GitHub':
			return <IconGitHub />;
		case 'LinkedIn':
			return <IconLinkedin />;
		case 'Facebook':
			return <IconFacebook />;
		case 'Loader':
			return <IconLoader />;
		case 'Logo':
			return <IconLogo />;
		case 'External':
			return <IconExternal />;
		default:
			return null;
	}
};
