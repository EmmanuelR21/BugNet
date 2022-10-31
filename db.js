const { Pool } = require('pg')

const connectionDevelopment = {
    database: 'BugNet',  // Or replace this with your database name
    user: 'aaronminaya0',              // If you have a different postgres user, replace here
    password: 'Pwmf22gu.',                  // If you have a postgres password, write it here
    host: 'localhost',
    port: 5432
}

const connectionProduction = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)
module.exports = pool;