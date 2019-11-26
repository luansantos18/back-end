const secret = require('./secret')

module.exports = {
  development: {
    username: 'postgres',
    password: secret.DATABASE_PASSWORD,
    database: 'sisfin',
    host: '127.0.0.1',
    dialect: 'postgres',

    define: {
      // Table names won't be pluralized.
      freezeTableName: true,
    }
  },
};