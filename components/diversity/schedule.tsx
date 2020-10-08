const Schedule = () => (
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
			<tr>
				<td>10/24</td>
				<td>9:00 AM</td>
				<td>10:00 AM</td>
				<td>Opening Ceremony</td>
				<td>
					<a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjY3NDNhNDktZDVlNC00MWJlLTlkYmUtMmZkYTUzMThiODdj%40thread.v2/0?context=%7b%22Tid%22%3a%227bdbd6d0-6b61-4f0f-afcb-2585227c9771%22%2c%22Oid%22%3a%224585bfa1-9328-4e17-b211-1651dac9e073%22%7d">
						Click here
					</a>
				</td>
			</tr>
			<tr>
				<td>10/24</td>
				<td>10:00 AM</td>
				<td>11:00 AM</td>
				<td>Speed Friending</td>
				<td>
					<a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjllMDQ0OWUtZWY3My00NTYzLTgwMDQtMDA4YjBhMWZjNTJi%40thread.v2/0?context=%7b%22Tid%22%3a%227bdbd6d0-6b61-4f0f-afcb-2585227c9771%22%2c%22Oid%22%3a%224585bfa1-9328-4e17-b211-1651dac9e073%22%7d">
						Click here
					</a>
				</td>
			</tr>
			<tr style={{ borderBottom: '2px solid var(--blue)' }}>
				<td>10/24</td>
				<td>12:00 PM</td>
				<td>1:00 PM</td>
				<td>Intro to React Workshop</td>
				<td>
					<a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjMwMWE4ZTItNzFlYy00ZWMwLWJkMTctNDcyM2YyNGY5OWVm%40thread.v2/0?context=%7b%22Tid%22%3a%227bdbd6d0-6b61-4f0f-afcb-2585227c9771%22%2c%22Oid%22%3a%224585bfa1-9328-4e17-b211-1651dac9e073%22%7d">
						Click here
					</a>
				</td>
			</tr>
			<tr>
				<td>10/25</td>
				<td>7:30 AM</td>
				<td>8:00 AM</td>
				<td>Devpost workshop</td>
				<td>
					<a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjU0ZjEwOWItOGYyZi00ZmI0LTllMjEtZTAzMDYyMmFlZTlj%40thread.v2/0?context=%7b%22Tid%22%3a%227bdbd6d0-6b61-4f0f-afcb-2585227c9771%22%2c%22Oid%22%3a%224585bfa1-9328-4e17-b211-1651dac9e073%22%7d">
						Click here
					</a>
				</td>
			</tr>
			<tr>
				<td>10/25</td>
				<td>9:00 AM</td>
				<td>10:00 AM</td>
				<td>Judging</td>
				<td></td>
			</tr>
			<tr>
				<td>10/25</td>
				<td>10:00 AM</td>
				<td>11:00 AM</td>
				<td>Closing Ceremony</td>
				<td>
					<a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDM2ZDUwOWUtNGZjMy00ODM3LWE2OGYtOWRkOTgxZjk4YzRk%40thread.v2/0?context=%7b%22Tid%22%3a%227bdbd6d0-6b61-4f0f-afcb-2585227c9771%22%2c%22Oid%22%3a%224585bfa1-9328-4e17-b211-1651dac9e073%22%7d">
						Click here
					</a>
				</td>
			</tr>
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
