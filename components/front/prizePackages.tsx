import styles from './prizePackages.module.css';
import Fade from 'react-reveal/Fade';
interface Prize {
	name: string;
	color: string;
	description: string;
}

const PrizeInfo: Prize[] = [
	{
		name: 'outdoors',
		color: '#A4D5B2',
		description:
			' The Great Outdoors Package - electronic skateboard and hydroflask',
	},
	{
		name: 'lazyOutdoors',
		color: '#7968AE',
		description:
			'The Lazy Great Outdoors Package - picnic basket, picnic blanket, and outdoor speaker',
	},
	{
		name: 'tunes',
		color: '#D70E65',
		description: 'The Fancy Tunes Package - record player and records/speaker',
	},
	{
		name: 'netflix',
		color: '#AA2208',
		description:
			'The Netflix and Code Package - projector and amazon firestick',
	},
	{
		name: 'beach',
		color: '#FFD84C',
		description: 'The Basic Beach Package - $120 Amazon giftcard',
	},
];
const Packages = () => {
	return (
		<div className={styles.row}>
			<div className={styles.prizes}>
				<Fade>
					{PrizeInfo.map(({ name, color, description }) => {
						return (
							<div className={styles.column} key={name}>
								<div className={styles.card}>
									&nbsp;
									<img alt={description} src={`images/prizes/${name}.png`} />
								</div>
							</div>
						);
					})}
				</Fade>
			</div>
		</div>
	);
};

export default Packages;
