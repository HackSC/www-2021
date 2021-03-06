import styles from './footer.module.css';
import Image from '@/components/image';
import Email from '../../public/images/footer/email.svg';
import Twitter from '../../public/images/footer/twitter.svg';
import Facebook from '../../public/images/footer/facebook.svg';
import Instagram from '../../public/images/footer/instagram.svg';
import Vercel from '../../public/images/footer/vercel.svg';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<a
				id={styles['mlh-trust-badge']}
				href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
				target="_blank"
				rel="noreferrer"
			>
				<img
					src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg"
					alt="Major League Hacking 2021 Hackathon Season"
				/>
			</a>
			<div className={styles.row}>
				<div className={`${styles.column} ${styles.socialColumn}`}>
					<Image className={styles.logoGraphic} alt="" path="logoAndText.png" />
					<div className={styles.socialLinks}>
						<a href="mailto:team@hacksc.com">
							<img src={Email} alt="Email link" loading="lazy" />
						</a>
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
					<div className={styles.copyright}>HackSC &copy;</div>
					<div className={styles.vercel}>
						<a
							href="https://vercel.com?utm_source=www-2021&utm_campaign=oss"
							target="_blank"
							rel="noopener noreferrer"
						>
							Powered by <img src={Vercel} alt="Vercel Logo" loading="lazy" />
						</a>
					</div>
				</div>

				<div className={`${styles.column} ${styles.linksColumn}`}>
					<div className={styles.bold}>HackSC</div>
					<div className={styles.links}>
						<a href="https://hacksc.com">Overview</a>
						<a
							href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
							target="_blank"
							rel="noreferrer"
						>
							MLH Code of Conduct
						</a>
					</div>
				</div>

				<div className={`${styles.column} ${styles.contactColumn}`}>
					<div className={styles.bold}>Contact us</div>
					<div className={styles.contactBody}>
						Reach out to us at{' '}
						<a href="mailto:team@hacksc.com">team@hacksc.com</a> or on social
						media if you have any questions or want more information. Want to
						talk about sponsorship? Let us know at{' '}
						<a href="mailto:sponsorship@hacksc.com">sponsorship@hacksc.com</a>!
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
