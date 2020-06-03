import Knex from 'knex';

// Função onde criamos e atualizamos as informações
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });
}

// Função na qual desfazemos ações incorretas do up
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}