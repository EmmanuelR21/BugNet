/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { user_id: 1, username: 'aaron123', password: '123' },
    { user_id: 2, username: 'alD456', password: '456' },
    { user_id: 3, username: 'manny789', password: '789' },
  ]);
};
