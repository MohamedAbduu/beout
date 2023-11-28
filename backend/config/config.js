require('dotenv').config();
module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": "dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": "dev",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": "dev",
    "host": "localhost",
    "dialect": "postgres"
  }
}
