import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS Here
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
