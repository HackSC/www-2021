import styles from './calendar.module.css';
import { FunctionComponent } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);
const myEventsList = [
	{
		allDay: false,
		end: new Date('August 29, 2020 11:13:00'),
		start: new Date('August 29, 2020 11:13:00'),
		title: 'test',
	},
	{
		allDay: true,
		end: new Date('September 01, 2020 11:13:00'),
		start: new Date('September 01, 2020 11:13:00'),
		title: 'All Day Event',
	},
];

const CalendarSection: FunctionComponent = () => (
	<>
		<section className={styles.calendar}>
			<div className={styles.calendarWrapper}>
				<div style={{ flexDirection: 'column' }}>
					<Calendar
						localizer={localizer}
						events={myEventsList}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500 }}
					/>
				</div>
			</div>
		</section>
	</>
);

export default CalendarSection;
