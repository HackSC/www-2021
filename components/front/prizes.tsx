import Image from '@/components/image';
import Packages from '@/components/front/prizePackages';
import styles from './prizes.module.css';

const Prizes = () => (
	<section className={styles.prizes} id="details">
		<h2 className={styles.prizesHeading}> Prizes </h2>
		<div>
			<div className={styles.prizesWrapper}>
				<div style={{ flexDirection: 'column' }}>
					<p>
						At HackSC 2021, HackSC Vertical winners will get to select from one
						of our five curated prize packages.
					</p>
				</div>
			</div>

			<Packages />
		</div>
	</section>
);

export { Prizes };
