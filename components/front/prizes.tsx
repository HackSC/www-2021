import Image from '@/components/image';
import Packages from '@/components/front/prizePackages';
import styles from './prizes.module.css';

const Prizes = () => (
	<section className={styles.prizes} id="details">
		<h2 className={styles.prizesHeading}> Prizes </h2>
		<div>
			At HackSC 2021, HackSC Vertical winners will get to select one of the
			following prize packages
			<Packages />
		</div>
	</section>
);

export { Prizes };
