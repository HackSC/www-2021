import styles from './prizePackages.module.css';
import Fade from 'react-reveal/Fade';
interface Prize {
	name: string;
	color: string;
}

const PrizeInfo: Prize[] = [
	{
		name: 'lazyOutdoors',
		color: '#7968AE',
	},
	{
		name: 'beach',
		color: '#FFD84C',
	},
	{
		name: 'netflix',
		color: '#AA2208',
	},
	{
		name: 'outdoors',
		color: '#A4D5B2',
	},
	{
		name: 'tunes',
		color: '#D70E65',
	},
];
const Packages = () => {
	return (
		<div className={styles.row}>
			<div className={styles.prizes}>
				<Fade>
					{PrizeInfo.map(({ name, color }) => {
						return (
							<div className={styles.column} key={name}>
								<div className={styles.card}>
									&nbsp;
									<img alt="" src={`images/prizes/${name}.png`} />
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
