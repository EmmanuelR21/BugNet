/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('bugs', table => {
        table.increments('bug_id').primary();
        table.integer('project_id').notNullable;
        table.string('title').notNullable;
        table.string('description').notNullable;
        table.string('code').notNullable;
        table.string('status').notNullable;
        table.string('feedback');
        table.string('code_feedback');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('bugs')
};
