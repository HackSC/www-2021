import Image from '@/components/image';
import Verticals from '@/components/front/verticals';
import styles from './connectivity.module.css';

const Connectivity = () => (
	<section style={{ height: 'inherit', minHeight: '60vh', marginTop: 100 }}>
		<div className={styles.connectivity}>
			<div className={styles.heading}>
				<h2> 2021 Verticals </h2>
			</div>
			<h4>Connectivity</h4>
			<Verticals />
			<Image alt="" className={styles.nodes} path={'nodes-2.png'} />
		</div>
	</section>
);

export { Connectivity };
