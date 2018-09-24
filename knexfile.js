module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/notesDb/dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './api/notesDb/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './api/notesDb/seeds',
    },
  },
};
