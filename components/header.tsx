import styles from './header.module.css';
import { FunctionComponent } from 'react';
import Image from '@/components/image';

const header: FunctionComponent = () => (
	<>
		<nav className={styles.nav}>
			<div className={styles.header}>
				<div>
					<Image
						className={styles.logo}
						height="60"
						alt="Our logo, a lotus flower with nodes. It's cool."
						width="60"
						path="logo.png"
					/>
					<h1 className={styles.year}> &rsquo;21</h1>
				</div>
				<div className={styles.links}>
					<a href="" className={styles.link}>
						Home
					</a>
					<a href="" className={styles.link}>
						Blog
					</a>
					<a href="" className={styles.link}>
						Sponsor Us
					</a>
					<a href="" className={styles.link}>
						Our Team
					</a>
					<a href="" className={styles.link}>
						<button className={styles.apply}>Apply Now</button>
					</a>
				</div>
			</div>
		</nav>
	</>
);

export default header;
