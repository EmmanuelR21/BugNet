/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('bugs').del()
  await knex('bugs').insert([
    { bug_id: 1, project_id: 1, title: 'friends tab not working', description:'blah blah blah blah blah blah blah blah blah blah blah blah blah blah', code: 'friends.push(x)', status: 'todo', feedback: null, code_feedback: null, },
  ]);
};
