import styles from './sponsors.module.css';
import {
	SilverCompanies,
	BronzeCompanies,
	InKind,
	GoldCompanies,
} from './companies';

const Sponsors = () => (
	<section className={styles.sponsors} id="details">
		<h2 className={styles.sponsorsHeading}> Sponsors </h2>
		<div className={styles.sponsorsWrapper}>
			<div style={{ flexDirection: 'column' }}>
				<p>
					Each year, our sponsors help us unite 800+ emerging developers,
					designers, and builders. Our sponsors make it possible for hackers to
					build something they&rsquo;re proud of. Interested in sponsoring?
					E-mail us at sponsorship@hacksc.com
				</p>
			</div>
		</div>

		<div>
			<GoldCompanies />
			<SilverCompanies />
			{/* <BronzeCompanies /> */}
			<InKind />
		</div>
	</section>
);

export { Sponsors };
