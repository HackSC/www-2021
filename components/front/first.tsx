import { useState } from 'react';
import styles from './first.module.css';
import Email from '@/components/front/email';
import appearStyles from '../appear.module.css';
import cn from 'classnames';
import Image from '@/components/image';
import Group from '@/images/group.svg';
import Twitter from '../../public/images/footer/twitter.svg';
import Facebook from '../../public/images/footer/facebook.svg';
import Instagram from '../../public/images/footer/instagram.svg';

const First = () => {
	const [subscribed, setSubscribed] = useState(false);

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
				<div
					className={cn(
						appearStyles.appear,
						appearStyles['appear-first'],
						styles.hackscBackground
					)}
				>
					{/* <span className={styles.hacksc}>{({ toString: () => 'HackSC ', repeat: String.prototype.repeat }).repeat(7) }
						</span> */}

					<span className={styles.hacksc}>
						Hack<b>SC </b>Hack<b>SC </b>Hack<b>SC </b>Hack<b>SC </b>
						Hack<b>SC </b>Hack<b>SC </b>Hack<b>SC </b>
					</span>
				</div>

				{/* <span
					className={cn(appearStyles.appear, appearStyles['appear-second'])}
				>
					<img
						alt=""
						height="100px"
						width="100px"
						src="/images/dotflower.svg"
						className={styles.dotflower}
					/>
				</span> */}
				<div
					className={cn(
						appearStyles.appear,
						appearStyles['appear-second'],
						styles.containerWrapper
					)}
				>
					{/* <img
						src={Blob}
						className={cn(
							styles.blob,
							appearStyles.appear,
							appearStyles['appear-third']
						)}
						alt=""
					/> */}
					<div className={styles.container}>
						<div className={styles.globe}>
							<Image
								className={cn(
									appearStyles.appear,
									appearStyles['appear-third']
								)}
								alt=""
								width="100%"
								path="globeAndBlob.png"
							/>
						</div>
						<div
							className={cn(
								appearStyles.appear,
								appearStyles['appear-second'],
								styles.applyNowWrapper
							)}
						>
							<h1
								className={cn(
									appearStyles.appear,
									appearStyles['appear-second'],
									styles.connect
								)}
							>
								Connect the world
							</h1>
							<div
								className={`${appearStyles.appear} ${appearStyles['appear-third']} ${styles.rainbow} ${styles.largest} `}
							>
								at USC&apos;s Largest Hackathon
							</div>
							<div
								className={`${appearStyles.appear} ${appearStyles['appear-fourth']} ${styles.details}`}
							>
								02.19.21 &mdash; 02.21.21 || online
							</div>
							<div
								className={cn(
									appearStyles.appear,
									appearStyles['appear-fifth']
								)}
								style={{ textAlign: 'center' }}
							>
								<Email subscribed={subscribed} setSubscribed={setSubscribed} />
								{/* <a href="https://dashboard.hacksc.com" className={styles.link}>
									<button className={styles.apply}>Apply Now</button>
								</a> */}
							</div>
							<div
								className={cn(
									styles.groupImageContainer,
									appearStyles.appear,
									appearStyles['appear-seventh']
								)}
							>
								<Image className={styles.groupImage} alt="" path="group.svg" />
							</div>
						</div>
						<div
							className={cn(
								appearStyles.appear,
								appearStyles['appear-fifth'],
								styles.social
							)}
						>
							<a
								href="https://www.facebook.com/hackscofficial/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={Facebook} alt="Facebook link" loading="lazy" />
							</a>
							<a
								href="https://www.instagram.com/hackscofficial/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={Instagram} alt="Instagram link" loading="lazy" />
							</a>
							<a
								href="https://twitter.com/hackscofficial"
								target="_blank"
								rel="noreferrer"
							>
								<img src={Twitter} alt="Twitter link" loading="lazy" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default First;
