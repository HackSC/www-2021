import Head from 'next/head';
import Header from '@/components/front/header';
import styles from './index.module.css';
import FirstSection from '@/components/front/first';
import Verticals from '@/components/front/verticals';
import FAQ from '@/components/front/faq';
import { NextPage } from 'next';
import Fade from 'react-reveal/Fade';
import Image from '@/components/image';

const Home: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<FirstSection />

			<section className={styles.details} style={{ minHeight: '75vh' }}>
				<Image className={styles.waves} height="375" path="waves.png" />
				<h1 className={styles.detailsHeading}> Details </h1>
				<div className={styles.detailsWrapper}>
					<div style={{ flexDirection: 'column' }}>
						<p>
							<strong>Want to connect the world?</strong> This year we are
							focused on ideas/solutions that will help connect our world during
							this time. Get ready for a weekend full of innovation, connection,
							and education. In an interdisciplinary endeavor, join together
							with 1000+ visionaries to engage in workshops, listen to speakers,
							and develop programs, tools, and relationships that can last for
							life. We hope to have you join us!
						</p>
						<FAQ />
					</div>
				</div>
				<Image alt="" className={styles.nodes2} path={'nodes-2.png'} />
				<div className={styles.hand}>
					<Fade right>
						<Image
							alt="The world is in your hands at HackSC."
							width="500"
							path="handglobe.png"
						/>
					</Fade>
				</div>
			</section>

			<section
				style={{ height: 'inherit', minHeight: '100vh', marginTop: 100 }}
			>
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

					<Image alt="" className={styles.nodes} path="nodes.png" />
				</div>
			</section>
			<section>
				<div className={styles.sponsors}>
					<h2> Our Sponsors</h2>
					<hr />
				</div>
			</section>
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

export default Home
