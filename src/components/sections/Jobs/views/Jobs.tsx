import { useState } from 'react';

// COMPONENTS
import { SectionTitle } from 'components/common';

export const Jobs = () => {
	const [currentJob, setCurrentJob] = useState(0);

	return (
		<div>
			<SectionTitle counter={2} title="About me" />
		</div>
	);
};
