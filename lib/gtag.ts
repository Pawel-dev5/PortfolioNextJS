type GTagArg = string | number | Date | Record<string, unknown> | undefined;

declare global {
	interface Window {
		gtag: (command: string, ...args: GTagArg[]) => void;
	}
}

export const GA_TRACKING_ID = 'G-0F4PYQ46H6';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	if (typeof window.gtag !== 'undefined') {
		window.gtag('config', GA_TRACKING_ID, {
			page_path: url,
		});
	}
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};
