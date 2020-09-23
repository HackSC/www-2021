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
        FROM ${process.env.PROD_DB_NAME}
        WHERE email = '${email}'
    `);

	if (subs.length > 0)
		return res
			.status(400)
			.json({ success: null, error: 'Email already exists in the database.' });

	const result = await db.query(escape`
        INSERT INTO ${process.env.PROD_DB_NAME}
        VALUES ('${email}', '${my_ip}', '${Date.now()}')
    `);

	res.status(200).json({ success: email, error: null });
};

export default query;
