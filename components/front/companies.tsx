import styles from './companies.module.css';
import Fade from 'react-reveal/Fade';
interface Company {
	name: string;
	url: string;
}

const GoldCompanyInfo: Company[] = [
	{
		name: 'rippleX',
		url: 'https://www.digitalocean.com/',
	},
	{
		name: 'intersystems',
		url: 'https://www.intersystems.com/',
	},
	{
		name: 'appsmith',
		url: 'https://www.intersystems.com/',
	},
];

const SilverCompanyInfo: Company[] = [
	{
		name: 'usc',
		url: 'https://www.digitalocean.com/',
	},
	{
		name: 'northropgrumman',
		url: 'https://www.digitalocean.com/',
	},
];

const BronzeCompanyInfo: Company[] = [
	{
		name: 'northropgrumman',
		url: 'https://www.digitalocean.com/',
	},
	{
		name: 'northropgrumman',
		url: 'https://www.digitalocean.com/',
	},
];

const InKindInfo: Company[] = [
	{
		name: 'stickermule',
		url: 'https://www.digitalocean.com/',
	},
	{
		name: 'vercel',
		url: 'https://www.digitalocean.com/',
	},
	{
		name: 'DO',
		url: 'https://www.digitalocean.com/',
	},
];

const GoldCompanies = () => {
	return (
		<div className={styles.row}>
			<div className={styles.company}>
				<Fade>
					{GoldCompanyInfo.map(({ name, url }) => {
						return (
							<div className={styles.gold} key={name}>
								&nbsp;
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt="" src={`/images/companies/${name}.png`} />
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
							<div className={styles.silver} key={name}>
								&nbsp;
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt="" src={`/images/companies/${name}.png`} />
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
								&nbsp;
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt="" src={`/images/companies/${name}.svg`} />
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
								&nbsp;
								<a href={`${url}`} target="_blank" rel="noreferrer">
									<img alt="" src={`/images/companies/${name}.png`} />
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
