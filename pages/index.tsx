import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Header from '@/components/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import { NextPage } from 'next';
import { Details as DetailsSection } from '@/components/front/details';
import { Connectivity as ConnectivitySection } from '@/components/front/connectivity';

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="HackSC 2021 - Connect the World"
				description="Free and online from Feburary 19-21. Apps open in November."
				canonical="https://hacksc.com"
				openGraph={{
					url: 'https://hacksc.com',
					title: 'HackSC 2021',
					description: 'HackSC 2021 - Connec the World',
					images: [
						{
							url: '/images/og.png',
							width: 800,
							height: 600,
							alt: 'We hope to see you at HackSC 2021!',
						},
					],
					site_name: 'HackSC',
				}}
				twitter={{
					handle: '@hacksc',
					site: '@hacksc',
					cardType: 'summary_large_image',
				}}
			/>
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
