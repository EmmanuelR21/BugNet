/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    { id: 1, name: 'Meta', description: 'Social Media Application'},
    { id: 2, name: 'UMVC3', description: 'Fighting game'},
    { id: 3, name: 'Scarab', description: 'Archeoloy project'},
    { id: 4, name: 'spaceX', description: 'interloper'},
    { id: 5, name: 'butterfly', description: 'evolution project'},
    { id: 6, name: 'python', description: 'private python community'},
  ]);
};
