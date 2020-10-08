import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import Cards from '@/components/connect/cards';
import { Fade } from 'react-reveal/Fade';

const PDF = dynamic(() => import('@/components/connect/pdf'), { ssr: false });

const HackSConnect: NextPage = () => {
	return (
		<>
			<NextSeo
				title="HackSConnect - a virtually hosted platform for collaboration between companies, teams, and ideas."
				description="Expanding your network virtually can be hard but HackSConnect will be a garden of students buzzing, connecting and exchanging rad ideas."
				canonical="https://hacksc.com/hacksconnect"
				openGraph={{
					url: 'https://hacksc.com/hacksconnect',
					title: 'HackSC 2021',
					description:
						'HackSConnect will be a garden of students buzzing, connecting and exchanging rad ideas: October 8, 2020.',
					// images: [
					// 	{
					// 		url: 'https://hacksc.com/images/og.png',
					// 		width: 800,
					// 		height: 600,
					// 		alt: 'We hope to see you at HackSC 2021!',
					// 	},
					// ],
					site_name: 'HackSC Connect',
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
			<div style={{ marginBottom: 'calc(var(--gap-double) * 2)' }}>
				<Fade>
					<Header />
				</Fade>
				<section className="first">
					<Fade ssrFadeout>
						<h1> HackSConnect </h1>
						<p>
							Connect with other creators to <span>grow your ideas</span> and{' '}
							<span> flourish.</span>{' '}
						</p>
						<p>10.08.20 | 6 - 9 PM PST</p>
						<p className="desc">
							HackSConnect is a virtually hosted idea exchange platform for
							collaboration between companies, teams, and ideas. Open to all
							majors, all are welcome to connect.{' '}
						</p>
						<p className="desc">
							Expanding your network virtually can be hard but HackSConnect will
							be a garden of students buzzing, connecting and exchanging rad
							ideas and will help you find great new recruits, ideas, and
							co-founders!
						</p>
						<p className="desc">
							Attendees will be divided into the following three groups:{' '}
						</p>
						<Cards />
						<p className="desc">
							Our Seeds and Sprouts registration is closed, but Bee attendees
							are still encouraged to sign-up{' '}
							<a href="https://hacksc.typeform.com/to/hfbb6YDj">here!</a>
						</p>
						<h2>Event Schedule (PST)</h2>
						<ul
							style={{
								width: '70%',
								margin: 'var(--gap) auto',
								textAlign: 'left',
							}}
						>
							<li>6:00 &mdash; 6:15 pm: Event lobby and Introduction</li>
							<li>
								6:15 pm &mdash; 7:00 pm: Fireside Chat with CEO of Highkey, Vili
								Vaanenan
							</li>
							<li>
								7:00 pm &mdash; 9:00 pm: Open Expo: Bees can buzz around and
								meet our seeds and sprouts!
							</li>
						</ul>
						<h2>Important Information</h2>
						<PDF />
					</Fade>
				</section>
				<style jsx global>
					{`
						.first {
							text-align: center;
							margin: var(--gap) auto;
						}

						.first p {
							font-size: 28px;
							font-weight: 800;
						}

						.first .desc {
							font-size: 22px;
							font-weight: 400;
							text-align: left;
							width: 70%;
							margin: var(--gap) auto;
						}

						p span {
							background-color: black;
							color: white;
							padding: 0px var(--gap-quarter);
						}

						p a {
							text-decoration: underline;
						}

						section {
							width: 75%;
							margin: 0 auto;
						}
					`}
				</style>
			</div>
			<Fade>
				<Footer />
			</Fade>
		</>
	);
};

export default HackSConnect;
