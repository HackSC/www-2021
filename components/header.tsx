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
						alt=""
						width="60"
						path="logo.png"
					/>
					<div className={styles.year}> &rsquo;21</div>
				</div>
				<div className={styles.links}>
					<a href="/" className={styles.link}>
						Home
					</a>
					{/* <a href="" className={styles.link}>
						Blog
					</a> */}
					<a href="/sponsor" className={styles.link}>
						Sponsor Us
					</a>
					<a href="/hacksconnect" className={styles.link}>
						HackSConnect
					</a>
					{/* <a href="" className={styles.link}>
						<button className={styles.apply}>Apply Now</button>
					</a> */}
				</div>
			</div>
		</nav>
	</>
);

export default header;
