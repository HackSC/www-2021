import Image from '@/components/image';
import Verticals from '@/components/front/verticals';
import styles from './connectivity.module.css';

const Connectivity = () => (
	<section style={{ height: 'inherit', minHeight: '100vh', marginTop: 100 }}>
		<div className={styles.connectivity}>
			<h2> Theme: Connectivity </h2>
			<hr />
			<h3
				style={{
					color: '#757575',
					textTransform: 'uppercase',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '40px',
				}}
			>
				Verticals
			</h3>
			<Verticals />
			<Image alt="" className={styles.nodes} path={'nodes-2.png'} />
		</div>
	</section>
);

export { Connectivity };
