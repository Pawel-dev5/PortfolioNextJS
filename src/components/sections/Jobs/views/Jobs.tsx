import { useEffect, useState } from 'react';

// I18N
import { jobsContent } from 'locales/jobs';

// COMPONENTS
import { SectionTitle } from 'components/common';
import { TabsPanels } from 'components/sections/Jobs/sections';

// STYLES
import {
	StyledJobsConteiner,
	StyledTabList,
	StyledTabButton,
	StyledHighlight,
	StyledTabsWrapper,
} from 'components/sections/Jobs/views/Styles';

// UTILS
import { findObjectInArray } from 'helpers/arrayHelpers';

// MODELS
import { JobInnerContentType } from 'locales/models/content';

export const Jobs = ({ locale }: { locale: string }) => {
	const { sectionTitle, jobs } = jobsContent[locale];

	const [activeTabId, setActiveTabId] = useState(1);
	const [activeTab, setActiveTab] = useState<JobInnerContentType | null>(null);

	useEffect(() => {
		const findActiveTab = findObjectInArray(jobs, 'id', activeTabId);
		setActiveTab(findActiveTab);
	}, [activeTabId]);

	return (
		<StyledJobsConteiner>
			<SectionTitle counter={2} title={sectionTitle} id="jobs" />

			<StyledTabsWrapper>
				<StyledTabList role="tablist" aria-label="Job tabs">
					{jobs?.map(({ company, id }) => (
						<StyledTabButton key={id} isActive={activeTabId === id} onClick={() => setActiveTabId(id)} role="tab">
							{company}
						</StyledTabButton>
					))}

					<StyledHighlight activeTabId={activeTabId - 1} />
				</StyledTabList>

				{activeTab && <TabsPanels activeTab={activeTab} />}
			</StyledTabsWrapper>
		</StyledJobsConteiner>
	);
};
