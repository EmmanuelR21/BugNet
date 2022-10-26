/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('issues', table => {
        table.increments('id').primary();
        table.string('description').notNullable;
        table.string('code').notNullable;
        table.string('status').notNullable;
        table.string('code_feedback');
        table.string('comment_feedback');
        table.string('project_id').notNullable;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('issues')
};
