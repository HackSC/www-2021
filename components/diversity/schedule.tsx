import { Event } from '@/lib/getScheduleAsJson';

interface Props {
	schedule: Event[];
}

const Schedule: React.FC<Props> = ({ schedule }) => (
	<table style={{ margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
		<thead>
			<tr>
				<th>Date</th>
				<th>Start Time</th>
				<th>Ending time</th>
				<th>Event</th>
				<th>Meeting Link</th>
			</tr>
		</thead>
		<tbody>
			{schedule.map((event) => {
				return (
					<tr key={event.name}>
						<td>{event.date}</td>
						<td>{event.startTime}</td>
						<td>{event.endTime}</td>
						<td>{event.name}</td>
						<td>{event.link && <a href={event.link}>Click here</a>}</td>
					</tr>
				);
			})}
		</tbody>

		<style jsx>{`
			table {
				border: solid 1px #ddeeee;
				border-collapse: collapse;
				border-spacing: 0;
				font: normal 13px Arial, sans-serif;
			}
			thead th {
				background-color: black;
				border: solid 1px black;
				color: white;
				padding: 10px;
				text-align: left;
			}
			tbody td {
				border: solid 1px #ddeeee;
				padding: 10px;
			}
		`}</style>
	</table>
);

export default Schedule;
