import Image from '@/components/image';
import Packages from '@/components/front/prizePackages';
import styles from './prizes.module.css';

const Prizes = () => (
	<section className={styles.prizes} id="details">
		<h2 className={styles.prizesHeading}> Prizes </h2>
		<div>
			<Packages />
		</div>
	</section>
);

export { Prizes };
