const db = require('../../lib/db');
const escape = require('sql-template-strings');

const query = async (req, res) => {
	const {
		query: { email, ip },
	} = req;
	let my_ip = ip;

	if (!my_ip) my_ip = '0.0.0.0';

	const subs = await db.query(escape`
        SELECT *
        FROM signups
        WHERE email=${email}
    `);

	if (subs.length > 0)
		return res
			.status(400)
			.json({ success: null, error: 'Email already exists in the database.' });

	const result = await db.query(escape`
        INSERT INTO signups (email, ip, created_at)
        VALUES (${email}, ${my_ip}, ${toSqlDatetime(new Date())})
    `);

	res.status(200).json({ success: email, error: null });
};

const toSqlDatetime = (inputDate) => {
	const date = new Date(inputDate);
	const dateWithOffest = new Date(
		date.getTime() - date.getTimezoneOffset() * 60000
	);
	return dateWithOffest.toISOString().slice(0, 19).replace('T', ' ');
};

export default query;
