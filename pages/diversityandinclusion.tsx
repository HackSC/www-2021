import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import Fade from 'react-reveal/Fade';
import Image from '@/components/image';

const HackSConnect: NextPage = () => {
	return (
		<div style={{ width: '100vw' }}>
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
				<Header />
				<section className="first">
					<Fade delay={100}>
						<div className="details">
							<h1> A 24 Hour Hackathon for Diversity and Inclusion </h1>
							<p className="hosts">
								Hosted by{' '}
								<a href="https://usc.girlsintech.org/">Girls in Tech</a>,{' '}
								<a href="https://uscnsbe.com/">
									National Society of Black Engineers
								</a>
								,{' '}
								<a href="https://shpeusc.com/">
									Society of Hispanic Professional Engineers
								</a>
								, and HackSC!
							</p>
							<Image
								alt=""
								className="logo"
								path="di.png"
								width={150}
								height={250}
							/>
						</div>
					</Fade>
					<Fade delay={400}>
						<p className="desc">
							Welcome to USC Hack for Diversity and Inclusion &mdash;{' '}
							<strong>
								a beginner hackathon dedicated to supporting the{' '}
								<abbr title="Black, Indigenous and People of Color">BIPOC</abbr>{' '}
								community
							</strong>{' '}
							by combating bias and creating equitable solutions for real-world
							challenges.
						</p>
						<p className="desc">
							{/* Hosted in collaboration with <abbr title="Girls in Tech">GIT</abbr>, <abbr title="National Society of Black Engineers">NSBE</abbr>, <abbr title="Society of Hispanic Professional Engineers">SHPE</abbr>, and HackSC,
							 */}
							USC Hack for Diversity and Inclusion will have many exciting
							workshops and resources for beginner hackers. We hope to bring
							together hackers who have a passion for and commitment to
							diversity, equity, and inclusion to discuss and hack into
							difficult topics in a respectful and safe setting.
						</p>
					</Fade>
					<Fade delay={800}>
						<a href="https://hacksc.typeform.com/to/hN6g49Ej" className="apply">
							<button>Apply Now</button>
						</a>
					</Fade>
					<Fade delay={800}>
						<h2>Presented By</h2>
						<div className="row">
							<div className="column">
								<Image path={'git.png'} width={200} />
								<Image path={'nsbe.png'} width={200} />
							</div>
							<div className="column">
								<Image path={'shpe.png'} width={200} />
								<Image path={'logoAndTextDark.png'} width={200} />
							</div>
						</div>
					</Fade>
				</section>
				<style jsx global>
					{`
						.first {
							margin: var(--gap-double) auto;
						}

						.desc,
						.details {
							margin: var(--gap-double);
						}

						.desc {
							font-size: 20px;
						}

						.details h1 {
							margin-bottom: var(--gap-quarter);
						}

						.details .logo {
							display: block;
							margin-left: auto;
							margin-right: auto;
							margin-bottom: var(--gap-half);
						}

						.details .hosts a {
							text-decoration: none !important;
							background: linear-gradient(
								180deg,
								rgba(255, 255, 255, 0) 70%,
								rgba(0, 0, 0, 0.2) 70%
							);
							cursor: pointer;
						}

						.details .hosts a:hover {
							background-color: black;
							color: white;
							transition: all 0.5s ease;
						}

						.details .hosts {
							font-size: 22px;
							font-weight: 400;
							margin: 0;
						}

						section {
							width: 70%;
							max-width: 800px;
							margin: 0 auto;
						}

						@media only screen and (max-width: 768px) {
							section {
								width: 100%;
							}
						}

						.apply {
							display: block;
							text-align: center;
						}

						.apply button {
							align-self: center;
							background: var(--blue);
							border-radius: var(--radius);
							cursor: pointer;
							width: 200px;
							height: 75px;
							color: white;
							text-align: center;
							letter-spacing: 1px;
							text-transform: uppercase;
							font-style: normal;
							font-weight: 800;
							font-size: 18px;
							box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
						}

						.apply button:hover {
							box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
							transition: all 0.2s ease;
						}

						.row {
							display: flex;
							flex-wrap: wrap;
							padding: 0 4px;
							width: 100%;
						}

						.column {
							flex: 50%;
							max-width: 50%;
							padding: var(--gap);
						}

						.column img {
							margin: var(--gap-double);
							vertical-align: middle;
							width: 65%;
							height: auto;
						}

						/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
						@media screen and (max-width: 768px) {
							.column {
								flex: 100%;
								max-width: 100%;
							}
						}
					`}
				</style>
			</div>
			<Footer />
		</div>
	);
};

export default HackSConnect;
