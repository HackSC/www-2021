import Logo from '../../images/logoAndText.png';
import styles from './footer.module.css';
import Email from '../../images/email.svg';
import Twitter from '../../images/twitter.svg';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.row}>
				<div className={`${styles.column} ${styles.socialColumn}`}>
					<img className={styles.logoGraphic} src={Logo} alt="footer logo" />
					<div className={styles.socialLinks}>
						<a href="mailto:hackers@hacksc.com">
							<img src={Email} alt="email link" />
						</a>
						<a
							href="https://www.facebook.com/hackscofficial/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Facebook} alt="facebook link" />
						</a>
						<a
							href="https://www.instagram.com/hackscofficial/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Instagram} alt="instagram link" />
						</a>
						<a
							href="https://twitter.com/hackscofficial"
							target="_blank"
							rel="noreferrer"
						>
							<img src={Twitter} alt="twitter link" />
						</a>
					</div>
					<div className={styles.copyright}>HackSC 2020 &copy;</div>
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
						<a href="mailto:hackers@hacksc.com">hackers@hacksc.com</a> or on
						social media if you have any questions or want more information.
						Want to talk about sponsorship? Let us know at{' '}
						<a href="mailto:sponsorship@hacksc.com">sponsorship@hacksc.com</a>!
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
