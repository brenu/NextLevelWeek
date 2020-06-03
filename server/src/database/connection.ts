import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, "database.sqlite"),
    },
    useNullAsDefault: true,
});

export default connection; 

// Migrations = Histórico/Versionamento do banco de dados
// Migrations ajudam a conseguir trabalhar com mais de um dev no projeto

