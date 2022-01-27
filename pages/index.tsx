import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS Here
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

const Home: NextPage = () => {
	// Call AOS Animation
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			{/* --- Setup Basic SEO : Customize in every page --- */}
			<Head>
				<title>StoreGG - Get a New Experience in Gaming</title>
				<meta
					name='description'
					content='StoreGG is a new gaming experience that allows you to buy and sell games and accessories for free.'
				/>
				{/* --- Social Media Meta Tags --- */}
				<meta property='og:title' content='StoreGG - Social Media.' />
				<meta
					property='og:description'
					content='StoreGG - Description in Social Media.'
				/>
				<meta property='og:image' content='https://yourimageurl' />
				<meta property='og:url' content='https://storegg.com' />
			</Head>
			{/* --- Navbar --- */}
			<Navbar />
			{/* --- Header --- */}
			<MainBanner />
			{/* --- 3 Column - Featured-step --- */}
			<TransactionStep />
			{/* --- 5 Column - Featured-game --- */}
			<FeaturedGame />
			{/* --- Reached --- */}
			<Reached />
			{/* --- Story --- */}
			<Story />
			{/* --- Footer --- */}
			<Footer />
		</>
	);
};

export default Home;
