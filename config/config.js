module.exports = {
    development: {
      "username": "root",
      "password": "mkchung8",
      "database": "roadrunner_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    test: {
      "username": "root",
      "password": null,
      "database": "roadrunner_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    production: {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
  