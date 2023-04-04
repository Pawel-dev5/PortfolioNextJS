// STYLES
import { StyledCompany } from 'components/common/views/Styles';

// MODELS
import { CompanyLinkInterface } from 'components/common/models/views';

export const CompanyLink = ({ company, url, variant = 'DEFAULT' }: CompanyLinkInterface) => (
	<StyledCompany href={url} target="_blank" variant={variant}>
		{company}
	</StyledCompany>
);
