// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'BugNet',
      user: 'emmanuel',
      password: '2413'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
