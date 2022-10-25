// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'todo',       // Or replace this with your database name
      user: 'postgres',
      password: ''
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};