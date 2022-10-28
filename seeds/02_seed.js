/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    { project_id: 1, name: 'Meta', description: 'Social Media Application'},
    { project_id: 2, name: 'UMVC3', description: 'Fighting game'},
    { project_id: 3, name: 'Scarab', description: 'Archeoloy project'},
    { project_id: 4, name: 'spaceX', description: 'interloper'},
    { project_id: 5, name: 'butterfly', description: 'evolution project'},
    { project_id: 6, name: 'python', description: 'private python community'},
  ]);
};
