import styles from './cards.module.css';
interface Card {
	name: string;
	info: string;
	color: string;
	emoji: string;
}

const CardInfo: Card[] = [
	{
		name: 'Seeds',
		info:
			'Our seeds have cool ideas for a product but are looking to assemble their dream team.',
		color: '#792D12',
		emoji: '🌰',
	},
	{
		name: 'Sprouts',
		info:
			'These are the beginnings of a company that might need a few busy bees to help it thrive. They’re looking to expand and grow by recruiting bees.',
		color: '#67B60E',
		emoji: '🌱',
	},
	{
		name: 'Bees',
		info:
			'Bees can buzz around to seeds and sprouts and connect! Bees are students looking to build connections, learn about dope projects, and join them!',
		color: '#D6B605',
		emoji: '🐝',
	},
];
const Verticals = () => {
	return (
		<div className={styles.cards}>
			{CardInfo.map(({ name, info, color, emoji }) => {
				return (
					<div className={styles.card} key={name}>
						<h2>{emoji}</h2>
						<h3 style={{ color }}>{name}</h3>
						<p>{info}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Verticals;
