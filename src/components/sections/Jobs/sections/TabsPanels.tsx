// COMPONENTS
import { CompanyLink } from 'components/common';

// I18N
import { JobInnerContentType } from 'translations/models/content';

// STYLES
import { StyledTabPanel, StyledTabPanels } from 'components/sections/Jobs/sections/Styles';

export const TabsPanels = ({ activeTab }: { activeTab: JobInnerContentType }) => (
	<StyledTabPanels>
		{activeTab && (
			<StyledTabPanel key={activeTab?.id} role="tabpanel">
				<h3>
					<span>{activeTab?.jobTitle}</span>
					<span className="company">
						<CompanyLink company={activeTab?.company} url={activeTab?.url} variant="BIG" />
					</span>
				</h3>

				<p className="range">{activeTab?.range}</p>

				<ul>
					{activeTab?.descriptions?.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</StyledTabPanel>
		)}
	</StyledTabPanels>
);
