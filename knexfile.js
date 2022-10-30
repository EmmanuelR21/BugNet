// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todo-list',
      user: 'aldair',
      password: 'a'
    },
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
