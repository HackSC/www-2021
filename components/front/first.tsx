import { useEffect } from 'react';
import styles from './first.module.css';
import { Fade } from 'react-reveal';
import Email from '@/components/front/email';

const First = () => {
	const canUseWebP = () => {
		if (!process.browser) {
			return false;
		}
		const elem = document.createElement('canvas');
		if (elem.getContext && elem.getContext('2d')) {
			// was able or not to get WebP representation
			return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
		}

		// very old browser like IE 8, canvas not supported
		return false;
	};
	const hasWebP = canUseWebP();
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
			<section style={{ height: '100vh', width: '100vw' }}>
				<Fade delay={50}>
					<span
						className={hasWebP ? styles.container : styles.containerFallback}
					>
						<span className={styles.applyNowWrapper}>
							<Fade delay={400}>
								<h1 className={styles.connect}>Connect the world</h1>
							</Fade>
							<Fade delay={1000}>
								{/* <button tabIndex={0} className={styles.apply}>
									Apply Now
								</button> */}
								<Email />
							</Fade>
						</span>
						<div className={styles.largest}>
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
					</span>
				</Fade>
			</section>
		</>
	);
};

export default First;
