import styles from './first.module.css';
import { Fade } from 'react-reveal';

const First = () => {
	return (
		<section style={{ height: '100vh' }}>
			<Fade delay={50}>
				<div className={styles.hacksc} />
			</Fade>
			<span className={styles.container}>
				<span className={styles.applyNowWrapper}>
					<Fade delay={400}>
						<span className={`${styles.rainbow} ${styles.headingText}`}>
							USC&apos;s Largest <br />
							Hackathon
						</span>
					</Fade>
					<Fade delay={1000}>
						<div className={styles.details}>
							<span className={styles.rainbow}>02.19.21 &mdash; 02.21.21</span>
							<span className={styles.rainbow}> Online</span>
						</div>
					</Fade>
					<Fade delay={1600}>
						<button className={styles.apply}>Apply Now</button>
					</Fade>
				</span>
			</span>
		</section>
	);
};

export default First;
