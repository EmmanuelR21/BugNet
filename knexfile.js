// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'BugNet',
      user: 'aaronminaya0',
      password: 'Pwmf22gu.'
    },
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
