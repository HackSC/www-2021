import Image from '@/components/image';
import Verticals from '@/components/front/verticals';
import styles from './connectivity.module.css';

const Connectivity = () => (
	<section className={styles.connectivity} id="details">
		<h2 className={styles.connectivityHeading}> Verticals </h2>
		<div className={styles.connectivityWrapper}>
			<div style={{ flexDirection: 'column' }}>
				<p>
					In order to address this tumultuous time of COVID-19 and social
					distancing, HackSC 2021 is all about <strong>Connectivity</strong>. At
					HackSC, hackers can create technology solutions to bring the world
					closer together under four verticals: device, team, customer, and
					person
				</p>
			</div>
		</div>

		<div>
			<Verticals />
			<Image alt="" className={styles.nodes} path={'nodes-2.png'} />
		</div>
	</section>
);

export { Connectivity };
