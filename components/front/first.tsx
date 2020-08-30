import styles from './first.module.css';
import { Fade } from 'react-reveal';
import Image from '../image';

const First = () => {
	return (
		<>
			<Fade delay={50}>
				<div className={styles.hackscBackground} />
				<span className={styles.hacksc}>
					HackSC HackSC HackSC HackSC HackSC HackSC HackSC
				</span>
			</Fade>
			<Fade delay={50}>
				<img alt="" src="/images/dotflower.svg" className={styles.dotflower} />
			</Fade>
			<section style={{ height: '100vh' }}>
				<Fade delay={50}>
					<span className={styles.container}>
						<span className={styles.applyNowWrapper}>
							<Fade delay={400}>
								<div className={styles.connect}>Connect the world</div>
							</Fade>
							<Fade delay={1000}>
								<button tabIndex={0} className={styles.apply}>
									Apply Now
								</button>
							</Fade>
						</span>
						<div className={styles.largest}>
							<div>
								<Fade delay={1400}>
									<span className={`${styles.rainbow} ${styles.headingText}`}>
										USC&apos;s Largest <br />
										Hackathon
									</span>
								</Fade>
								<Fade delay={1800}>
									<div className={styles.details}>
										<span>02.19.21 &mdash; 02.21.21 || ONLINE || FREE</span>
									</div>
								</Fade>
							</div>
						</div>
					</span>
				</Fade>
			</section>
		</>
	);
};

export default First;
