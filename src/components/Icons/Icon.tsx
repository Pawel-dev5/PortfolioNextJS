import styled from 'styled-components';

// COMPONENTS
import { IconFacebook } from 'components/Icons/Facebook';
import { IconGitHub } from 'components/Icons/Github';
import { IconLinkedin } from 'components/Icons/LinkedIn';
import { IconLoader } from 'components/Icons/IconLoader';
import { IconLogo } from 'components/Icons/IconLogo';
import { IconExternal } from 'components/Icons/External';
import { IconFolder } from 'components/Icons/Folder';

export type IconTypes = 'GitHub' | 'LinkedIn' | 'Facebook' | 'Loader' | 'Logo' | 'External' | 'Folder';

const StyledIconWrapper = styled.div`
	> svg {
		:hover {
			color: ${({ theme }) => theme.secondaryColor};
			transform: translateY(-3px);
			transition: ${({ theme }) => theme.transition};
		}
	}
`;

const IconWrapper = ({ name }: { name: IconTypes }) => {
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
		case 'Folder':
			return <IconFolder />;
		default:
			return null;
	}
};

export const Icon = ({ name }: { name: IconTypes }) => (
	<StyledIconWrapper>
		<IconWrapper name={name} />
	</StyledIconWrapper>
);
