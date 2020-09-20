import styles from './sponsor.module.css';
import Footer from '@/components/front/footer';
import { NextPage } from 'next';
import Header from '@/components/header';

const Sponsor: NextPage = () => {
	return (
		<>
			<div className={styles.page}>
				<Header />
				<span
					style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
				></span>
				<div className={styles.wrapper}>
					<div className={styles.header}>Sponsor Us</div>
					<div className={styles.styledBody}>
						This February, HackSC will virtually host{' '}
						<span className={styles.bold}>800+</span> hackers for a weekend of
						learning, hacking, and collaboration. Students will have 36 hours to
						create lasting, innovative and impactful products. Sponsors will
						have an outstanding opportunity to{' '}
						<span className={styles.bold}>
							promote your own products and APIs,
						</span>{' '}
						as well as <span className={styles.bold}>access top talent</span>{' '}
						from around the country.
					</div>
					<div className={styles.styledBody}>
						Interested in sponsoring? E-mail us at{' '}
						<a href="mailto:sponsorship@hacksc.com" className={styles.email}>
							sponsorship@hacksc.com
						</a>
					</div>

					<div className={styles.statsSection}>
						<div className={styles.subheader}>Last Year&#39;s Successes</div>
						<div className={styles.stats}>
							<div className={styles.stat}>
								<span className={styles.number}>800+</span> attendees
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>100</span> projects submitted
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>40:60</span> female:male ratio
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>150</span> # of schools applied
							</div>

							<div className={styles.stat}>
								<span className={styles.number}>400+</span> usc students
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>2500+</span> # of applicants
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>92</span> # of prizes awarded
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>15</span> puppies
							</div>

							<div className={styles.stat}>
								<span className={styles.number}>3000</span> lbs of soylent
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>40</span> judges
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>30</span> sponsors
							</div>
							<div className={styles.stat}>
								<span className={styles.number}>infinite</span> memories made
							</div>
						</div>
					</div>
				</div>

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
		</>
	);
};

export default Sponsor;
