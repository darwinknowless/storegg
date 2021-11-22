import '../styles/utilities.css'; // Import style here
import '../styles/homepage.css'; // Import style here
import '../styles/detail.css'; // Import style here
import '../styles/checkout.css'; // Import style here
import '../styles/complete-checkout.css'; // Import style here
import '../styles/sign-in.css'; // Import style here
import '../styles/sign-up.css'; // Import style here
import '../styles/sign-up-photo.css'; // Import style here
import '../styles/sign-up-success.css'; // Import style here
import '../styles/404-not-found.css'; // Import style here
import '../styles/sidebar.css'; // Import style here
import '../styles/overview.css'; // Import style here
import '../styles/transactions.css'; // Import style here
import '../styles/transactions-detail.css'; // Import style here
import '../styles/edit-profile.css'; // Import style here
import '../styles/navbar-log-in.css'; // Import style here
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
	configurable: true,
	value: (props) => <img {...props} />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
