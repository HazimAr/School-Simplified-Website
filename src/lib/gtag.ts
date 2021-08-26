import { GA_TRACKING_ID } from "config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
	//@ts-ignore
	window.gtag("config", GA_TRACKING_ID, {
		page_location: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
	//@ts-ignore
	window.gtag("event", action, {
		event_category: category,
		event_label: label,
		value,
	});
};
