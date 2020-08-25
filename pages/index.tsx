import Head from 'next/head';
import Header from '@/components/front/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import Verticals from '@/components/front/verticals';
import FAQ from '@/components/front/faq';
import { NextPage } from 'next';
import Fade from 'react-reveal/Fade';
const Home: NextPage = () => (
	<div className={styles.wrapper}>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<FirstSection />

		<section className={styles.details} style={{ minHeight: '75vh' }}>
			<img
				alt=""
				className={styles.waves}
				height="375"
				src="/images/waves.png"
			/>
			<h1 className={styles.detailsHeading}> Details </h1>
			<div className={styles.detailsWrapper}>
				<div style={{ flexDirection: 'column' }}>
					<p>
						<strong>Want to connect the world?</strong> HackSC is USC’s largest
						hackathon! This year we are focused on ideas/solutions that will
						help connect our world during this time. Get ready for a weekend
						full of innovation, connection, and education. In an
						interdisciplinary endeavor, join together with 800+ visionaries to
						engage in workshops, listen to speakers, and develop programs,
						tools, and relationships that can last for life. We hope to have you
						join us!
					</p>
					<FAQ />
				</div>
			</div>
			<img alt="" className={styles.nodes2} src="/images/nodes-2.png" />
			<div className={styles.hand}>
				<Fade right>
					<img
						alt="A hand holding a globe. The world is in your hands at HackSC."
						width="500"
						src="/images/handglobe.png"
					/>
				</Fade>
			</div>
			<div className={styles.faq}>
				<p className={styles.faqQuestion}>WHEN?</p>
				<p className={styles.faqResponse}>February 19th - 21st, 2021.</p>

				<p className={styles.faqQuestion}>WHERE?</p>
				<p className={styles.faqResponse}>Online!</p>

				<p className={styles.faqQuestion}>PRICE?</p>
				<p className={styles.faqResponse}>Free!</p>

				<p className={styles.faqQuestion}>HOW?</p>
				<p className={styles.faqResponse}>Apps open in November.</p>
			</div>
		</section>

		<section>
			<div className={styles.connectivity}>
				<h2> Theme: Connectivity </h2>
				<hr />
				<h3
					style={{
						color: '#757575',
						textTransform: 'uppercase',
						textAlign: 'center',
						fontWeight: 'bold',
						fontSize: '40px',
					}}
				>
					Verticals
				</h3>
				<Verticals />

				<img alt="" className={styles.nodes} src="/images/nodes.png" />
			</div>
		</section>
		<section style={{ height: '100vh' }}>
			<div className={styles.sponsors}>
				<h2> Our Sponsors</h2>
				<hr />

				<img alt="" className={styles.nodes} src="/images/nodes.png" />
			</div>
		</section>
		<style jsx global>
			{`
				section {
					min-height: min-content;
					margin-bottom: var(--gap);
				}
			`}
		</style>
	</div>
);

export default Home;
