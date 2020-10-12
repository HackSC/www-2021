import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import Image from '@/components/image';
import Schedule from '@/components/diversity/schedule';

const HackSConnect: NextPage = () => {
	return (
		<div style={{ width: '100vw' }}>
			<NextSeo
				title="USC Hack for Diversity and Inclusion"
				description="A beginner hackathon dedicated to supporting the BIPOC community by combating bias and creating equitable solutions for real-world challenges."
				canonical="https://hacksc.com/diversityandinclusion"
				openGraph={{
					url: 'https://hacksc.com/diversityandinclusion',
					title: 'USC Hack for Diversity and Inclusion',
					description:
						'A beginner hackathon dedicated to supporting the BIPOC community by combating bias and creating equitable solutions for real-world challenges.',
					images: [
						{
							url: 'https://hacksc.com/images/di_og.png',
							width: 800,
							height: 600,
							alt: 'We hope to see you at the hackathon!',
						},
					],
					site_name: 'HackSC - USC Hack for Diversity and Inclusion',
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
							'diversity, inclusion, Girls in Tech, National Society of Black Engineers, Society of Hispanic Professional Engineers, hackathon, hacksc, college, USC, university of southern california, educate, code, hack',
					},
				]}
			/>
			<Head>
				<link rel="icon" href="/images/favicon_64.png" />
			</Head>
			<div>
				<Header />
				<section className="first">
					<div className="details">
						<h1> A 24 Hour Hackathon for Diversity and Inclusion </h1>
						{/* <p className="hosts">
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
						</p> */}
						<Image
							alt=""
							className="logo"
							path="di.png"
							width={275}
							height={'auto'}
						/>
					</div>
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
						workshops and resources for beginner hackers.
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://hacksc.typeform.com/to/hN6g49Ej"
						className="apply"
					>
						<button>Sign Up</button>
					</a>
					<div>
						<h2>Prizes</h2>
						There is <strong>$3,000 in prize money</strong> for winners to
						donate to the following organizations:
						<div className="column">
							<ul>
								<li>Compton Collective</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.blackgirlscode.com/"
									>
										Black Girls Code{' '}
									</a>{' '}
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.troycamp.org/"
									>
										Troy Camp
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.blackouttheballot.com/"
									>
										Black Out the Ballot
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://nsbejrsocal.org/"
									>
										NSBE Jr. So Cal
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://hispanicfederation.org/"
									>
										Hispanic Federation
									</a>
								</li>
							</ul>
						</div>
					</div>
					<h2>Schedule</h2>
					<Schedule />
					<h2>Presented By</h2>

					<div className="row">
						<div className="column">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://usc.girlsintech.org/"
							>
								<Image path={'git.png'} width={200} />
							</a>
							<a target="_blank" rel="noreferrer" href="https://uscnsbe.com/">
								<Image path={'nsbe.png'} width={200} />
							</a>
						</div>
						<div className="column">
							<a target="_blank" rel="noreferrer" href="https://shpeusc.com/">
								<Image path={'shpe.png'} width={200} />
							</a>
							<a target="_blank" rel="noreferrer" href="https://hacksc.com">
								<Image path={'logoAndTextDark.png'} width={200} />
							</a>
						</div>
						<div className="singleColumn">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://boeing.com"
								style={{ fontWeight: 800, fontSize: '3rem' }}
							>
								<span>
									<i>Boeing</i>
								</span>
							</a>
						</div>
					</div>
				</section>
				<style jsx global>
					{`
						.first {
							margin: var(--gap) auto;
							font-size: 20px;
						}

						.desc {
							font-size: inherit;
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

						.first a {
							text-decoration: none !important;
							color: black;
							background: linear-gradient(
								180deg,
								rgba(255, 255, 255, 0) 70%,
								rgba(0, 0, 0, 0.2) 70%
							);
							cursor: pointer;
						}

						.first a:hover {
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
							max-width: 750px;
							margin: 0 auto;
						}

						@media only screen and (max-width: 768px) {
							section {
								width: 100%;
							}
						}

						.first .apply {
							display: block;
							text-align: center;
							background: none;
						}

						.first .apply:hover {
							background-color: transparent;
						}

						.first .apply button {
							align-self: center;
							background: var(--blue);
							border-radius: var(--radius);
							cursor: pointer;
							width: 150px;
							height: 75px;
							color: white;
							text-align: center;
							letter-spacing: 1px;
							text-transform: uppercase;
							font-style: normal;
							font-weight: 800;
							font-size: 22px;
							box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
						}

						.first .apply button:hover {
							box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
							transition: all 0.2s ease;
						}

						.first a {
							text-decoration: none !important;
							color: black;
							background: linear-gradient(
								180deg,
								rgba(255, 255, 255, 0) 70%,
								rgba(0, 0, 0, 0.2) 70%
							);
							cursor: pointer;
						}

						.first a:hover {
							background-color: black;
							color: white;
							transition: all 0.5s ease;
						}

						.row a {
							background: none;
						}

						.row a:hover {
							transition: none;
							background: none;
							color: black;
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

						.singleColumn {
							display: flex;
							flex: 100%;
							max-width: 100%;
							padding: var(--gap);
							justify-content: center;
						}

						.singleColumn span {
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

							.first {
								margin: var(--gap);
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
