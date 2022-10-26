/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users_projects').del()
  await knex('users_projects').insert([
    { user_id: 1, project_id: 1 },
  ]);
};
