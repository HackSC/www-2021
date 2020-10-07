import styles from './header.module.css';
import { FunctionComponent } from 'react';
import Image from '@/components/image';
import Link from 'next/link';

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
					<Link href="/">
						<a href="/" className={styles.link}>
							Home
						</a>
					</Link>
					{/* <a href="" className={styles.link}>
						Blog
					</a> */}
					<Link href="/sponsor">
						<a className={styles.link}>Sponsor Us</a>
					</Link>
					<Link href="/hacksconnect">
						<a className={styles.link}>HackSConnect</a>
					</Link>
					{/* <a href="" className={styles.link}>
						<button className={styles.apply}>Apply Now</button>
					</a> */}
				</div>
			</div>
		</nav>
	</>
);

export default header;
