import Head from 'next/head';
import Header from '@/components/header';
import styles from './index.module.css';
import { NextPage } from 'next';
import CalendarSection from '@/components/calendar';

const Calendar: NextPage = () => {
	return (
		<>
			<Head>
				<title>HackSC 2021 - Connect the World</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className={styles.wrapper}>
				<Header />
				<CalendarSection />

				<style jsx global>
					{`
						section {
							min-height: min-content;
							margin-bottom: var(--gap);
							height: 100vh;
						}
					`}
				</style>
			</div>
		</>
	);
};

export default Calendar;
