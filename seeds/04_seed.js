/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users_projects').del()
  await knex('users_projects').insert([
    { user_id: 1, project_id: 1 },
    { user_id: 1, project_id: 2 },
    { user_id: 1, project_id: 3 },
    { user_id: 2, project_id: 1 },
    { user_id: 2, project_id: 4 },
    { user_id: 2, project_id: 6 },
    { user_id: 3, project_id: 1 },
    { user_id: 3, project_id: 5 },
    { user_id: 3, project_id: 6 },
  ]);
};
