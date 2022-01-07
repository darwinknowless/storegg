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
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* All Dependencies Here/Global Style */}
			<Head>
				{/* Bootsrap CSS */}
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
					crossOrigin='anonymous'
				/>
				{/* Google Fonts */}
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
				{/* AOS Animation */}
				<link
					href='https://unpkg.com/aos@2.3.1/dist/aos.css'
					rel='stylesheet'
				/>
				{/* Call Bootsrap JS */}
				<script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
					crossOrigin='anonymous'
				/>
			</Head>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;
