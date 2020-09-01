import React from 'react';
import styles from './calendar.module.css';

const CalendarSection = () => (
	<>
		<section className={styles.calendar}>
			<div className={styles.calendarWrapper}>
				<div style={{ flexDirection: 'column' }}>
					<iframe
						title="calendar"
						src="https://calendar.google.com/calendar/embed?src=crcie5ocjmkf6uaju7q746seek%40group.calendar.google.com&ctz=America%2FLos_Angeles"
						width="800"
						height="600"
						frameBorder="0"
						scrolling="no"
						style={{ height: 500 }}
					></iframe>
				</div>
			</div>
		</section>
	</>
);

export default CalendarSection;
