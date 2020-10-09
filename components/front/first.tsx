import { useState } from 'react';
import styles from './first.module.css';
import Email from '@/components/front/email';
import appearStyles from '../appear.module.css';
import cn from 'classnames';

const First = () => {
	const [subscribed, setSubscribed] = useState(false);

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
			{/* Preloads the fonts */}
			<span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}></span>
			<span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800 }}></span>
			<section style={{ minHeight: '100vh', width: '100vw' }}>
				{subscribed && (
					<div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<div className="confetti"></div>
						<style jsx>{`
							.confetti {
								width: 15px;
								height: 15px;
								background-color: #f2d74e;
								position: absolute;
								left: 50%;
								animation: confetti 5s ease-in-out -2s infinite;
								transform-origin: left top;
								z-index: 100000;
							}
							.confetti:nth-child(1) {
								background-color: #f2d74e;
								left: 10%;
								animation-delay: 0;
							}
							.confetti:nth-child(2) {
								background-color: #95c3de;
								left: 20%;
								animation-delay: 5s;
							}
							.confetti:nth-child(3) {
								background-color: #ff9a91;
								left: 30%;
								animation-delay: 3s;
							}
							.confetti:nth-child(4) {
								background-color: #f2d74e;
								left: 40%;
								animation-delay: 2.5s;
							}
							.confetti:nth-child(5) {
								background-color: #95c3de;
								left: 50%;
								animation-delay: 4s;
							}
							.confetti:nth-child(6) {
								background-color: #ff9a91;
								left: 60%;
								animation-delay: 6s;
							}
							.confetti:nth-child(7) {
								background-color: #f2d74e;
								left: 70%;
								animation-delay: 1.5s;
							}
							.confetti:nth-child(8) {
								background-color: #95c3de;
								left: 80%;
								animation-delay: 2s;
							}
							.confetti:nth-child(9) {
								background-color: #ff9a91;
								left: 90%;
								animation-delay: 3.5s;
							}
							.confetti:nth-child(10) {
								background-color: #f2d74e;
								left: 100%;
								animation-delay: 1.5s;
							}
							.confetti:nth-child(11) {
								background-color: #95c3de;
								left: 80%;
								animation-delay: 2s;
							}
							.confetti:nth-child(12) {
								background-color: #ff9a91;
								left: 90%;
								animation-delay: 2.5s;
							}
							.confetti:nth-child(13) {
								background-color: #f2d74e;
								left: 100%;
								animation-delay: 2.1s;
							}

							@keyframes confetti {
								0% {
									transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
								}
								25% {
									transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
								}
								50% {
									transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
								}
								75% {
									transform: rotateZ(5deg) rotateY(1080deg)
										translate(-10vw, 80vh);
								}
								100% {
									transform: rotateZ(15deg) rotateY(1440deg)
										translate(10vw, 110vh);
								}
							}
						`}</style>
					</div>
				)}
				<span
					className={cn(
						appearStyles.appear,
						appearStyles['appear-first'],
						styles.hackscBackground
					)}
				>
					<span className={styles.hacksc}>
						HackSC HackSC HackSC HackSC HackSC HackSC HackSC
					</span>
				</span>
				<span
					className={cn(appearStyles.appear, appearStyles['appear-second'])}
				>
					<img
						alt=""
						height="100px"
						width="100px"
						src="/images/dotflower.svg"
						className={styles.dotflower}
					/>
				</span>
				<span
					className={cn(appearStyles.appear, appearStyles['appear-second'], {
						[styles.container]: hasWebP,
						[styles.containerFallback]: !hasWebP,
					})}
				>
					<span
						className={cn(
							appearStyles.appear,
							appearStyles['appear-third'],
							styles.applyNowWrapper
						)}
					>
						<h1
							className={cn(
								appearStyles.appear,
								appearStyles['appear-fourth'],
								styles.connect
							)}
						>
							Connect the world
						</h1>
						{/* <button tabIndex={0} className={styles.apply}>
									Apply Now
								</button> */}
						<span
							className={cn(appearStyles.appear, appearStyles['appear-fifth'])}
						>
							<Email subscribed={subscribed} setSubscribed={setSubscribed} />
						</span>
					</span>
					<div className={styles.largest}>
						<span
							className={`${appearStyles.appear} ${appearStyles['appear-sixth']} ${styles.rainbow} ${styles.headingText} `}
						>
							USC&apos;s Largest <br />
							Hackathon
						</span>
						<div
							className={`${appearStyles.appear} ${appearStyles['appear-seventh']} ${styles.details} `}
						>
							<span>02.19.21 &mdash; 02.21.21 || ONLINE</span>
						</div>
					</div>
				</span>
			</section>
		</>
	);
};

export default First;
