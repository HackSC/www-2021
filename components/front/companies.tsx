import styles from './companies.module.css';
import Fade from 'react-reveal/Fade';
interface Company {
	name: string;
	url: string;
}

const GoldCompanyInfo: Company[] = [
	// {
	// 	name: 'rippleX',
	// 	url: 'https://ripplex.io/',
	// },
	{
		name: 'intersystems',
		url: 'https://www.intersystems.com/',
	},
	{
		name: 'appsmith',
		url: 'https://www.appsmith.com/',
	},
];

const SilverCompanyInfo: Company[] = [
	{
		name: 'uscCarc',
		url: 'https://carc.usc.edu/',
	},
	{
		name: 'northropgrumman',
		url: 'https://www.northropgrumman.com/',
	},
];

const BronzeCompanyInfo: Company[] = [
	{
		name: 'uscCarc',
		url: 'https://carc.usc.edu/',
	},
	{
		name: 'northropgrumman',
		url: 'https://www.northropgrumman.com/',
	},
];

const InKindInfo: Company[] = [
	{
		name: 'stickermule',
		url: 'http://hackp.ac/mlh-stickermule-hackathons',
	},
	{
		name: 'vercel',
		url: 'https://vercel.com/',
	},
	{
		name: 'DigitalOcean',
		url: 'https://www.digitalocean.com/',
	},
	// {
	// 	name: 'gcp',
	// 	url: 'https://www.digitalocean.com/',
	// },
];

const GoldCompanies = () => {
	return (
		<div className={styles.row}>
			<div className={styles.company}>
				<Fade>
					{GoldCompanyInfo.map(({ name, url }) => {
						return (
							<div className={styles.gold} key={name}>
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt={name} src={`/images/companies/${name}.png`} />
								</a>
							</div>
						);
					})}
				</Fade>
			</div>
		</div>
	);
};

const SilverCompanies = () => {
	return (
		<div className={styles.row}>
			<div className={styles.company}>
				<Fade>
					{SilverCompanyInfo.map(({ name, url }) => {
						return (
							<div className={styles.bronze} key={name}>
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt={name} src={`/images/companies/${name}.png`} />
								</a>
							</div>
						);
					})}
				</Fade>
			</div>
		</div>
	);
};

const BronzeCompanies = () => {
	return (
		<div className={styles.row}>
			<div className={styles.company}>
				<Fade>
					{BronzeCompanyInfo.map(({ name, url }) => {
						return (
							<div className={styles.bronze} key={name}>
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt={name} src={`/images/companies/${name}.svg`} />
								</a>
							</div>
						);
					})}
				</Fade>
			</div>
		</div>
	);
};

const InKind = () => {
	return (
		<div className={styles.row}>
			<div className={styles.company}>
				<Fade>
					{InKindInfo.map(({ name, url }) => {
						return (
							<div className={styles.inkind} key={name}>
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt={name} src={`/images/companies/${name}.png`} />
								</a>
							</div>
						);
					})}
				</Fade>
			</div>
		</div>
	);
};

export { GoldCompanies, SilverCompanies, BronzeCompanies, InKind };
