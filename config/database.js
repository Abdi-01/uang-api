const mysql = require('mysql')
const util = require('util')

// const db = mysql.createPool({
//     host: process.env.HOSTSQL,
//     user: process.env.USERSQL,
//     password: process.env.PASSWORD,
//     database: process.env.DBSQL
// })

const db = mysql.createPool({
    host: 'localhost',
    user: 'ido-p',
    password: 'ido123',
    database: 'uang'
})

const dbQuery = util.promisify(db.query).bind(db)

module.exports = { db, dbQuery}