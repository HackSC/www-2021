import styles from './header.module.css';
import { FunctionComponent } from 'react';
import Image from '@/components/image';
import Link from 'next/link';
import MLH from './front/MLH';

const header: FunctionComponent = () => (
	<>
		<nav className={styles.nav}>
			<div className={styles.header}>
				<MLH />
				<Link href="/">
					<a style={{ textDecoration: 'none' }}>
						<Image
							className={styles.logo}
							height="60"
							alt=""
							width="60"
							path="logo.png"
						/>
						<div className={styles.year}> &rsquo;21</div>
					</a>
				</Link>
				<div className={styles.links}>
					<Link href="/">
						<a href="/" className={`${styles.link} ${styles.home}`}>
							Home
						</a>
					</Link>
					{/* <a href="" className={styles.link}>
						Blog
					</a> */}
					<Link href="/sponsor">
						<a className={styles.link}>Sponsor Us</a>
					</Link>
					{/* <a href="https://dashboard.hacksc.com" className={styles.link}>
						<button className={styles.apply}>Apply Now</button>
					</a> */}
				</div>
			</div>
		</nav>
	</>
);

export default header;
