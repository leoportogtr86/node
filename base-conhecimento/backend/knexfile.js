// Update with your config settings.
//knex init
module.exports = {




  client: 'postgresql',
  connection: {
    database: 'base_conhecimento',
    user: 'postgres',
    password: '151187'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
