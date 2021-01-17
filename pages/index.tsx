import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import { Details as DetailsSection } from '@/components/front/details';
import { Connectivity as ConnectivitySection } from '@/components/front/connectivity';
import { Sponsors } from '@/components/front/sponsors';

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="HackSC 2021 - Connect the World"
				description="Free and online from February 19-21. Apps open to college students in November."
				canonical="https://hacksc.com"
				openGraph={{
					url: 'https://hacksc.com',
					title: 'HackSC 2021',
					description:
						'Connect the world at HackSC. Free and online from February 19-21.',
					images: [
						{
							url: 'https://hacksc.com/images/og.png',
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
				additionalMetaTags={[
					{
						property: 'keywords',
						content:
							'hackathon, hacksc, college, USC, university of southern california, educate, code, hack',
					},
				]}
			/>
			<Head>
				<link rel="icon" href="/images/favicon_64.png" />
			</Head>
			<div className={styles.wrapper}>
				<Header />
				<FirstSection />
				<DetailsSection />
				<ConnectivitySection />
				<Sponsors />
				<Footer />
				<style jsx global>
					{`
						section {
							margin-bottom: var(--gap);
							height: 100vh;
						}

						@media only screen and (max-width: 960px) {
							section {
								height: auto;
								min-height: 100vh;
							}
						}
					`}
				</style>
			</div>
		</>
	);
};

export default Home;
