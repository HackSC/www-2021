import Head from 'next/head';
import Header from '@/components/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import { NextPage } from 'next';
import { Details as DetailsSection } from '@/components/front/details';
import { Connectivity as ConnectivitySection } from '@/components/front/connectivity';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>HackSC 2021 - Connect the World</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className={styles.wrapper}>
				<Header />
				<FirstSection />
				<DetailsSection />
				<ConnectivitySection />
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
		</>
	);
};

export default Home;
