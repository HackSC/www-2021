import styles from './verticals.module.css';
import Fade from 'react-reveal/Fade';
interface Vertical {
	name: string;
	byline: string;
	info: string;
	color: string;
}

const VerticalInfo: Vertical[] = [
	{
		name: 'person',
		byline:
			'Enrich relationships and encourage ways for people to connect more effectively.',
		info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
		color: '#FEDA22',
	},
	{
		name: 'team',
		byline:
			'Advance and redefine connectivity for collaboration and productivity among teams & colleagues.',
		info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
		color: '#86DCEA',
	},
	{
		name: 'customer',
		byline:
			'Facilitate communication directly among consumers and power communal exchange of products.',
		info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
		color: '#97329A',
	},
	{
		name: 'device',
		byline:
			'Discover and define new ways for devices to connect with each other.',
		info: 'asdfjksdfhnasjkfvasdjkfhajkjsdffjka',
		color: '#FF2B9D',
	},
];
const Verticals = () => {
	return (
		<div className={styles.verticals}>
			<Fade delay={100}>
				{VerticalInfo.map(({ name, byline, info, color }) => {
					return (
						<div className={styles.card} key={name}>
							<img
								alt={`An icon representing ${name}`}
								src={`/images/verticals/${name}.svg`}
								loading="lazy"
							/>
							<h3 style={{ color }}>{name}</h3>
							<p>{byline}</p>
						</div>
					);
				})}
			</Fade>
		</div>
	);
};

export default Verticals;
