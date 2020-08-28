import Head from 'next/head';
import Header from '@/components/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import { Details as DetailsSection } from '@/components/front/details';
import { Connectivity as ConnectivitySection } from '@/components/front/connectivity';

const Home: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>HackSC 2021</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<FirstSection />
			<DetailsSection />
			<ConnectivitySection />
			<Footer />
			<style jsx global>
				{`
					section {
						min-height: min-content;
						margin-bottom: var(--gap);
						height: 100vh;
					}
				`}
			</style>
		</div>
	);
};

export default Home;
