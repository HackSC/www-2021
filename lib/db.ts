const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.PROD_DB_HOSTNAME,
    database: process.env.PROD_DB_NAME,
    user: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
  },
})

let query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}

export { query };