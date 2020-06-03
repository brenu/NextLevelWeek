import Knex from 'knex';

// Função onde criamos e atualizamos as informações
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

// Função na qual desfazemos ações incorretas do up
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}