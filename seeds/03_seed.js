/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('issues').del()
  await knex('issues').insert([
    { id: 1, description: 'friends tab not working', code: 'friends.push(x)', status: 'todo', code_feedback: null, comment_feedback: null, project_id: 1 },
  ]);
};